import { login } from '../../api/user.js'
import { setToken, getToken } from '../../utils/auth.js'
const state = {
  token: getToken()
}
const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    setToken(token)
  }
}
const actions = {
  async login(context, userInfo) {
    const res = await login(userInfo)
    context.commit('SET_TOKEN', res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
