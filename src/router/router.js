import Vue from 'vue'
import Router from 'vue-router'
// 登录
const login = () => import(/* webpackChunkName: "about" */ '../views/login')
// 404
const four = () => import(/* webpackChunkName: "about" */ '../layout/components/404.vue')
// Layout
const Layout = () => import(/* webpackChunkName: "about" */ '../layout')
// Dashboard
const Dashboard = () => import(/* webpackChunkName: "about" */ '../views/dashboard/index.vue')

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
