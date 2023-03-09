import request from '../utils/request.js'
// 获取 token
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
//获取用户信息
export function userInfo() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}
