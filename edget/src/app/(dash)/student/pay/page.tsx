"use client"
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Select } from '@/components/ui/Select'
import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { tClient as t } from '@/lib/i18n.client'

type Request = { id: string; teacher?: { user?: { name?: string } }; package?: { name: string } }

export default function StudentPayPage() {
  const [requests, setRequests] = useState<Request[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    fetch('/api/student/requests').then(r=>r.json()).then(d=>setRequests(d.items||[]))
  },[])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    const res = await fetch('/api/payment', { method: 'POST', body: fd })
    setLoading(false)
    if (res.ok) alert(t().messages.paymentUploaded)
    else alert(t().messages.paymentFailed)
  }

  return (
    <div className="max-w-xl">
      <Card>
        <CardHeader>
          <div className="font-medium">{t().pages.dashboards.student.uploadPayment}</div>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="request">{t().pages.dashboards.student.requestTutor}</Label>
              <Select id="request" name="requestId" required>
                <option value="">Select a request</option>
                {requests.map(r=> (
                  <option key={r.id} value={r.id}>{r.package?.name} with {r.teacher?.user?.name}</option>
                ))}
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="reference">{t().pages.dashboards.items.reference}</Label>
              <Input id="reference" name="reference" placeholder="e.g. CBE-123456" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="amount">{t().pages.dashboards.items.amount} (ETB)</Label>
              <Input id="amount" name="amount" type="number" min={0} step="1" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="proof">Proof image</Label>
              <input id="proof" name="proof" type="file" accept="image/*" className="block w-full text-sm" required />
            </div>
            <Button disabled={loading} type="submit">{loading ? t().pages.register.student.submitting : t().pages.register.student.submit}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
