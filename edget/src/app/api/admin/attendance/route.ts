import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await auth()
  if (!session || (session as any).role !== 'ADMIN') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const items = await prisma.weeklyAttendance.findMany({ where: { OR: [ { status: 'flagged' }, { studentConfirm: null }, { teacherConfirm: null } ] }, include: { booking: { include: { tutorRequest: { include: { student: true, teacher: { include: { user: true } }, package: true } } } } }, orderBy: { weekStart: 'desc' } })
  return NextResponse.json({ items })
}
