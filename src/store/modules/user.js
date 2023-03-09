import { login, userInfo } from '../../api/user.js'
import { setToken, getToken } from '../../utils/auth.js'
const state = {
  token: getToken(),
  userInfo: {}
}
const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    setToken(token)
  },
  SET_USERINFO(state, userData) {
    state.userInfo = userData
  }
}
const actions = {
  async login(context, token) {
    const res = await login(token)
    context.commit('SET_TOKEN', res)
  },
  async userInfo(context) {
    const res = await userInfo()
    console.log(res)
    context.commit(res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
