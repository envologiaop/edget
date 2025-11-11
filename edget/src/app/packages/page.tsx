import { prisma } from '@/lib/prisma'
import { t } from '@/lib/i18n'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

export default async function PackagesPage() {
  const pkgs = await prisma.package.findMany({ orderBy: { priceEtb: 'desc' } })
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">{t().pages.packages.title}</h1>
      <ul className="grid gap-4 md:grid-cols-3">
        {pkgs.map((p) => (
          <li key={p.id}>
            <Card>
              <CardHeader>
                <div className="font-semibold">{p.name}</div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-700">{p.sessionsPerWeek} sessions/week · {p.hoursPerSession}h/session</div>
                <div className="text-lg mt-2">{p.priceEtb} ETB / month</div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
