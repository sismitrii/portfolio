/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgBlue': '#18384F',
        'navBlue': '#6B99C3'
      },
      keyframes : {
        arrowDown:{
          '0%':{opacity:0},
          '40%':{opacity:1},
          '60%':{opacity:1},
          '80%':{opacity:0},
          '100%':{opacity:0, top: '70%'},
        }
      },
      animation : {
        arrowDown: 'arrowDown 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
