/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textColor:'#c9c5c5',
        border_color:'#535353',
        bg_color:"#202020"
      }
    },
  },
  plugins: [],
}