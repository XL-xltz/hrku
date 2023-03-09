// 登录
export const login = () => import(/* webpackChunkName: "about" */ '../../views/login')
// 404
export const four = () => import(/* webpackChunkName: "about" */ '../../layout/components/404.vue')
// Layout
export const Layout = () => import(/* webpackChunkName: "about" */ '../../layout/')
// Dashboard
export const Dashboard = () => import(/* webpackChunkName: "about" */ '../../views/dashboard/index.vue')
