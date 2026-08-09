import { usePostDetail } from '@/hooks/usePostDetail'
import Loading from '@/components/ui/Loading'
import Content from '../components/post/Content'

export default function About() {
	const { post, loading } = usePostDetail(String('Test-Firewall'))

	if (loading || !post) return <Loading />

	return <Content content={post.content} />
}
