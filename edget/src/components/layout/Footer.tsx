import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <Container className="py-8 text-sm text-gray-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Edget. All rights reserved.</div>
        <div className="space-x-4">
          <a href="/tutors" className="hover:underline">{require('@/lib/i18n').t().nav.tutors}</a>
          <a href="/packages" className="hover:underline">{require('@/lib/i18n').t().nav.packages}</a>
        </div>
      </Container>
    </footer>
  )
}
