'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface NavLinkProps {
  href: string
  title: string
  className?: string
}

export default function NavLink ({ href, title, className }: NavLinkProps): React.ReactElement {
  const pathname = usePathname()

  return (
    <li className={clsx('flex', className)}>
      <Link href={href} className={clsx('p-4 hover:text-blue-300', pathname === href && 'text-red-800')}>{title}</Link>
    </li>
  )
}
