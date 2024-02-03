import type { Metadata } from 'next'
import '@fontsource-variable/noto-sans-jp'
import { mapleMono } from '@/app/_lib/fonts'
import './globals.css'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Donovan Glover',
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
          <ul>
            <li>Donovan Glover</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
