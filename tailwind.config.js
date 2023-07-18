/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        'header' : '#2b3743',
      },
      height:{
        '800' : '800px',
      },
      width:{
        '450':"450px",
      }
    }
  },
  plugins: [],
}