import _ from 'lodash'
function registerStore({ module, store }) {
  const { name: moduleName } = module
  const moduleIsRegistered = store.hasModule(moduleName)
  const stateExists = _.get(store.state, moduleName)
  if (!moduleIsRegistered) {
    store.registerModule(moduleName, module, { preserveState: stateExists })
  }
}

function unregisterStore({ module, store }) {
  const { name: moduleName } = module
  store.unregisterModule(moduleName)
}

export default (context, inject) => {
  inject('registerStore', registerStore)
  inject('unregisterStore', unregisterStore)
}
