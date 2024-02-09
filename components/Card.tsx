import clsx from 'clsx'
import Link from 'next/link'

export interface CardProps {
  href: string
  className?: string
  children?: React.ReactNode
}

export default function Card ({ href, className, children }: CardProps): React.ReactElement {
  return (
    <Link href={href} className={clsx('m-2 md:m-4 shadow p-8 xl:m-6 flex flex-col justify-between', className)}>
      {children}
    </Link>
  )
}
