import localFont from 'next/font/local'

export const mapleMono = localFont({
  src: [
    {
      path: '../_fonts/MapleMono-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../_fonts/MapleMono-LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../_fonts/MapleMono-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../_fonts/MapleMono-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../_fonts/MapleMono-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../_fonts/MapleMono-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-mono'
})
