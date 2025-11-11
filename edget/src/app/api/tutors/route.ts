import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const subject = searchParams.get('subject')?.toUpperCase().replace(/\s+/g, '_')
  const grade = searchParams.get('grade') ? parseInt(String(searchParams.get('grade')), 10) : undefined
  const region = searchParams.get('region') || undefined
  const city = searchParams.get('city') || undefined

  const where: any = {
    status: 'APPROVED',
    listing: { is: { visible: true } },
  }
  if (subject) where.subjects = { has: subject }
  if (grade && !isNaN(grade)) where.preferredGrades = { has: grade }
  if (region) where.user = { is: { region } }
  if (city) where.user = { ...(where.user || {}), city }

  const teachers = await prisma.teacherProfile.findMany({
    where,
    include: { user: true },
    orderBy: { id: 'desc' },
  })

  const items = teachers.map((t) => ({
    id: t.id,
    name: t.user.name,
    gender: t.user.gender ?? undefined,
    age: t.user.age ?? undefined,
    region: t.user.region ?? undefined,
    city: t.user.city ?? undefined,
    kebele: t.user.kebele ?? undefined,
    academicGrade: t.academicGrade,
    subjects: t.subjects,
  }))

  return NextResponse.json({ items })
}
