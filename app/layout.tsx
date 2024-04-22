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
    <html lang={meta.lang} className={clsx(mapleMono.variable, 'base16-atelier-forest-light')}>
      <body className="flex h-screen flex-col text-pretty bg-100 text-700 transition-colors duration-500 ease-in-out">
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
