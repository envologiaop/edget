import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Link from 'next/link'

export default function AdminDash() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">{require('@/lib/i18n').t().pages.dashboards.admin.title}</h1>
      <p className="text-gray-600">{require('@/lib/i18n').t().pages.dashboards.admin.lead}</p>
      <Card>
        <CardHeader>
          <div className="font-medium">{require('@/lib/i18n').t().pages.common.quickLinks}</div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Link className="rounded-md border px-3 py-2 hover:bg-gray-50" href="/dash/admin/teachers">Teacher approvals</Link>
            <Link className="rounded-md border px-3 py-2 hover:bg-gray-50" href="/dash/admin/requests">Tutor requests</Link>
            <Link className="rounded-md border px-3 py-2 hover:bg-gray-50" href="/dash/admin/payments">Payments</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
