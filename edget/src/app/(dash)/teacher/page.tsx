import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Link from 'next/link'

export default function TeacherDash() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">{require('@/lib/i18n').t().pages.dashboards.teacher.title}</h1>
      <p className="text-gray-600">{require('@/lib/i18n').t().pages.dashboards.teacher.lead}</p>
      <Card>
        <CardHeader>
          <div className="font-medium">Actions</div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Link className="rounded-md border px-3 py-2 hover:bg-gray-50" href="/dash/teacher/fee">{require('@/lib/i18n').t().pages.dashboards.teacher.payFee}</Link>
            <Link className="rounded-md border px-3 py-2 hover:bg-gray-50" href="/dash/teacher/requests">{require('@/lib/i18n').t().pages.dashboards.teacher.requests}</Link>
            <Link className="rounded-md border px-3 py-2 hover:bg-gray-50" href="/dash/teacher/attendance">Attendance</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
