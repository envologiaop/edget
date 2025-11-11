"use client"
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { tClient as t } from '@/lib/i18n.client'

export default function AdminRequestsPage() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)

  async function refresh() {
    setLoading(true)
    try {
      const r = await fetch('/api/admin/requests')
      const d = await r.json()
      setItems(d.items || [])
    } finally { setLoading(false) }
  }

  useEffect(()=>{ refresh() },[])

  async function decide(id: string, approve: boolean) {
    setSaving(id + (approve?'+':'-'))
    try {
      await fetch('/api/admin/requests', { method: 'PATCH', body: JSON.stringify({ requestId: id, approve }) })
      setItems((prev)=> prev.filter(it=> it.id!==id))
    } finally { setSaving(null) }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">{t().pages.dashboards.admin.requests}</h1>
      {loading ? (
        <div className="text-sm text-gray-600">{t().pages.common.loading}</div>
      ) : items.length===0 ? (
        <div className="text-sm text-gray-600">{t().pages.common.none}</div>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {items.map((it)=> (
            <li key={it.id}>
              <Card>
                <CardHeader>
                  <div className="font-medium">{it.student?.name || 'Student'} → {it.teacher?.user?.name || 'Teacher'}</div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-700">Package: {it.package?.name} · {it.package?.sessionsPerWeek}x{it.package?.hoursPerSession}h</div>
                  <div className="mt-3 flex gap-2">
                    <Button disabled={saving!==null} onClick={()=>decide(it.id, true)}>{t().pages.common.approve}</Button>
                    <Button variant="secondary" disabled={saving!==null} onClick={()=>decide(it.id, false)}>{t().pages.common.reject}</Button>
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
