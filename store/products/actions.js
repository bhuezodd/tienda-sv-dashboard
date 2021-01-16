import ProductServices from '~/services/ProductServices'

export default {
  async fetch ({ commit }) {
    const { data } = await ProductServices.fetch()
    commit('fetch', data)
  }
}
