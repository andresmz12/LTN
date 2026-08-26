import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff4ed',
          100: '#ffe4d1',
          200: '#ffc7a3',
          300: '#ff9d63',
          400: '#fd7a35',
          500: '#f15a14',
          600: '#d1430c',
          700: '#ac340d',
          800: '#8a2c11',
          900: '#702712',
          950: '#3c1108',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
      },
    },
  },
  plugins: [],
}
export default config
