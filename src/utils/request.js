import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(config => {
  const token = store.getters.token
  if (token) {
    // 如果token存在 注入token
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})
service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    // 业务已经错误了 还能进then ? 不能 ！ 应该进catch
    Message.error(message) // 提示错误消息
    return Promise.reject(new Error(message))
  }
})
export default service
