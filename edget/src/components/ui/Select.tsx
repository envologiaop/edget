import React from 'react'
import clsx from 'clsx'

type Props = React.SelectHTMLAttributes<HTMLSelectElement>
export function Select({ className, children, ...props }: React.PropsWithChildren<Props>) {
  return <select className={clsx('w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600', className)} {...props}>{children}</select>
}
