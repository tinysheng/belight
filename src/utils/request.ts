import axios, { type AxiosInstance } from 'axios'

const baseURL = import.meta.env.DEV ? '/api' : 'https://wannasimply.com/api'

export const apiClient: AxiosInstance = axios.create({
	baseURL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
})

// 请求拦截器
apiClient.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(error) => Promise.reject(error)
)

// 响应拦截器
apiClient.interceptors.response.use(
	(response) => {
		const res = response.data

		if (res === null || typeof res !== 'object' || Array.isArray(res)) {
			return res
		}

		if ('success' in res) {
			if (!res.success) {
				return Promise.reject(new Error(res.message || '请求失败'))
			}
			return res.data ?? res
		}

		if ('code' in res) {
			if (res.code !== 0 && res.code !== 200) {
				return Promise.reject(new Error(res.message || '请求失败'))
			}
			return res.data ?? res
		}

		return res
	},
	(error) => {
		let message = '请求失败'

		if (error.response) {
			message = error.response.data?.message || '服务器错误'
		} else if (error.request) {
			message = '网络异常'
		} else {
			message = error.message
		}

		return Promise.reject(new Error(message))
	}
)

// 请求函数
export const get = <T = unknown, P = Record<string, unknown>>(url: string, params?: P): Promise<T> => {
	return apiClient.get(url, { params })
}

export const post = <T = unknown, P = Record<string, unknown>>(url: string, data?: P): Promise<T> => {
	return apiClient.post(url, data)
}

export const put = <T = unknown, P = Record<string, unknown>>(url: string, data?: P): Promise<T> => {
	return apiClient.put(url, data)
}

export const del = <T = unknown>(url: string): Promise<T> => {
	return apiClient.delete(url)
}
