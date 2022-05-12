import { createLogger } from 'vuex'

// export const plugins = [createLogger()]
export const actions = {
  async nuxtServerInit({ dispatch, rootGetters }, { req }) {
    await dispatch('user/checkLogin')
    console.log('==== on server initial ====')
    await dispatch('onBeforeCreate')
  },
  async onBeforeCreate({ rootGetters, dispatch }) {
    const isLogin = rootGetters['user/isLogin']
    if (!isLogin) return
    await dispatch('registerFaker2Module')
    if (process.server) return
    dispatch('user/setStoreReady', true)
  },
  async registerFaker2Module({ dispatch }) {
    console.log('==== registerFaker2Module ====')
    const { default: faker2Module } = await import(
      /* webpackChunkName: "store-modules/faker2" */ '~/store-modules/faker2'
    )
    this.$registerStore({ module: faker2Module, store: this })
    await dispatch('faker2/fetchFaker2Country')
  },
}
