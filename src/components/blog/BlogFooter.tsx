import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import Surface from '@/components/ui/Surface'
import ThemeToggle from '@/components/blog/ThemeToggle'

const stats = { posts: 12, words: 34, time: 567 }

export default function BlogFooter() {
	return (
		<Footer>
			<Row>
				<Author to="/">一缕光</Author>
				<Slogan>“Time is but the stream I go a-fishing in.”</Slogan>
				<Online>当前正在浏览：2</Online>
			</Row>

			<Stats>
				{stats.posts} 篇 · {stats.words} 万字 · {stats.time} 天
			</Stats>

			<LinkGroup>
				<Link to="/about">关于我</Link>
				<Link to="/rss">RSS</Link>
				<Link target="_blank" to="https://beian.miit.gov.cn/#/Integrated/index">
					豫ICP备2025136949号-1
				</Link>
			</LinkGroup>

			<Bottom>
				<ThemeToggle />
				<span>© 2026 一缕光</span>
			</Bottom>
		</Footer>
	)
}

const Footer = styled(Surface)`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: auto;
	font-size: 13px;
	color: var(--color-text-1);

	[data-mode='board'] & {
		margin: 0;
	}
`

const Row = styled.div`
	display: grid;
	grid-template-areas: 'author	online' 'slogan	slogan';
	justify-content: space-between;
	width: 100%;
`

const Author = styled(Link)`
	grid-area: author;
	font-size: 18px;
	font-weight: 700;
	text-decoration: none;
`

const Slogan = styled.p`
	grid-area: slogan;
	padding-top: 8px;
	font-style: italic;
`

const Online = styled.span`
	grid-area: online;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

const Stats = styled.p`
	padding-top: 24px;
	color: var(--color-text-2);
`

const LinkGroup = styled.nav`
	display: flex;
	align-items: center;
	gap: 20px;
	padding-top: 6px;

	& > a {
		&:hover {
			opacity: 0.8;
			text-decoration: underline;
		}
	}
`

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
	margin-top: 30px;
	padding: 8px;
	border-top: 1px solid #e5e7eb;

	@media (max-width: 640px) {
		flex-direction: column;
		align-items: flex-start;
	}
`
