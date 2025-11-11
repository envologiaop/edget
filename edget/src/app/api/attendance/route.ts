import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'
import { startOfWeek } from '@/lib/week'

export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = (session.user as any).id
  const role = (session as any).role

  if (role === 'STUDENT') {
    const bookings = await prisma.booking.findMany({
      where: { tutorRequest: { studentId: userId, status: 'APPROVED' } },
      include: { tutorRequest: { include: { teacher: { include: { user: true } }, package: true } }, attendances: true },
    })
    return NextResponse.json({ bookings })
  }
  if (role === 'TEACHER') {
    const teacher = await prisma.teacherProfile.findUnique({ where: { userId } })
    if (!teacher) return NextResponse.json({ bookings: [] })
    const bookings = await prisma.booking.findMany({
      where: { tutorRequest: { teacherId: teacher.id, status: 'APPROVED' } },
      include: { tutorRequest: { include: { student: true, package: true } }, attendances: true },
    })
    return NextResponse.json({ bookings })
  }
  return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = (session.user as any).id
  const role = (session as any).role
  const { bookingId, confirm } = await req.json()
  if (!bookingId) return NextResponse.json({ error: 'Missing bookingId' }, { status: 400 })

  const booking = await prisma.booking.findUnique({ where: { id: bookingId }, include: { tutorRequest: true } })
  if (!booking) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  if (role === 'STUDENT' && booking.tutorRequest.studentId !== userId) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  if (role === 'TEACHER') {
    const teacher = await prisma.teacherProfile.findUnique({ where: { userId } })
    if (!teacher || booking.tutorRequest.teacherId !== teacher.id) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const weekStart = startOfWeek(new Date())
  let attendance = await prisma.weeklyAttendance.findFirst({ where: { bookingId, weekStart } })
  if (!attendance) {
    attendance = await prisma.weeklyAttendance.create({ data: { bookingId, weekStart, status: 'missing' } })
  }

  const data: any = {}
  if (role === 'STUDENT') data.studentConfirm = !!confirm
  if (role === 'TEACHER') data.teacherConfirm = !!confirm

  // determine status
  let status = attendance.status
  const sc = role === 'STUDENT' ? !!confirm : attendance.studentConfirm ?? null
  const tc = role === 'TEACHER' ? !!confirm : attendance.teacherConfirm ?? null
  if (sc === true && tc === true) status = 'confirmed'
  else if (sc === false || tc === false) status = 'flagged'
  else status = 'missing'

  await prisma.weeklyAttendance.update({ where: { id: attendance.id }, data: { ...data, status } })

  return NextResponse.json({ ok: true })
}
