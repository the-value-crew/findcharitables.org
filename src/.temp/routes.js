const c1 = () => import(/* webpackChunkName: "page--src--pages--search-vue" */ "/Users/mac/Projects/findcharitables.org/src/pages/Search.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--charity-page-template-vue" */ "/Users/mac/Projects/findcharitables.org/src/templates/CharityPageTemplate.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--privacy-policy-vue" */ "/Users/mac/Projects/findcharitables.org/src/pages/PrivacyPolicy.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/mac/Projects/findcharitables.org/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/mac/Projects/findcharitables.org/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/mac/Projects/findcharitables.org/src/pages/Index.vue")

export default [
  {
    path: "/search/",
    component: c1
  },
  {
    path: "/pranavananda-ashram/",
    component: c2
  },
  {
    path: "/privacy-policy/",
    component: c3
  },
  {
    path: "/disabled-rehabilitation-center/",
    component: c2
  },
  {
    path: "/divine-service-home/",
    component: c2
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
