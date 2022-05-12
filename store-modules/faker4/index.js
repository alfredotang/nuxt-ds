import faker4 from '~/fakers/faker4'

export default {
  namespaced: true,
  name: 'faker4',
  state: {
    faker4: faker4.data,
  },
}
