import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Link from 'next/link'

export default function StudentDash() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">{require('@/lib/i18n').t().pages.dashboards.student.title}</h1>
      <p className="text-gray-600">{require('@/lib/i18n').t().pages.dashboards.student.lead}</p>
      <Card>
        <CardHeader>
          <div className="font-medium">Get started</div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Link className="rounded-md border px-3 py-2 hover:bg-gray-50" href="/tutors">{require('@/lib/i18n').t().nav.tutors}</Link>
            <Link className="rounded-md border px-3 py-2 hover:bg-gray-50" href="/dash/student/request">{require('@/lib/i18n').t().pages.dashboards.student.requestTutor}</Link>
            <Link className="rounded-md border px-3 py-2 hover:bg-gray-50" href="/dash/student/pay">{require('@/lib/i18n').t().pages.dashboards.student.uploadPayment}</Link>
            <Link className="rounded-md border px-3 py-2 hover:bg-gray-50" href="/dash/student/attendance">{require('@/lib/i18n').t().pages.dashboards.student.attendance}</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
