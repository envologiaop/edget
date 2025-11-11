import React from 'react'
import clsx from 'clsx'

export function Card({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={clsx('rounded-lg border bg-white shadow-card', className)}>{children}</div>
}
export function CardHeader({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={clsx('px-5 py-4 border-b', className)}>{children}</div>
}
export function CardContent({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={clsx('px-5 py-4', className)}>{children}</div>
}
