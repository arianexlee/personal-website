/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Roboto'],
      chivo: 'Chivo'
    },
    extend: {
      fontFamily: {
        sans: ['Roboto'],
      },
      dropShadow: {
        'box': '0 4px 4px rgba(0, 0, 0, 0.25)'
      },
      screens: {
        'sm': '680px'
      },
    },
  },
  plugins: [],
}