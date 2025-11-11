import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

const SUBJECT_MAP: Record<string, string> = {
  english: 'ENGLISH',
  math: 'MATH',
  physics: 'PHYSICS',
  biology: 'BIOLOGY',
  chemistry: 'CHEMISTRY',
  economics: 'ECONOMICS',
  business: 'BUSINESS',
  civics: 'CIVICS',
  'akababi science': 'AKABABI_SCIENCE',
  'hibreteseb science': 'HIBRETESEB_SCIENCE',
}

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const name = String(form.get('name') || '')
  const email = String(form.get('email') || '')
  const password = String(form.get('password') || '')
  const age = form.get('age') ? Number(form.get('age')) : undefined
  const gender = form.get('gender') ? String(form.get('gender')) : undefined
  const university = String(form.get('university') || '')
  const department = String(form.get('department') || '')
  const academicGrade = String(form.get('academicGrade') || '')
  const region = String(form.get('region') || '')
  const city = String(form.get('city') || '')
  const kebele = String(form.get('kebele') || '')
  const subjectsStr = String(form.get('subjects') || '')
  const preferredGradesStr = String(form.get('preferredGrades') || '')

  if (!name || !email || !password || !university || !department || !academicGrade) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const hash = await bcrypt.hash(password, 10)

  async function up(name: string, keyPrefix: string) {
    const f = form.get(name) as File | null
    if (!f) return ''
    const key = `${keyPrefix}-${Date.now()}-${email}`
    const res = await fetch(new URL(req.url).origin + '/api/upload', { method: 'POST', body: (()=>{const fd=new FormData();fd.append('file', f);fd.append('key', key);return fd})() })
    if (!res.ok) return ''
    const j = await res.json();
    return j.url
  }
  const photoUrl = await up('photo', 'ids/teacher/photo')
  const universityIdUrl = await up('universityId', 'ids/teacher/university')
  const nationalIdFrontUrl = await up('nationalIdFront', 'ids/teacher/front')
  const nationalIdBackUrl = await up('nationalIdBack', 'ids/teacher/back')

  const subjects = subjectsStr
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
    .map((s) => SUBJECT_MAP[s])
    .filter(Boolean) as any

  const preferredGrades = preferredGradesStr
    .split(',')
    .map((s) => parseInt(s.trim(), 10))
    .filter((n) => !isNaN(n) && n >= 1 && n <= 12)

  try {
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash: hash,
        role: 'TEACHER',
        name,
        age,
        gender,
        region,
        city,
        kebele,
        teacher: {
          create: {
            photoUrl,
            university,
            department,
            academicGrade,
            universityIdUrl,
            nationalIdFrontUrl,
            nationalIdBackUrl,
            subjects,
            preferredGrades,
          },
        },
      },
    })
    return NextResponse.json({ ok: true, userId: user.id })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
