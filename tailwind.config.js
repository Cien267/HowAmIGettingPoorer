/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        activeGreen: 'hsla(160, 100%, 37%, 1)'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
