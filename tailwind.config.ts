import { base16Tailwind } from '@donovanglover/base16-tailwind'
import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

const tailwindConfig: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './*.tsx'
  ],

  theme: {
    fontFamily: {
      sans: "'Noto Sans JP Variable', 'Noto Sans CJK JP', 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      serif: "'Aleo Variable', 'Aleo', 'Noto Sans CJK JP', serif",
      mono: 'var(--font-mono)'
    },

    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-links': 'rgb(var(--color-red))',
            code: {
              'border-radius': '0.25rem'
            },
            pre: {
              border: '2px solid rgb(var(--color-400))'
            },
            'code::before': {
              content: '""',
              'padding-left': '0.25rem'
            },
            'code::after': {
              content: '""',
              'padding-right': '0.25rem'
            }
          }
        }
      }
    }
  },

  plugins: [
    typographyPlugin,

    base16Tailwind({
      invert: true,
      withTypography: true
    })
  ],

  future: {
    hoverOnlyWhenSupported: true
  }
}

export default tailwindConfig
