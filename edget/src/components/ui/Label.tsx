import React from 'react'
import clsx from 'clsx'

export function Label({ className, children, htmlFor }: React.PropsWithChildren<{ className?: string; htmlFor?: string }>) {
  return <label htmlFor={htmlFor} className={clsx('block text-sm font-medium text-gray-700', className)}>{children}</label>
}
