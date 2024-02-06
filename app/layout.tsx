import { mapleMono } from '@/lib/fonts'
import '@/styles/main.sass'
import clsx from 'clsx'
import { siteMetadata } from '@/lib/metadata'
import Navbar from '@/components/Navbar'
import HolyLoader from 'holy-loader'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'
import Footer from '@/components/Footer'

const fullConfig = resolveConfig(tailwindConfig)

export const metadata = siteMetadata

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en-US" className={clsx('text-white-400 bg-black-400', mapleMono.variable)}>
      <body>
        <HolyLoader color={fullConfig.theme.colors.blue} />
        <Navbar />
        <div className="pb-8" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
