const state = () => ({
  loading: false
})

const actions = import('./actions')

const mutations = import('./mutations')

const getters = import('./getters')

export default { state, actions, mutations, getters }
