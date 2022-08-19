const c1 = () => import(/* webpackChunkName: "page--src--pages--search-vue" */ "/Users/shrijalkaphle/Documents/code/tvc-csr/src/pages/Search.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/shrijalkaphle/Documents/code/tvc-csr/src/pages/About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/shrijalkaphle/Documents/code/tvc-csr/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/shrijalkaphle/Documents/code/tvc-csr/src/pages/Index.vue")

export default [
  {
    path: "/search/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
