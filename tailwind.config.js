/** @type {import('tailwindcss').Config} */

const path = require('path')

module.exports = {
  content: [path.join(__dirname, './src/**/*.{js,ts,jsx,tsx}')],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {},
      textColor: {},
      boxShadow: {},
      lineHeight: {
        'extra-loose': '2.2',
      },
      scale: {
        120: '1.2',
      },
    },
  },
  plugins: [],
}
