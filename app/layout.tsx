import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Donovan Glover',
  description: 'Donovan is a software engineer in Atlanta, GA.',
}

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-US">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
