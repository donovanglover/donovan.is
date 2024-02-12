import clsx from 'clsx'
import Link from 'next/link'

export interface CardProps {
  href: string
  className?: string
  children?: React.ReactNode
}

export default function Card ({ href, className, children }: CardProps): React.ReactElement {
  return (
    <Link href={href} className={clsx('m-2 md:m-4 shadow hover:transition-colors dark:border-gray-800 hover:dark:bg-blue-900 border hover:bg-slate-100 hover:dark:bg-inherit xl:m-6 flex flex-col justify-between', className)}>
      {children}
    </Link>
  )
}
