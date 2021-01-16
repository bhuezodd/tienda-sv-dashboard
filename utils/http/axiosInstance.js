// eslint-disable-next-line import/no-mutable-exports
let axios = null

export function instance ($axios) {
  axios = $axios
}

export { axios }
