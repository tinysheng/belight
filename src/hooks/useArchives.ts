import { useState, useEffect } from 'react'
import { getArchives } from '@/services/post'
import type { ArchiveList } from '@/types/post'

let cachedArchives: ArchiveList[] | null = null
let pendingPromise: Promise<ArchiveList[]> | null = null

export function useArchives() {
	const [archives, setArchives] = useState<ArchiveList[]>(cachedArchives ?? [])
	const [loading, setLoading] = useState(!cachedArchives)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (cachedArchives) {
			return
		}

		const fetchArchives = async () => {
			try {
				if (!pendingPromise) {
					pendingPromise = getArchives()
				}

				const data = await pendingPromise

				cachedArchives = data
				setArchives(data)
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message || '归档列表获取失败')
				}
			} finally {
				setLoading(false)
			}
		}

		fetchArchives()
	}, [])

	return { archives, loading, error }
}
