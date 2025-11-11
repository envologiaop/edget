"use client"
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { tClient as t } from '@/lib/i18n.client'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const sp = useSearchParams()
  const callbackUrl = sp.get('callbackUrl') || '/'

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await signIn('credentials', { email, password, redirect: false })
    setLoading(false)
    if (res?.ok) router.push(callbackUrl)
    else alert(t().messages.invalidCredentials)
  }

  return (
    <div className="max-w-sm">
      <Card>
        <CardHeader>
          <h1 className="text-xl font-semibold">{t().pages.login.title}</h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="email">{t().pages.login.email}</Label>
              <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" type="email" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">{t().pages.login.password}</Label>
              <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" type="password" required />
            </div>
            <Button disabled={loading} className="w-full" type="submit">{loading ? 'Signing in...' : t().pages.login.signIn}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
