import clsx from 'clsx'
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost', size?: 'sm'|'md'|'lg' }

export function Button({ className, variant='primary', size='md', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-brand-600 hover:bg-brand-700 text-white focus:ring-brand-600',
    secondary: 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 focus:ring-brand-600',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-brand-600',
  }
  const sizes = { sm: 'h-8 px-3 text-sm', md: 'h-10 px-4', lg: 'h-11 px-5 text-lg' }
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />
}
