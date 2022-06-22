// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteName: 'TVC-CSR',
  plugins: [],
  css: {
    loaderOptions: {
     postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ],
     },
    },
  }
}
