const tokenKey = 'XLToken'
// 取 token
export function getToken() {
  return localStorage.getItem(tokenKey)
}
// 存 token
export function setToken(token) {
  return localStorage.setItem(tokenKey, token)
}
// 重置
export function removeToken() {
  return localStorage.removeItem(tokenKey)
}
