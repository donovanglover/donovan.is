import clsx from 'clsx'
import Link from 'next/link'

export interface CardProps {
  href: string
  className?: string
  children?: React.ReactNode
}

export default function Card ({ href, className, children }: CardProps): React.ReactElement {
  return (
    <Link href={href} className='m-4'>
      <div className={clsx('shadow p-8', className)}>
        {children}
      </div>
    </Link>
  )
}
