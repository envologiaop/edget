"use client"
import { useTransition } from 'react'

export function LangSwitch({ lang }: { lang: 'en' | 'am' }) {
  const [pending, startTransition] = useTransition()
  const next = lang === 'en' ? 'am' : 'en'
  async function toggle() {
    try {
      await fetch('/api/lang', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lang: next }) })
      // Ensure new cookie is applied
      window.location.reload()
    } catch {
      // noop
    }
  }
  return (
    <button onClick={() => startTransition(toggle)} disabled={pending} className="rounded-md border px-3 py-1.5 hover:bg-gray-50">
      {lang === 'en' ? 'አማ' : 'EN'}
    </button>
  )
}
