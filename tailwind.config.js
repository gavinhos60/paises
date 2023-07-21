/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        'header' : '#2b3743',        
      },
      borderColor:{
        'borda' : "#202b35",
      },
      borderWidth:{
        'borda-width':'20px',
      },
      height:{
        '750' : '750px',
        '352' : '352px',
      },
      width:{
        '450':"450px",
        '294':"293px",
      }
    }
  },
  plugins: [],
}