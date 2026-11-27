/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#FAF7F0',
          200: '#F4EFE3',
          300: '#ECE4D2',
        },
        champagne: {
          300: '#E4D5BC',
          400: '#D6BF9B',
          500: '#C2A370',
        },
        bronze: {
          600: '#A5824F',
          700: '#8A6A3B',
        },
        espresso: {
          700: '#57503F',
          800: '#3B3529',
          900: '#262217',
          950: '#1B1810',
        },
        clay: {
          400: '#A79A85',
          500: '#877C68',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'Avenir', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: {
        wide2: '0.28em',
        wide3: '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 1.1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 1.4s ease both',
        'line-grow': 'lineGrow 1.2s cubic-bezier(0.22, 1, 0.36, 1) both',
        'marquee-slow': 'marquee 46s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(34px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        lineGrow: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        heroDrift: {
          from: { transform: 'translateX(-8%)' },
          to: { transform: 'translateX(22%)' },
        },
      },
    },
  },
  plugins: [],
};
