"use client"
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { tClient as t } from '@/lib/i18n.client'
import { Input } from '@/components/ui/Input'

type Tutor = {
  id: string
  name: string
  gender?: string
  age?: number
  region?: string
  city?: string
  kebele?: string
  academicGrade: string
  subjects: string[]
}

export default function TutorsPage() {
  const [items, setItems] = useState<Tutor[]>([])
  const [q, setQ] = useState({ subject: '', grade: '', region: '', city: '' })

  useEffect(() => {
    const params = new URLSearchParams()
    if (q.subject) params.set('subject', q.subject)
    if (q.grade) params.set('grade', q.grade)
    if (q.region) params.set('region', q.region)
    if (q.city) params.set('city', q.city)
    fetch('/api/tutors?' + params.toString())
      .then((r) => r.json())
      .then((d) => setItems(d.items || []))
  }, [q])

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{t().pages.tutors.title}</h1>
          <p className="text-gray-600">{t().pages.tutors.subtitle}</p>
        </div>
        <a href="/packages" className="hidden md:inline-flex h-10 items-center rounded-md border px-4 hover:bg-gray-50">{t().pages.tutors.seePackages}</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Input placeholder={t().pages.tutors.filters.subject} value={q.subject} onChange={(e) => setQ({ ...q, subject: e.target.value })} />
        <Input placeholder={t().pages.tutors.filters.grade} value={q.grade} onChange={(e) => setQ({ ...q, grade: e.target.value })} />
        <Input placeholder={t().pages.tutors.filters.region} value={q.region} onChange={(e) => setQ({ ...q, region: e.target.value })} />
        <Input placeholder={t().pages.tutors.filters.city} value={q.city} onChange={(e) => setQ({ ...q, city: e.target.value })} />
      </div>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <li key={t.id}>
            <Card>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div>
                    <a className="text-lg font-semibold hover:underline" href={`/tutors/${t.id}`}>{t.name}</a>
                    <div className="text-sm text-gray-600">{[t.gender, t.age && `${t.age} yrs`, t.city, t.region].filter(Boolean).join(' · ')}</div>
                  </div>
                  <span className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">{t.academicGrade}</span>
                </div>
                <div className="text-xs text-gray-700 mt-3">Subjects: {t.subjects.join(', ')}</div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
