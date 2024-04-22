import { base16Tailwind } from '@donovanglover/base16-tailwind'
import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

const tailwindConfig: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './*.tsx'
  ],

  darkMode: 'selector',

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-links': 'rgb(var(--color-red))',
            code: {
              'border-radius': '0.25rem'
            },
            'code::before': {
              content: '""',
              'padding-left': '0.25rem'
            },
            'code::after': {
              content: '""',
              'padding-right': '0.25rem'
            },
            a: {
              'text-underline-position': 'under'
            }
          }
        }
      },

      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)']
      }
    }
  },

  plugins: [
    typographyPlugin,

    base16Tailwind({
      system: 'base24',
      invert: true,
      withTypography: true
    })
  ],

  future: {
    hoverOnlyWhenSupported: true
  }
}

export default tailwindConfig
