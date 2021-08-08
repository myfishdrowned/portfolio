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
        'tan': '#F6F5F3',
        'beige': '#D4C9C9',
      },
      backgroundImage: theme => ({
        'hero': "url('/src/images/hero.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
