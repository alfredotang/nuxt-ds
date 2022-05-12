export const state = () => ({
  isLogin: false,
  isStoreReady: false,
})

export const getters = {
  isLogin: (state) => state.isLogin,
  isStoreReady: (state) => {
    return state.isStoreReady
  },
  isNeedLoginStoreReady(state, getters) {
    return getters.isLogin && getters.isStoreReady
  },
}
export const actions = {
  onLogin({ commit }) {
    console.log('==== onLogin ====')
    this.$cookie.set({ name: 'afu-poc-isLogin', value: true })
    window.location.reload()
  },
  onLogout({ commit }) {
    console.log('==== onLogout ====')
    this.$cookie.delete('afu-poc-isLogin')
    window.location.reload()
  },
  checkLogin({ commit }) {
    if (!this.$cookie.get('afu-poc-isLogin')) return
    commit('SET_LOGIN', true)
  },
  setStoreReady({ commit }, payload) {
    commit('SET_IS_STORE_READY', payload)
  },
}
export const mutations = {
  SET_LOGIN(state, payload) {
    state.isLogin = payload
  },
  SET_IS_STORE_READY(state, payload) {
    state.isStoreReady = payload
  },
}
