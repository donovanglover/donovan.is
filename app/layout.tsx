import '@/styles/main.scss'
import Image from 'next/image'
import utilStyles from './utils.module.scss'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
  description: 'Next.js 13 App Router Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en-us'>
      <body className={inter.className}>
        <div className='container'>
          <header className='header'>
            <Link href='/'>
              <Image priority src='/images/profile.jpg' className={utilStyles.borderCircle} height={108} width={108} alt='' />
            </Link>
            <h1>
              <Link href='/'>Donovan Glover</Link>
            </h1>
          </header>

          <main>{children}</main>
          <Link href='/'>← Back to home</Link>
        </div>
      </body>
    </html>
  )
}
