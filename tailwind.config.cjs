/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        inputError: '#ff5252',
        activeInput: '',
        lightGrayishViolet: '#dedddf',
        darkGrayishViolet: '#8e8593',
        veryDarkViolet: '#21092f'
      },
      fontFamily: {
        sans: [
          'Space Grotesk',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      backgroundImage: {
        'hero-mobile': "url('./src/assets/images/bg-main-mobile.png')",
        'hero-desktop': "url('./src/assets/images/bg-main-desktop.png')",
      }
    },
  },
  plugins: [],
}
