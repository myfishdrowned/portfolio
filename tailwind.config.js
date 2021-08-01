module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    fontFamily: {
      'display': ['GT Walsheim Pro'],
      'body': ['TT Hoves'],
    },
    extend: {
      colors: {
        'bg-blue': '#4C5464',
      },
      backgroundImage: theme => ({
        'hero': "url('/images/hero.svg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
