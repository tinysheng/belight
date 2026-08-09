import styled from '@emotion/styled'
import { Link, NavLink } from 'react-router-dom'

import Surface from '@/components/ui/Surface'

interface UserBlockProps {
	onSearchOpen: () => void
}

const navList = [
	{ icon: '✍', title: '文章', path: '/posts' },
	{ icon: '📦', title: '归档', path: '/archives' },
	{ icon: '🔗', title: '友链', path: '/friends' },
	{ icon: '💬', title: '动态', path: '/dynamic' },
]

export default function UserBlock({ onSearchOpen }: UserBlockProps) {
	return (
		<UserBlockWrapper label="Author">
			<LogoWrap>
				<Avatar to="/about">
					<img src="https://free.picui.cn/free/2026/02/20/699834ee30978.jpg" alt="avatar" />
				</Avatar>
				<TitleLink to="/">
					<Author>一缕光</Author>
					<Sub>simple simple simple</Sub>
				</TitleLink>
			</LogoWrap>

			<SearchButton
				onClick={(e) => {
					e.stopPropagation()
					onSearchOpen()
				}}>
				<SearchIcon width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.3-4.3" />
				</SearchIcon>
				<span className="placeholder">搜索文章...</span>
				<span className="shortcut">Ctrl K</span>
			</SearchButton>

			<MenuContainer>
				{navList.map((item) => (
					<MenuItem to={item.path} key={item.title}>
						<span className="icon">{item.icon}</span>
						<span className="title">{item.title}</span>
					</MenuItem>
				))}
			</MenuContainer>
		</UserBlockWrapper>
	)
}

const UserBlockWrapper = styled(Surface)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 14px;
	width: 260px;
`

const LogoWrap = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 10px 18px;
	width: 100%;
	gap: 12px;
`

const Avatar = styled(Link)`
	width: 56px;
	height: 56px;
	border-radius: 50%;
	flex-shrink: 0;
	overflow: hidden;
	border: 2px solid var(--color-border-soft);
	transition: border-color 0.2s ease;

	&:hover {
		border-color: var(--color-primary);
	}

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: left top;
	}
`

const TitleLink = styled(Link)`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow: hidden;
	gap: 4px;
	text-decoration: none;
`

const Author = styled.p`
	font-size: 16px;
	font-weight: 700;
	color: var(--color-text);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin: 0;
`

const Sub = styled.p`
	font-size: 12px;
	color: var(--color-text-1);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin: 0;
`

const SearchButton = styled.button`
	display: flex;
	align-items: center;
	gap: 8px;
	width: 90%;
	padding: 8px 12px;
	border: 1px solid var(--color-border);
	border-radius: 6px;
	background: var(--color-bg-2);
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		border-color: var(--color-border-hover);
		background: var(--color-bg-3);
	}

	.placeholder {
		flex: 1;
		font-size: 13px;
		color: var(--color-text-2);
		text-align: left;
	}

	.shortcut {
		font-size: 11px;
		color: var(--color-text-2);
		background: var(--color-bg);
		padding: 2px 6px;
		border-radius: 4px;
		border: 1px solid var(--color-border-soft);
	}
`

const SearchIcon = styled.svg`
	color: var(--color-text-2);
	flex-shrink: 0;
`

const MenuContainer = styled.menu`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0 12px;
	margin: 0;
	gap: 4px;
	list-style: none;
`

const MenuItem = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 10px;
	height: 36px;
	padding: 0 10px;
	border-radius: 6px;
	text-decoration: none;
	color: var(--color-text);
	transition: all 0.15s ease;

	&:hover {
		background-color: var(--color-hover);
		color: var(--color-text);
	}

	&.active {
		background-color: var(--color-active);
		color: var(--color-primary);
		font-weight: 600;
	}

	.icon {
		font-size: 16px;
		width: 20px;
		text-align: center;
	}

	.title {
		font-size: 14px;
	}
`
