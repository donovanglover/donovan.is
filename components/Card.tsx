import clsx from 'clsx'
import Link from 'next/link'

export interface CardProps {
  href: string
  className?: string
  children?: React.ReactNode
}

export default function Card ({ href, className, children }: CardProps): React.ReactElement {
  return (
    <Link href={href} className={clsx('dark:border-gray-800 hover:dark:bg-blue-900 hover:bg-slate-100 hover:dark:bg-inherit m-2 flex flex-col justify-between border shadow hover:transition-colors md:m-4 xl:m-6', className)}>
      {children}
    </Link>
  )
}
