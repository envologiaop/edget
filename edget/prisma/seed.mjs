import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
const prisma = new PrismaClient()

async function main() {
  // Seed admin user
  const adminEmail = 'admin@edget.local'
  const existing = await prisma.user.findUnique({ where: { email: adminEmail } })
  if (!existing) {
    const hash = await bcrypt.hash('admin123', 10)
    await prisma.user.create({ data: { email: adminEmail, passwordHash: hash, role: 'ADMIN', name: 'Admin' } })
    console.log('Seeded admin user: admin@edget.local / admin123')
  }

  const packages = [
    { name: '4x2h/week', sessionsPerWeek: 4, hoursPerSession: 2, priceEtb: 3000 },
    { name: '3x2h/week', sessionsPerWeek: 3, hoursPerSession: 2, priceEtb: 2500 },
    { name: '3x1h/week', sessionsPerWeek: 3, hoursPerSession: 1, priceEtb: 2000 },
  ]
  for (const p of packages) {
    await prisma.package.upsert({ where: { name: p.name }, update: p, create: p })
  }
  console.log('Seeded packages')
}

main().catch((e) => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect())
