const c1 = () => import(/* webpackChunkName: "page--src--templates--charity-page-template-vue" */ "/Users/shrijalkaphle/Documents/code/tvc-csr/src/templates/CharityPageTemplate.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--search-vue" */ "/Users/shrijalkaphle/Documents/code/tvc-csr/src/pages/Search.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/shrijalkaphle/Documents/code/tvc-csr/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/shrijalkaphle/Documents/code/tvc-csr/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/shrijalkaphle/Documents/code/tvc-csr/src/pages/Index.vue")

export default [
  {
    path: "/save-the-children/",
    component: c1
  },
  {
    path: "/search/",
    component: c2
  },
  {
    path: "/chimalaya-charity-foundation/",
    component: c1
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
