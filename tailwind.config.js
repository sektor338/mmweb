/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      "primary": "#006DFF",
      "background": "#282C33",
      "grey": "#ABB2BF",
    },
    extend: {},
  },
  plugins: [
      require('tailwindcss-animated'),
  ],
}
