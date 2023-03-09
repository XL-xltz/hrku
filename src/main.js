import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局 css
import './styles/index.scss'

// 路由守卫
// import './permission'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
