import type { Metadata } from 'next'
import '@fontsource-variable/noto-sans-jp'
import localFont from 'next/font/local'
import './globals.css'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Donovan Glover',
  description: 'Donovan is a software engineer in Atlanta, GA.'
}

const mapleMono = localFont({
  src: [
    {
      path: '../fonts/MapleMono-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../fonts/MapleMono-LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../fonts/MapleMono-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/MapleMono-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../fonts/MapleMono-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/MapleMono-BoldItalic.woff2',
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
