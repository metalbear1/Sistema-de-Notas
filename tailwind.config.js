/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
      fontFamily: {
        sans: ['Inter','sans-serif']
      }
      }
    },
  },
  plugins: [],
}

