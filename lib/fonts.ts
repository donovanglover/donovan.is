import localFont from 'next/font/local'

export const mapleMono = localFont({
  src: [
    {
      path: '../assets/fonts/MapleMono-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/MapleMono-LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../assets/fonts/MapleMono-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/MapleMono-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../assets/fonts/MapleMono-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/MapleMono-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-mono'
})
