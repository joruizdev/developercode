/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        overpass: 'Overpass',
        quicksand: 'Quicksand',
        sourceCodePro: 'Source Code Pro',
        barlow: 'Barlow',
        firaCode: 'Fira Code',
        mononoki: 'mononoki'
      }
    }
  },
  plugins: []
}
