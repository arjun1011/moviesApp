/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'TitilliumWeb': ['Titillium Web', 'sans-serif']
      },
    },
  },
  plugins: [],
}
