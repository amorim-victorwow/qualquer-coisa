module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        brandBlue: '#0b6f8f',
        waveBlue: '#e6f7fb',
        footerNavy: '#071738',
        placeholderGray: '#dddddd'
      }
    }
  },
  plugins: []
}