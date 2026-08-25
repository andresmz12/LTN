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
          50: '#f1f3fc',
          100: '#e2e6f7',
          200: '#c1c9ee',
          300: '#95a2e0',
          400: '#6674cd',
          500: '#4550b8',
          600: '#333c9c',
          700: '#2a3180',
          800: '#242968',
          900: '#1f2354',
          950: '#14162f',
        },
        accent: {
          50: '#fef6ed',
          100: '#fdead3',
          200: '#fbd1a5',
          300: '#f8b06d',
          400: '#f38933',
          500: '#ee6d17',
          600: '#d9530f',
          700: '#b43d10',
          800: '#903214',
          900: '#752c14',
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
