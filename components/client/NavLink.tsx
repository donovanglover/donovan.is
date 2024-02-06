'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink (
  {
    href,
    title,
    className
  }:
  {
    href: string
    title: string
    className?: string
  }
): React.ReactElement {
  const pathname = usePathname()

  return (
    <li className={clsx('flex', className)}>
      <Link href={href} className={clsx(
        'p-4 hover:text-blue',
        pathname === href && 'text-blue'
      )}>{title}</Link>
    </li>
  )
}
