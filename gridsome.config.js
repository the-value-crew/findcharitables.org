// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteName: 'CSR',
  titleTemplate: '%s',
  // icon: './src/assets/images/findcharitables.png',
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
  },
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
}
