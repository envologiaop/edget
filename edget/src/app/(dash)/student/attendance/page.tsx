"use client"
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { tClient as t } from '@/lib/i18n.client'

export default function StudentAttendancePage() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{ 
    fetch('/api/attendance').then(r=>r.json()).then(d=> { setItems(d.bookings||[]); setLoading(false) })
  },[])

  async function confirm(bookingId: string, confirm: boolean) {
    await fetch('/api/attendance', { method: 'POST', body: JSON.stringify({ bookingId, confirm }) })
    alert(t().messages.attendanceSubmitted)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">{t().pages.dashboards.student.attendance}</h1>
      {loading ? <div className="text-sm text-gray-600">{t().pages.common.loading}</div> : items.length===0 ? <div className="text-sm text-gray-600">{t().pages.common.none}</div> : (
        <ul className="grid gap-4 md:grid-cols-2">
          {items.map(b=> (
            <li key={b.id}>
              <Card>
                <CardHeader>
                  <div className="font-medium">{b.tutorRequest.package.name} with {b.tutorRequest.teacher?.user?.name || ''}</div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">Status: {b.attendances?.[0]?.status || 'missing'}</div>
                  <div className="mt-3 flex gap-2">
                    <Button onClick={()=>confirm(b.id, true)}>{t().pages.common.confirm}</Button>
                    <Button variant="secondary" onClick={()=>confirm(b.id, false)}>{t().pages.common.reportIssue}</Button>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
