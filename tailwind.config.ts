import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF8F1',
        sand:  '#F2EBDD',
        line:  '#E5DCC9',
        ink:   '#211E1A',
        muted: '#7A7264',
        accent:'#D2643A',
        amber: '#E2A23E',
      },
      fontFamily: {
        sans:  ['"Helvetica Neue"', 'Helvetica', 'Inter', 'Arial', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
      },
      lineHeight: {
        tight: '1.15',
      },
      maxWidth: {
        content: '1100px',
      },
      transitionDuration: {
        hover: '150ms',
      },
    },
  },
  plugins: [],
}

export default config
