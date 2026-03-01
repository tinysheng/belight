import type { AxiosInstance } from 'axios'

export const setupInterceptors = (instance: AxiosInstance) => {
  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // 可添加 Token 之类的统一 header
      // config.headers['Authorization'] = 'Bearer token';
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // 响应拦截器
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        console.error('❌ 响应错误:', error.response.data)
      } else if (error.request) {
        console.error('❌ 请求未响应:', error.request)
      } else {
        console.error('❌ 其他错误:', error.message)
      }
      return Promise.reject(error)
    }
  )
}
