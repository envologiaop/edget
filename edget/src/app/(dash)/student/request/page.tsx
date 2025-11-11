"use client"
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Select } from '@/components/ui/Select'
import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { tClient as t } from '@/lib/i18n.client'

type Pkg = { id: string; name: string }

type Tutor = { id: string; name: string }

export default function StudentRequestPage() {
  const [pkgs, setPkgs] = useState<Pkg[]>([])
  const [tutors, setTutors] = useState<Tutor[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('/api/packages').then(r=>r.json()).then(d=>setPkgs(d.items||[]))
    fetch('/api/tutors').then(r=>r.json()).then(d=>setTutors(d.items||[]))
  }, [])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    const res = await fetch('/api/request', { method: 'POST', body: fd })
    setLoading(false)
    if (res.ok) alert(t().messages.requestSubmitted)
    else alert(t().messages.requestFailed)
  }

  return (
    <div className="max-w-xl">
      <Card>
        <CardHeader>
          <div className="font-medium">{t().pages.dashboards.student.requestTutor}</div>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="packageId">{t().pages.dashboards.items.package}</Label>
              <Select id="packageId" name="packageId" required>
                <option value="">Select a package</option>
                {pkgs.map(p=> (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="teacherId">{t().nav.teacher}</Label>
              <Select id="teacherId" name="teacherId" required>
                <option value="">Select a tutor</option>
                {tutors.map(t=> (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="preferredDays">Preferred days</Label>
              <Input id="preferredDays" name="preferredDays" placeholder="e.g. Mon, Wed, Fri" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="preferredTime">Preferred time</Label>
              <Input id="preferredTime" name="preferredTime" placeholder="e.g. 4:00 PM - 6:00 PM" />
            </div>
            <Button disabled={loading} type="submit">{loading ? t().pages.register.student.submitting : t().pages.register.student.submit}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
