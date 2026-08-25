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
          50: '#faf4f0',
          100: '#f2e2d8',
          200: '#e2bfa9',
          300: '#cd9770',
          400: '#b17348',
          500: '#96562f',
          600: '#7a4126',
          700: '#603322',
          800: '#4c291f',
          900: '#3c211a',
          950: '#211210',
        },
        accent: {
          50: '#fbf7ec',
          100: '#f4e8c4',
          200: '#e9cd80',
          300: '#dcae4c',
          400: '#c48f2e',
          500: '#96661c',
          600: '#7a5117',
          700: '#603f14',
          800: '#4d3312',
          900: '#402a10',
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
