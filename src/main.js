// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/app.css'
import DefaultLayout from '~/layouts/Default.vue'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'

import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false;
library.add(faSearch, faPlusCircle, faFacebookSquare, faTwitterSquare, faYoutubeSquare)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome',FontAwesomeIcon)
}
