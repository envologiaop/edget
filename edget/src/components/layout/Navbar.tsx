import { Container } from '@/components/ui/Container'
import Link from 'next/link'
import { auth, signOut } from '@/auth'
import { getLang, t } from '@/lib/i18n'
import { LangSwitch } from '@/components/LangSwitch'

export async function Navbar() {
  const session = await auth()
  const lang = getLang()
  const i = t()
  const role = (session as any)?.role
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-gray-900">{i.app.name}</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/tutors" className="text-gray-600 hover:text-gray-900">{i.nav.tutors}</Link>
          <Link href="/packages" className="text-gray-600 hover:text-gray-900">{i.nav.packages}</Link>
          <Link href="/register/student" className="text-gray-600 hover:text-gray-900">{i.nav.student}</Link>
          <Link href="/register/teacher" className="text-gray-600 hover:text-gray-900">{i.nav.teacher}</Link>
          <LangSwitch lang={lang as any} />
          {session ? (
            <>
              {role === 'STUDENT' && <Link href="/dash/student" className="text-gray-600 hover:text-gray-900">{i.nav.student}</Link>}
              {role === 'TEACHER' && <Link href="/dash/teacher" className="text-gray-600 hover:text-gray-900">{i.nav.teacher}</Link>}
              {role === 'ADMIN' && <Link href="/dash/admin" className="text-gray-600 hover:text-gray-900">{i.nav.admin}</Link>}
              <form action={async () => { 'use server'; await signOut(); }}>
                <button className="rounded-md border px-3 py-1.5 hover:bg-gray-50" type="submit">{i.nav.logout}</button>
              </form>
            </>
          ) : (
            <Link href="/login" className="rounded-md border px-3 py-1.5 hover:bg-gray-50">{i.nav.login}</Link>
          )}
        </nav>
      </Container>
    </header>
  )
}
