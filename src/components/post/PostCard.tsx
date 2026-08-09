import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import type { PostCard as PostCardType } from '@/types/post'

interface PostCardProps {
	post: PostCardType
}

export default function PostCard({ post }: PostCardProps) {
	return (
		<PostCardWrapper to={`/posts/${post.slug}`}>
			<Title>{post.title}</Title>
			<Excerpt>{post.excerpt}</Excerpt>
			<Meta>
				<MetaItem>
					<svg viewBox="0 0 24 24" width="14" height="14">
						<path
							d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"
							fill="currentColor"
						/>
					</svg>
					<span>{post.createdAt}</span>
				</MetaItem>
				<MetaItem className="tag">
					<svg viewBox="0 0 24 24" width="14" height="14">
						<path
							d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"
							fill="currentColor"
						/>
					</svg>
					<span>{post.tags.map((t) => t.name).join(', ')}</span>
				</MetaItem>
				<MetaItem>
					<svg viewBox="0 0 24 24" width="14" height="14">
						<path
							d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
							fill="currentColor"
						/>
					</svg>
					<span>{post.excerpt.length}字</span>
				</MetaItem>
			</Meta>
		</PostCardWrapper>
	)
}

const PostCardWrapper = styled(Link)`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 20px 24px;
	background: var(--color-bg-1);
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
	text-decoration: none;
	transition: background 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 1px;
		transition: transform 0.3s ease;
	}
`

const Title = styled.h2`
	font-size: 18px;
	font-weight: 600;
	color: var(--color-text);
	line-height: 1.4;
`

const Excerpt = styled.p`
	font-size: 14px;
	color: var(--color-text-1);
	line-height: 1.6;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`

const Meta = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-top: 4px;
`

const MetaItem = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 13px;
	color: var(--color-text-2);

	svg {
		flex-shrink: 0;
	}
`
