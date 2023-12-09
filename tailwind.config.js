/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        blue: '0 0 2px 2px #0398fc',
        zinc: '0 0 2px 2px #252626'
      }
    }
  },
  plugins: []
}
