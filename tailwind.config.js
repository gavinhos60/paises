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
        '450' : '450px',
      },
      width:{
        '450':"780px",
        '294':"293px",
        'pesquisa' : '470px',
      },
      margin:{
        'div' : '136px',
      },
    }
  },
  plugins: [],
}