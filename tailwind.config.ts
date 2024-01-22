import type { Config } from 'tailwindcss'
import schemes from './schemes.json'

type ThemeFunction = (tailwindClass: string) => string

const palette = schemes.monokai

const tailwindConfig = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: {
        400: palette.base00,
        300: palette.base01,
        200: palette.base02,
        100: palette.base03
      },

      white: {
        100: palette.base04,
        200: palette.base05,
        300: palette.base06,
        400: palette.base07
      },

      red: palette.base08,
      orange: palette.base09,
      yellow: palette.base0A,
      green: palette.base0B,
      cyan: palette.base0C,
      blue: palette.base0D,
      purple: palette.base0E,
      pink: palette.base0F
    },

    extend: {
      typography: ({ theme }: { theme: ThemeFunction }) => ({
        base16: {
          css: {
            '--tw-prose-body': theme('colors.white[400]'),
            '--tw-prose-headings': theme('colors.white[400]'),
            '--tw-prose-lead': theme('colors.white[400]'),
            '--tw-prose-links': theme('colors.blue'),
            '--tw-prose-bold': theme('colors.white[400]'),
            '--tw-prose-counters': theme('colors.white[400]'),
            '--tw-prose-bullets': theme('colors.white[400]'),
            '--tw-prose-hr': theme('colors.white[400]'),
            '--tw-prose-quotes': theme('colors.white[400]'),
            '--tw-prose-quote-borders': theme('colors.white[400]'),
            '--tw-prose-captions': theme('colors.white[400]'),
            '--tw-prose-code': theme('colors.white[400]'),
            '--tw-prose-pre-code': theme('colors.white[400]'),
            '--tw-prose-pre-bg': theme('colors.white[400]'),
            '--tw-prose-th-borders': theme('colors.white[400]'),
            '--tw-prose-td-borders': theme('colors.white[400]')
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
  ]
} satisfies Config

export default tailwindConfig
