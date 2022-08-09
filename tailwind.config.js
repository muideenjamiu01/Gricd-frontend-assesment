const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#EBF8FE',
          200: '#C0E4ED',
          300: '#91D1DE',
          400: '#ff9f00',
          500: '#2F8B9D',
        },
        secondary: colors.slate,
        success: colors.emerald,
        warning: colors.yellow,
        error: colors.red,
        info: colors.cyan,
      },
      height: {
        420: '420px',
        840: '3000px',
      },
      // screens: {
      //   xs: '600px',
      //   sm: '800px',
      //   md: '1024px',
      //   lg: '1216px',
      //   xl: '1408px',
      // },
    },
  },
  plugins: [],
}
