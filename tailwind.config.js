/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['.public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    colors: {
      black: '#151515',
      green: '#4EE1A0',
      darkgrey: '#242424',
      grey: '#d9d9d9',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
