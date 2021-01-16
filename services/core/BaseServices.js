import { axios } from '@/utils/http/axiosInstance'

export default class BaseServices {
    api = ''

    // Leer
    // get() {}
    get (url, config) {
      return axios.get(`${this.api} ${url}`, config)
    }

    // Crear
    // post() {}
    post (url, config) {
      return axios.post(`${this.api} ${url}`, config)
    }

    // Actualizar
    // put() {}
    put (url, config) {
      return axios.put(`${this.api} ${url}`, config)
    }

    // Borrar
    // delete() {}
    delete (url, config) {
      return axios.delete(`${this.api} ${url}`, config)
    }
}
