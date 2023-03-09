import Vue from 'vue'
import Router from 'vue-router'
import { login, four, Layout, Dashboard } from '../router/components'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/404',
      name: 'four',
      component: four
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})
