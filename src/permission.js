import router from './router/router.js'
import store from './store'
const whiteList = ['/login', '/404'] // no redirect whitelist
// 前置
router.beforeEach(async (to, form, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
// 后置
// router.afterEach((to, form, next) => {})
