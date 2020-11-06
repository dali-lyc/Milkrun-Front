import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/Home.vue')
    }, {
      path: '/dispatch',
      component: () => import('@/Dispatch.vue')
    }, {
      path: '/settlement',
      component: () => import('@/Settlement.vue'),
    }, {
      path: '/report',
      component: () => import('@/Report.vue'),
    }, {
      path: '/map',
      component: () => import('@/Map.vue'),
    }
  ]
})
