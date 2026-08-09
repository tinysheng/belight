import { useState, useEffect } from 'react'
import { getPostDetail } from '@/services/post'
import type { PostDetail } from '@/types/post'

export function usePostDetail(slug: string) {
	const [post, setPost] = useState<PostDetail | null>(null)
	const [loading, setLoading] = useState<boolean>(!!slug)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (!slug) return

		let cancelled = false

		const fetchDetail = async () => {
			try {
				setLoading(true)
				setError(null)
				const data = await getPostDetail(slug)

				if (!cancelled) {
					setPost(data)
				}
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message || '获取文章详情失败')
				}
			} finally {
				if (!cancelled) {
					setLoading(false)
				}
			}
		}

		fetchDetail()

		return () => {
			cancelled = true
		}
	}, [slug])

	return { post, loading, error }
}
