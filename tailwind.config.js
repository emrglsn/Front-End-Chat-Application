/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "bacasime-antique": ['Bacasime Antique', "serif"],
        "kanit":['Kanit',"sans-serif"],
        "quicksand":['Quicksand',"sans-serif"]
       
      }
    },
  },
  plugins: [function({addUtilities}){
    addUtilities({
      ".no-scrollbar":{
        "&::-webkit-scrollbar":{
          display:"none"
        }
      }
    })
  }],
}

