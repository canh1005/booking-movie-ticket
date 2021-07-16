module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors:{
      'blue-1':'#7597de',
      'blue-2':'#2980B9',
      'light-blue':'#6DD5FA',
      'purple-1':'#2b1055',
      'purlple-2':'#24243e',
      'purple-3':'#302b63',
      'white':"#FFFFFF",
      'black':'#000000',
      'black-1':'#0f0c29',
      'gray':'#232526',
      'gray-1':'#414345',
      'transparent':'transparent',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      animation: ['motion-safe'],
    },
  },
  plugins: [],
}
