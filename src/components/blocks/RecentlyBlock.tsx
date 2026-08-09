import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { usePosts } from '@/hooks/usePosts'

import Surface from '@/components/ui/Surface'

export default function RecentlyBlock() {
	const { posts } = usePosts()
	const recentPosts = posts.slice(0, 5)

	return (
		<RecentlyBlockWrapper label="Recent Posts">
			<PostsList>
				{recentPosts.map((item, index) => (
					<PostItem key={item.id} to={`/posts/${item.slug}`}>
						<IndexDot>{index + 1}</IndexDot>
						<div className="content">
							<p className="title">{item.title}</p>
							<p className="date">{item.createdAt}</p>
						</div>
					</PostItem>
				))}
			</PostsList>
		</RecentlyBlockWrapper>
	)
}

const RecentlyBlockWrapper = styled(Surface)`
	width: 320px;
	display: flex;
	flex-direction: column;

	[data-mode='cont'] & {
		display: none;
	}
`

const PostsList = styled.ul`
	width: 100%;
	min-height: 300px;
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin: 0;
	padding: 0;
	list-style: none;
`

const PostItem = styled(Link)`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 8px 6px;
	border-radius: var(--radius-sm, 6px);
	text-decoration: none;
	transition: background 0.15s ease;

	&:hover {
		background-color: #f3f4f6;
	}

	.content {
		flex: 1;
		overflow: hidden;
	}

	.title {
		font-size: 13px;
		color: var(--color-text-root);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0 0 2px;
	}

	.date {
		font-size: 11px;
		color: var(--color-text-1);
		margin: 0;
	}
`

const IndexDot = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: #f3f4f6;
	font-size: 11px;
	font-weight: 600;
	color: var(--color-text-1);
	flex-shrink: 0;
`
