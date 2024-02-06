import type { Metadata } from 'next'
import { mapleMono } from '@/lib/fonts'
import '@/styles/main.sass'
import clsx from 'clsx'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    template: '%s - Donovan Glover',
    default: 'Donovan Glover - Software Engineer in Atlanta, GA'
  },
  description: 'Donovan is a software engineer in Atlanta, GA.'
}

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en-US" className={clsx('text-white-400 bg-black-400', mapleMono.variable)}>
      <body>
        <nav>
          <ul className="flex">
            <li><Link href="/">Donovan Glover</Link></li>
            <li><Link href='/about'>About</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
