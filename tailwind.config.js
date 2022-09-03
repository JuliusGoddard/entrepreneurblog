/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/pages/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'enzyme': "url('/src/images/pic15.jpg')"
      }
    },
  },
  plugins: [],
}
