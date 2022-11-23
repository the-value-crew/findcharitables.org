const c1 = () => import(/* webpackChunkName: "page--src--templates--charity-page-template-vue" */ "/home/bibhuti/projects/findcharitables.org/src/templates/CharityPageTemplate.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--privacy-policy-vue" */ "/home/bibhuti/projects/findcharitables.org/src/pages/PrivacyPolicy.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--charitables-vue" */ "/home/bibhuti/projects/findcharitables.org/src/pages/Charitables.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/bibhuti/projects/findcharitables.org/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/bibhuti/projects/findcharitables.org/src/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/bibhuti/projects/findcharitables.org/src/pages/Index.vue")

export default [
  {
    path: "/charitables/saheed-adarsha-higher-secondary-school/",
    component: c1
  },
  {
    path: "/charitables/pranavananda-ashram/",
    component: c1
  },
  {
    path: "/charitables/disabled-rehabilitation-center/",
    component: c1
  },
  {
    path: "/charitables/divine-service-home/",
    component: c1
  },
  {
    path: "/privacy-policy/",
    component: c2
  },
  {
    path: "/charitables/",
    component: c3
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
