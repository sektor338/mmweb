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
      "darkgrey": "#41516CFF",
      "betteryellow": "#FBCA3EFF",
      "cheapred": "#E24A68FF",
      "coolblue": "#1B5F8CFF",
    },
    extend: {},
  },
  plugins: [
      require('tailwindcss-animated'),
  ],
}
