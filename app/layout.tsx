import '@/app/globals.css'
import clsx from 'clsx'
import HolyLoader from 'holy-loader'
import localFont from 'next/font/local'
import { meta } from '@/app/metadata'
import BackToTop from '@/components/client/BackToTop'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

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

const mapleMono = localFont({
  src: [
    {
      path: './_fonts/MapleMono-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './_fonts/MapleMono-LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: './_fonts/MapleMono-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './_fonts/MapleMono-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './_fonts/MapleMono-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './_fonts/MapleMono-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-mono'
})

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang={meta.lang} className={clsx(mapleMono.variable, meta.scheme)}>
      <body className="flex h-screen flex-col text-pretty bg-100 text-700 transition-colors duration-500 ease-in-out">
        <Navbar />
        <HolyLoader color='rgb(var(--color-red))' height={2} />
        <div className="container mx-auto grow px-4 py-8">
          {children}
        </div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
