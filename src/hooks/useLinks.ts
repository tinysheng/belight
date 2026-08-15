import { useState, useEffect } from 'react'
import { getLinks } from '@/services/link'
import type { LinkItem } from '@/types/link'

let cachedLinks: LinkItem[] | null = null
let pendingPromise: Promise<LinkItem[]> | null = null

export function useLinks() {
	const [links, setLinks] = useState<LinkItem[]>(cachedLinks ?? [])
	const [loading, setLoading] = useState(!cachedLinks)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (cachedLinks) return

		const fetchLinks = async () => {
			try {
				if (!pendingPromise) {
					pendingPromise = getLinks()

					const data = await pendingPromise

					cachedLinks = data

					setLinks(data)
				}
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message || '友链列表获取失败')
				}
			} finally {
				setLoading(false)
			}
		}
		fetchLinks()
	}, [])

	return { links, loading, error }
}
