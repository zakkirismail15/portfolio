import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingView from '../views/LandingView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/portfolio/',
    name: 'home',
    component: LandingView,
  },
  {
    path: '/portfolio/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
