import request from '../utils/request.js'
// 获取 token
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
