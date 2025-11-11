import { cookies } from 'next/headers'
import { dict } from './i18n.dict'
export type { Lang } from './i18n.dict'

export function getLang() {
  const c = cookies()
  const lang = c.get('lang')?.value as keyof typeof dict | undefined
  return (lang === 'am' || lang === 'en') ? lang : 'en'
}

export function t() {
  const lang = getLang()
  return dict[lang]
}
