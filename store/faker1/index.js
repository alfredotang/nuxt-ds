import faker1 from '~/fakers/faker1'

export const state = () => ({
  faker1: faker1.data,
})

// export const getters = {
//   faker2Country(state, getters, rootState, rootGetters) {
//     return rootGetters['faker2/faker2Country']
//   },
//   faker2Data(state, getters, rootState, rootGetters) {
//     return rootGetters['faker2/faker2Data']
//   },
// }
