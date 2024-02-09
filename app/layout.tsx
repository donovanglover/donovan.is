import '@/styles/main.css'
import '@/styles/generated.css'
import clsx from 'clsx'
import HolyLoader from 'holy-loader'
import { mapleMono } from '@/lib/fonts'
import { siteMetadata } from '@/lib/metadata'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = siteMetadata

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en-US" className={clsx(mapleMono.variable)}>
      <body className="text-[#222226] dark:bg-[#1f1f1f] dark:text-[#D4D4D4]">
        <HolyLoader color='red' />
        <Navbar />
        <div className="px-4 py-8 mx-auto container">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
