import { useParams } from 'react-router-dom'
import { usePostDetail } from '@/hooks/usePostDetail'

import PostHeader from '@/components/post/PostHeader'
import Content from '@/components/post/Content'
import Loading from '@/components/ui/Loading'

export default function PostDetail() {
	const { slug } = useParams<{ slug: string }>()
	const { post, loading } = usePostDetail(String(slug))

	console.log('postdetail:', post)

	if (loading || !post) return <Loading />

	return (
		<>
			<PostHeader post={{ ...post }} />

			<Content content={post.content} />
		</>
	)
}
