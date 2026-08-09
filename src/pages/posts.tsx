import styled from '@emotion/styled'
import { usePosts } from '@/hooks/usePosts'
import PostCard from '@/components/post/PostCard'
import Loading from '@/components/ui/Loading'

export default function Posts() {
	const { posts, loading } = usePosts()

	console.log('posts:', posts)

	if (loading && posts.length === 0) return <Loading />

	return (
		<PostsList>
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</PostsList>
	)
}

const PostsList = styled.section`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding-top: 32px;
`
