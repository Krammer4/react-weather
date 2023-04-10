/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.tsx",
    "./src/Components/Main.tsx",
  ],
  theme: {
    extend: {
      colors:{
        bg:"#47bffe",
        yellowMain: "#ffdc02",
      }
    },

    screens: {
      'sm': '320px',
      'xm':'370px',
      'prem': '500px',
      'md': '668px',
      'lg': '1100px',
      'xl': '1536px',
    }

  },
  plugins: [],
}

