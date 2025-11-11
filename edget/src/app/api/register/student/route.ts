import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const name = String(form.get('name') || '')
  const email = String(form.get('email') || '')
  const password = String(form.get('password') || '')
  const age = form.get('age') ? Number(form.get('age')) : undefined
  const gender = form.get('gender') ? String(form.get('gender')) : undefined
  const klass = String(form.get('class') || '')
  const region = String(form.get('region') || '')
  const city = String(form.get('city') || '')
  const kebele = String(form.get('kebele') || '')

  if (!name || !email || !password || !klass) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const hash = await bcrypt.hash(password, 10)

  const frontFile = form.get('nationalIdFront') as File | null
  const backFile = form.get('nationalIdBack') as File | null
  let nationalIdFrontUrl = ''
  let nationalIdBackUrl = ''
  if (frontFile) {
    const key = `ids/student/front-${Date.now()}-${email}`
    const res = await fetch(new URL(req.url).origin + '/api/upload', { method: 'POST', body: (()=>{const fd=new FormData();fd.append('file', frontFile);fd.append('key', key);return fd})() })
    if (res.ok) { const j = await res.json(); nationalIdFrontUrl = j.url }
  }
  if (backFile) {
    const key = `ids/student/back-${Date.now()}-${email}`
    const res = await fetch(new URL(req.url).origin + '/api/upload', { method: 'POST', body: (()=>{const fd=new FormData();fd.append('file', backFile);fd.append('key', key);return fd})() })
    if (res.ok) { const j = await res.json(); nationalIdBackUrl = j.url }
  }

  try {
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash: hash,
        role: 'STUDENT',
        name,
        age,
        gender,
        region,
        city,
        kebele,
        student: {
          create: {
            class: klass,
            nationalIdFrontUrl,
            nationalIdBackUrl,
          },
        },
      },
    })
    return NextResponse.json({ ok: true, userId: user.id })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
