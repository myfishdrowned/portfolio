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
        'tan': '#CCC5B9',
        'orange': '#EB5E28',
        'light-green': '#F1F6FA',
        'teal': '#62929E',
        'graphite': '#1E1E21',
        'light-pink': '#E1D8E1',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
