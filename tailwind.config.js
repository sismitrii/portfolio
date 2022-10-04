/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        arrowDown:{
          '0%':{opacity:0},
          '40%':{opacity:1},
          '60%':{opacity:1},
          '80%':{opacity:0},
          '100%':{opacity:0, top:50},
        }
      },
      animation : {
        arrowDown: 'arrowDown 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
