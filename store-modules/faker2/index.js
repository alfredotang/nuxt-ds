import faker2 from '~/fakers/fakerThin'

export default {
  namespaced: true,
  name: 'faker2',
  state: {
    faker2: faker2.data,
    faker2Country: '',
  },
  getters: {
    faker2Country(state) {
      return state.faker2Country
    },
    faker2Data(state) {
      return state.faker2
    },
  },
  actions: {
    async fetchFaker2Country({ getters, dispatch }) {
      if (getters.faker2Country) return
      const country = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('TW')
        }, 1000)
      })
      dispatch('setFaker2Country', country)
    },
    setFaker2Country({ commit }, payload) {
      commit('SET_FAKER2_COUNTRY', payload)
    },
  },
  mutations: {
    SET_FAKER2_COUNTRY(state, payload) {
      state.faker2Country = payload
    },
  },
}
