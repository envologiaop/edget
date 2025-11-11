import { prisma } from '@/lib/prisma'
import { t } from '@/lib/i18n'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function TutorDetail({ params }: { params: { id: string } }) {
  const t = await prisma.teacherProfile.findUnique({ where: { id: params.id }, include: { user: true } })
  if (!t || t.status !== 'APPROVED' || !t.listing?.visible) return notFound()
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-2 space-y-4">
        <div className="flex items-center gap-4">
          {t.photoUrl && (
            <div className="h-20 w-20 overflow-hidden rounded-full border bg-white">
              <Image src={t.photoUrl.startsWith('/uploads')? t.photoUrl : '/avatar.png'} alt={t.user.name} width={80} height={80} className="h-20 w-20 object-cover" />
            </div>
          )}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{t.user.name}</h1>
            <div className="text-sm text-gray-600">{[t.user.gender, t.user.age && `${t.user.age} yrs`, t.user.city, t.user.region].filter(Boolean).join(' · ')}</div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-5 shadow-card">
          <div className="font-semibold">{t().pages.tutorDetail.about}</div>
          <div className="mt-2 text-sm text-gray-700">{t().pages.tutorDetail.university}: {tutor.university} · {t().pages.tutorDetail.department}: {tutor.department} · {t().pages.tutorDetail.academicGrade}: {tutor.academicGrade}</div>
          <div className="mt-2 text-sm text-gray-700">{t().pages.tutorDetail.subjects}: {tutor.subjects.join(', ')}</div>
          <div className="mt-2 text-sm text-gray-700">{t().pages.tutorDetail.preferredGrades}: {tutor.preferredGrades.join(', ')}</div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-lg border bg-white p-5 shadow-card">
          <div className="font-semibold">{t().pages.tutorDetail.bookThisTutor}</div>
          <p className="mt-2 text-sm text-gray-700">{t().pages.tutorDetail.bookNote}</p>
          <a href="/dash/student/request" className="mt-3 inline-flex h-10 items-center rounded-md bg-brand-600 px-4 text-white hover:bg-brand-700">{t().pages.tutorDetail.requestTutor}</a>
        </div>
      </div>
    </div>
  )
}
