import BaseServices from './core/BaseServices'

export default class Services extends BaseServices {
  // Read
  fetch (config) {
    return this.get('', config)
  }

  // Read
  show (id, config) {
    return this.get(`/${id}`, config)
  }

  // Create
  store (config) {
    return this.post('', config)
  }

  // Update
  update (id, config) {
    return this.post(`/${id}`, config)
  }

  // Delete
  destroy (id, config) {
    return this.delete(`/${id}`, config)
  }
}
