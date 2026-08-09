import { useState, useEffect } from 'react'
import { getPostList } from '@/services/post'
import type { PostCard } from '@/types/post'

let cachedPosts: PostCard[] | null = null
let pendingPromise: Promise<PostCard[]> | null = null

export function usePosts() {
	const [posts, setPosts] = useState<PostCard[]>(cachedPosts ?? [])
	const [loading, setLoading] = useState(!cachedPosts)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (cachedPosts) {
			return
		}

		const fetchPosts = async () => {
			try {
				if (!pendingPromise) {
					pendingPromise = getPostList()
				}

				const data = await pendingPromise

				cachedPosts = data
				setPosts(data)
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message || '获取文章列表失败')
				}
			} finally {
				setLoading(false)
			}
		}

		fetchPosts()
	}, [])

	return { posts, loading, error }
}
