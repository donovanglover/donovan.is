import '@/styles/main.css'
import clsx from 'clsx'
import HolyLoader from 'holy-loader'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { mapleMono } from '@/lib/fonts'
import { meta } from '@/lib/metadata'

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
      <body className="bg-slate-50 flex h-screen flex-col text-pretty text-[#222226] transition-colors duration-500 ease-in-out dark:bg-[#1f1f1f] dark:text-[#D4D4D4]">
        <Navbar />
        <HolyLoader />
        <div className="container mx-auto grow px-4 py-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
