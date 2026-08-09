import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { usePosts } from '@/hooks/usePosts'

import Surface from '@/components/ui/Surface'

export default function RandomBlock() {
	const { posts } = usePosts()
	if (!posts || posts.length === 0) return null

	const article = posts?.[Math.floor(Math.random() * posts.length)]

	return (
		<RandomBlockWrapper label="Random Post">
			<ArticleCard to={`/posts/${article.slug}`}>
				<CategoryTag>{article.category.name}</CategoryTag>
				<Title>{article.title}</Title>
				<Summary>{article.excerpt}</Summary>
				<DateLine>{article.createdAt}</DateLine>
			</ArticleCard>
		</RandomBlockWrapper>
	)
}

const RandomBlockWrapper = styled(Surface)`
	display: flex;
	flex-direction: column;
	width: 240px;

	[data-mode='cont'] & {
		display: none;
	}
`

const ArticleCard = styled(Link)`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 12px;
	border-radius: var(--radius-sm, 6px);
	text-decoration: none;
	transition: all 0.2s ease;
	cursor: pointer;

	&:hover {
		transform: translateY(-1px);
	}
`

const CategoryTag = styled.span`
	align-self: flex-start;
	font-size: 11px;
	font-weight: 600;
	color: var(--primary-color, #4a90d9);
	background: var(--color-bg-2);
	padding: 2px 8px;
	border-radius: 12px;
`

const Title = styled.p`
	font-size: 14px;
	font-weight: 600;
	color: var(--color-text);
	margin: 0;
	line-height: 1.4;
`

const Summary = styled.p`
	font-size: 12px;
	color: var(--color-text-1);
	margin: 0;
	line-height: 1.5;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
`

const DateLine = styled.p`
	font-size: 11px;
	color: var(--color-text-2);
	margin: 0;
`
