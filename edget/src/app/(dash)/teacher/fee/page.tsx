"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'
import { tClient as t } from '@/lib/i18n.client'

export default function TeacherFeePage() {
  const [loading, setLoading] = useState(false)
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    const res = await fetch('/api/teacher/fee', { method: 'POST', body: fd })
    setLoading(false)
    if (res.ok) alert(t().messages.feeUploaded)
    else alert(t().messages.feeFailed)
  }
  return (
    <div className="max-w-xl">
      <Card>
        <CardHeader>
          <div className="font-medium">{t().pages.dashboards.teacher.payFee} (100 ETB)</div>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="reference">{t().pages.dashboards.items.reference}</Label>
              <Input id="reference" name="reference" placeholder="e.g. CBE-123456" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="proof">Proof image</Label>
              <input id="proof" name="proof" type="file" accept="image/*" className="block w-full text-sm" required />
            </div>
            <Button disabled={loading} type="submit">{loading ? t().pages.register.teacher.submitting : t().pages.register.teacher.submit}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
