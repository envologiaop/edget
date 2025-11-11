import type { Lang } from './i18n.dict'
import { dict } from './i18n.dict'

export function getClientLang(): Lang {
  if (typeof document === 'undefined') return 'en'
  const m = document.cookie.match(/(?:^|; )lang=(am|en)/)
  const lang = (m?.[1] as Lang | undefined) || 'en'
  return lang
}

export function tClient() {
  const lang = getClientLang()
  return dict[lang]
}
