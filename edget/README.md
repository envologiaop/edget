# Edget

Edget is a tutoring platform that connects Ethiopian students with university students and graduates for in-person sessions.

Stack
- Next.js (App Router, TypeScript)
- Prisma + PostgreSQL
- NextAuth (email/password, role-based)
- Tailwind CSS
- S3-compatible storage for uploads (docs, IDs, receipts)

Getting started
1. Prerequisites: Node 18+, npm, PostgreSQL database (Neon/Render/local), S3/R2 bucket (optional for now)
2. Setup
   - cd edget
   - npm install
   - Copy .env.example to .env and fill in values
   - npx prisma generate
   - npx prisma migrate dev --name init
   - npm run dev

Environment variables (.env)
- DATABASE_URL=
- NEXTAUTH_SECRET=
- NEXTAUTH_URL=http://localhost:3000
- S3_ENDPOINT= (optional)
- S3_REGION=
- S3_ACCESS_KEY_ID=
- S3_SECRET_ACCESS_KEY=
- S3_BUCKET=

Notes
- Initial routes include student/teacher registration and placeholder dashboards for admin/student/teacher.
- Admin features, payment verification, and weekly attendance flows are scaffolded in the database and can be implemented iteratively.
