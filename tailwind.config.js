module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '300px',
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
