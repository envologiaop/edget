import { t } from '@/lib/i18n'

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 py-20 text-white shadow-card">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight">{t().home.heroTitle}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">{t().home.heroSubtitle}</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a className="rounded-md bg-white px-5 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/register/student">{t().home.studentCta}</a>
            <a className="rounded-md border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10" href="/register/teacher">{t().home.teacherCta}</a>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,white,transparent_60%)]" />
      </section>
      <section>
        <h2 className="text-2xl font-semibold">{t().home.howItWorks}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-white p-6 shadow-card">
            <div className="text-brand-700 font-semibold">{t().home.steps.signUpTitle}</div>
            <p className="mt-1 text-gray-600 text-sm">{t().home.steps.signUpText}</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-card">
            <div className="text-brand-700 font-semibold">{t().home.steps.verifyTitle}</div>
            <p className="mt-1 text-gray-600 text-sm">{t().home.steps.verifyText}</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-card">
            <div className="text-brand-700 font-semibold">{t().home.steps.bookTitle}</div>
            <p className="mt-1 text-gray-600 text-sm">{t().home.steps.bookText}</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">{t().home.packages}</h2>
        <p className="mt-1 text-gray-600">{t().home.choosePlan}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t().home.packList.map((p) => (
            <div key={p.title} className="rounded-lg border bg-white p-6 shadow-card">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-gray-600">{p.detail}</div>
              <div className="mt-3 text-lg">{p.price}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
