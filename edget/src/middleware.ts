import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from '@/auth'

const roleRoutes: Record<string, Array<string>> = {
  '/dash/admin': ['ADMIN'],
  '/dash/teacher': ['TEACHER'],
  '/dash/student': ['STUDENT'],
}

export async function middleware(req: NextRequest) {
  const session = await auth()
  const url = req.nextUrl.pathname

  for (const base in roleRoutes) {
    if (url.startsWith(base)) {
      if (!session) return NextResponse.redirect(new URL('/login', req.url))
      const allowed = roleRoutes[base]
      const role = (session as any).role
      if (!allowed.includes(role)) return NextResponse.redirect(new URL('/', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dash/:path*'],
}
