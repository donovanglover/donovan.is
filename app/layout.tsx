import type { Metadata } from 'next'
import '@fontsource-variable/noto-sans-jp'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'Donovan Glover',
  description: 'Donovan is a software engineer in Atlanta, GA.'
}

const myFont = localFont({
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
  display: 'swap'
})

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en-US" className='text-white-400 bg-black-400'>
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
