"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { tClient as t } from '@/lib/i18n.client'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'

export default function StudentRegisterPage() {
  const [loading, setLoading] = useState(false)
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    const res = await fetch('/api/register/student', { method: 'POST', body: fd })
    setLoading(false)
    if (res.ok) alert(t().messages.registrationSubmitted)
    else alert(t().messages.registrationFailed)
  }
  return (
    <div className="max-w-2xl">
      <Card>
        <CardHeader>
          <h1 className="text-xl font-semibold">{t().pages.register.student.title}</h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">{t().pages.register.student.name}</Label>
              <Input id="name" name="name" placeholder="Full name" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="age">{t().pages.register.student.age}</Label>
                <Input id="age" name="age" type="number" placeholder="Age" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="gender">{t().pages.register.student.gender}</Label>
                <Input id="gender" name="gender" placeholder="Gender" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">{t().pages.register.student.email}</Label>
              <Input id="email" name="email" type="email" placeholder="Email" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">{t().pages.register.student.password}</Label>
              <Input id="password" name="password" type="password" placeholder="Password" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="class">{t().pages.register.student.grade}</Label>
              <Input id="class" name="class" placeholder="Class/Grade" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label htmlFor="region">{t().pages.register.student.region}</Label>
                <Input id="region" name="region" placeholder="Region" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="city">{t().pages.register.student.city}</Label>
                <Input id="city" name="city" placeholder="City" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="kebele">{t().pages.register.student.kebele}</Label>
                <Input id="kebele" name="kebele" placeholder="Kebele" />
              </div>
            </div>
            <div className="space-y-1">
              <Label>{t().pages.register.student.idFront}</Label>
              <input className="block w-full text-sm" name="nationalIdFront" type="file" accept="image/*" required />
            </div>
            <div className="space-y-1">
              <Label>{t().pages.register.student.idBack}</Label>
              <input className="block w-full text-sm" name="nationalIdBack" type="file" accept="image/*" required />
            </div>
            <Button disabled={loading} type="submit">{loading ? t().pages.register.student.submitting : t().pages.register.student.submit}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
