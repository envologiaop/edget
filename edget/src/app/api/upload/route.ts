import { NextRequest, NextResponse } from 'next/server'
import { uploadFile } from '@/lib/storage'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const file = form.get('file') as File | null
  const key = String(form.get('key') || '')
  if (!file || !key) return NextResponse.json({ error: 'Missing file/key' }, { status: 400 })
  const arrayBuffer = await file.arrayBuffer()
  const buf = Buffer.from(arrayBuffer)
  const url = await uploadFile(buf, key, file.type)
  return NextResponse.json({ ok: true, url })
}
