module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   'blueGray': colors.blueGray,
    //   'coolGray': colors.coolGray,
    //   'warmGray': colors.warmGray,
    //   'sky': colors.sky,
    //   'teal': colors.teal,
    //   'cyan': colors.cyan,
    //   'rose': colors.rose,
    // },
    fontFamily: {
      'display': ['Montserrat'],
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
