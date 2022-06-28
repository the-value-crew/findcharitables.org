const c1 = () => import(/* webpackChunkName: "page--src-pages-search-vue" */ "D:\\code\\tvc-csr\\src\\pages\\Search.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-charity-page-vue" */ "D:\\code\\tvc-csr\\src\\pages\\CharityPage.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\code\\tvc-csr\\src\\pages\\About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\code\\tvc-csr\\node_modules\\gridsome\\app\\pages\\404.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\code\\tvc-csr\\src\\pages\\Index.vue")

export default [
  {
    path: "/search/",
    component: c1
  },
  {
    path: "/charity-page/",
    component: c2
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
