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
        'light-green': '#F1F6FA',
        'teal': '#D8DDE1',
        'graphite': '#1E1E21'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
