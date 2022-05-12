export default async ({ store, route, redirect, params, query, req, res }) => {
  const { getters, dispatch } = store
  const isLogin = getters['user/isLogin']
  console.log('==== middle ====')
  console.log(`isLogin ${isLogin}`)

  if (!isLogin) return
  await dispatch('registerFaker2Module')
}
