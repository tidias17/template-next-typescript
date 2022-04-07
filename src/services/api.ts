import axios from 'axios'
import { camelizeKeys } from 'humps'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 100000
})

api.interceptors.response.use(
  (response) => {
    if (response) {
      // @ts-ignore
      response.data = camelizeKeys(response.data)
    }
    return response.data
  },
  (error) => {
    if (!error.response) {
      return Promise.reject({
        response: {
          data: {
            error: 'NETWORK_ERROR',
            errorDescription: 'Timed out'
          }
        }
      })
    }

    return Promise.reject(error)
  }
)

export default api
