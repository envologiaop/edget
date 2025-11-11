"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { tClient as t } from '@/lib/i18n.client'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'

export default function TeacherRegisterPage() {
  const [loading, setLoading] = useState(false)
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    const res = await fetch('/api/register/teacher', { method: 'POST', body: fd })
    setLoading(false)
    if (res.ok) alert(t().messages.teacherRegistrationSubmitted)
    else alert(t().messages.registrationFailed)
  }
  return (
    <div className="max-w-2xl">
      <Card>
        <CardHeader>
          <h1 className="text-xl font-semibold">{t().pages.register.teacher.title}</h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">{t().pages.register.teacher.name}</Label>
              <Input id="name" name="name" placeholder="Full name" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="age">{t().pages.register.teacher.age}</Label>
                <Input id="age" name="age" type="number" placeholder="Age" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="gender">{t().pages.register.teacher.gender}</Label>
                <Input id="gender" name="gender" placeholder="Gender" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">{t().pages.register.teacher.email}</Label>
              <Input id="email" name="email" type="email" placeholder="Email" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">{t().pages.register.teacher.password}</Label>
              <Input id="password" name="password" type="password" placeholder="Password" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="university">{t().pages.register.teacher.university}</Label>
                <Input id="university" name="university" placeholder="University" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="department">{t().pages.register.teacher.department}</Label>
                <Input id="department" name="department" placeholder="Department" required />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="academicGrade">{t().pages.register.teacher.academicGrade}</Label>
              <Input id="academicGrade" name="academicGrade" placeholder="Academic Grade" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label htmlFor="region">{t().pages.register.teacher.region}</Label>
                <Input id="region" name="region" placeholder="Region" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="city">{t().pages.register.teacher.city}</Label>
                <Input id="city" name="city" placeholder="City" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="kebele">{t().pages.register.teacher.kebele}</Label>
                <Input id="kebele" name="kebele" placeholder="Kebele" />
              </div>
            </div>
            <div className="space-y-1">
              <Label>{t().pages.register.teacher.photo}</Label>
              <input className="block w-full text-sm" name="photo" type="file" accept="image/*" />
            </div>
            <div className="space-y-1">
              <Label>{t().pages.register.teacher.universityId}</Label>
              <input className="block w-full text-sm" name="universityId" type="file" accept="image/*" />
            </div>
            <div className="space-y-1">
              <Label>{t().pages.register.teacher.idFront}</Label>
              <input className="block w-full text-sm" name="nationalIdFront" type="file" accept="image/*" required />
            </div>
            <div className="space-y-1">
              <Label>{t().pages.register.teacher.idBack}</Label>
              <input className="block w-full text-sm" name="nationalIdBack" type="file" accept="image/*" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="subjects">{t().pages.register.teacher.subjects}</Label>
              <Input id="subjects" name="subjects" placeholder="English, Math, Physics" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="preferredGrades">{t().pages.register.teacher.preferredGrades}</Label>
              <Input id="preferredGrades" name="preferredGrades" placeholder="7,8,9" />
            </div>
            <Button disabled={loading} type="submit">{loading ? t().pages.register.teacher.submitting : t().pages.register.teacher.submit}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
