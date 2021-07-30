module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    fontFamily: {
      'display': ['Inter'],
      'body': ['Raleway'],
    },
    extend: {
      colors: {
        'bg-blue': '#4C5464',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
