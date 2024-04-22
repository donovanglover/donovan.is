import clsx from 'clsx'
import Link from 'next/link'

export interface CardProps {
  href: string
  className?: string
  children?: React.ReactNode
}

export default function Card ({ href, className, children }: CardProps): React.ReactElement {
  return (
    <Link href={href} className={clsx('m-2 flex flex-col justify-between border border-700/10 shadow hover:bg-200/80 hover:transition-colors md:m-4 xl:m-6', className)}>
      {children}
    </Link>
  )
}
