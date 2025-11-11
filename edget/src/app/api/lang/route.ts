import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(()=> ({} as any))
  const lang = body?.lang === 'am' ? 'am' : 'en'
  const res = NextResponse.json({ ok: true })
  res.cookies.set('lang', lang, { path: '/', maxAge: 60*60*24*365 })
  return res
}
