import { useState, useEffect } from 'react'
import { getConfig, type ConfigProps } from '@/services/config'

const cacheConfig: ConfigProps[] | null = null
let pendingPromise: Promise<ConfigProps> | null = null

export function useConfig() {
	const [config, setConfig] = useState<ConfigProps>()
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		if (cacheConfig) return
		let retryTimer: ReturnType<typeof setTimeout> | null = null

		const fetchConfig = async (retry = 0) => {
			try {
				if (!pendingPromise) {
					pendingPromise = getConfig()
				}
				const data = await pendingPromise
				setConfig(data)
				setLoaded(true)
			} catch (error) {
				if (retry < 2) {
					retryTimer = setTimeout(() => {
						fetchConfig(retry + 1)
					}, 1000)
				} else {
					console.log('配置资源获取失败', error)
				}
			}
		}
		fetchConfig()

		return () => {
			if (retryTimer) {
				clearTimeout(retryTimer)
			}
		}
	}, [])

	return { config, loaded }
}
