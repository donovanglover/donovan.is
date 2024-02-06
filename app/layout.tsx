import { mapleMono } from '@/lib/fonts'
import '@/styles/main.sass'
import clsx from 'clsx'
import Link from 'next/link'
import { siteMetadata } from '@/lib/metadata'
import Navbar from '@/components/Navbar'

export const metadata = siteMetadata

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en-US" className={clsx('text-white-400 bg-black-400', mapleMono.variable)}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
