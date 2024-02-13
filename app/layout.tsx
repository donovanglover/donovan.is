import '@/styles/main.css'
import clsx from 'clsx'
import { mapleMono } from '@/lib/fonts'
import { meta } from '@/lib/metadata'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HolyLoader from 'holy-loader'

export const metadata = {
  title: {
    template: `%s | ${meta.title}`,
    default: meta.title
  },
  description: meta.description,
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description
  },
  metadataBase: new URL(meta.url)
}

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang={meta.lang} className={clsx(mapleMono.variable)}>
      <body className="text-[#222226] bg-slate-50 dark:bg-[#1f1f1f] dark:text-[#D4D4D4] transition-colors ease-in-out duration-500 flex flex-col h-screen text-pretty">
        <Navbar />
        <HolyLoader />
        <div className="px-4 py-8 mx-auto container grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
