import clsx from 'clsx'
import Link from 'next/link'

export default function Card (
  {
    href,
    title,
    className,
    children
  }:
  {
    href: string
    title: string
    className?: string
    children?: React.ReactNode
  }
): React.ReactElement {
  return (
    <Link href={href} className='m-4'>
      <div className={clsx('bg-black-300 shadow-lg', className)}>
        {children}
      </div>
    </Link>
  )
}
