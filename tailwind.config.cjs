/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'bounce-once': {
          '0%, 100%': { transform: 'none' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
      animation: {
        'bounce-once': 'bounce-once .7s',
      },
      colors: {
        white: '#FDFAFF',
        black: '#434045',
        dark: {
          50: '#C1C2C5',
          100: '#A6A7AB',
          200: '#909296',
          300: '#5C5F66',
          400: '#373A40',
          500: '#2C2E33',
          600: '#25262B',
          700: '#1A1B1E',
          800: '#141517',
          900: '#101113',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
