import styled from '@emotion/styled'
import type { PostDetail } from '@/types/post'

interface PostHeaderProps {
	post: PostDetail
}

export default function PostHeader({ post }: PostHeaderProps) {
	return (
		<HeaderArea>
			<MetaBar>
				<MetaItem>
					<svg viewBox="0 0 24 24" width="14" height="14">
						<path
							d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"
							fill="currentColor"
						/>
					</svg>
					<span>{post.createdAt}</span>
				</MetaItem>
				<MetaItem>
					<svg viewBox="0 0 24 24" width="14" height="14">
						<path
							d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
							fill="currentColor"
						/>
					</svg>
					<span>更新于 {post.updatedAt}</span>
				</MetaItem>
				<MetaItem className="tag">
					<svg viewBox="0 0 24 24" width="14" height="14">
						<path
							d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"
							fill="currentColor"
						/>
					</svg>
					<span>{post.category.name}</span>
				</MetaItem>
				<MetaItem>
					<svg viewBox="0 0 24 24" width="14" height="14">
						<path
							d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
							fill="currentColor"
						/>
					</svg>
					<span>{post.views} 阅读</span>
				</MetaItem>
			</MetaBar>
			<h1>{post.title}</h1>
		</HeaderArea>
	)
}

const HeaderArea = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 12px;
	height: 180px;
	padding: 10px 20px;
	border-radius: var(--radius-md);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
	position: relative;
	overflow: hidden;

	h1 {
		font-size: 26px;
		font-weight: 700;
		color: var(--color-text);
		line-height: 1.4;
		letter-spacing: -0.02em;
	}
`

const MetaBar = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	flex-wrap: wrap;
`

const MetaItem = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 13px;
	color: var(--color-text-1);

	svg {
		flex-shrink: 0;
	}
`
