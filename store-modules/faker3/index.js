import faker3 from '~/fakers/faker3'

export default {
  namespaced: true,
  name: 'faker3',
  state: {
    faker3: faker3.data,
  },
}
