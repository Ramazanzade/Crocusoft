import axios from 'axios'
import { store } from '../Store/store'
import { BASE_URL } from './constant'

const axiosInstance = axios.create({ baseURL: BASE_URL })

axiosInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log('Axios instance: ', error, error?.response?.status)
        const code = error?.response?.status
        if (code === 401) {
            store
        }
        return Promise.reject(error)
    }
)

export { axiosInstance }