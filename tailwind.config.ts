import type { Config } from 'tailwindcss'

const tailwindConfig = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './*.tsx'
  ],

  darkMode: 'class',

  theme: {
    extend: {
      typography: ({ theme }: { theme: (tailwindClass: string) => string }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.black'),
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
      }),

      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)']
      }
    }
  },

  plugins: [
    require('@tailwindcss/typography')
  ],

  future: {
    hoverOnlyWhenSupported: true
  }
} satisfies Config

export default tailwindConfig
