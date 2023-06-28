/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'clearBtn': "url('./images/ClearBtn.png')",
        'searchBtn': "url('./images/SearchBtn.png')"
      },
      colors: {
        'search-color': '#D9D9D9'
      }
    },
  },
  plugins: [],
}

