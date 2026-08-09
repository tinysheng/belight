import styled from '@emotion/styled'
import { useState, useEffect, useMemo, useRef } from 'react'
import { Outlet, useMatches } from 'react-router-dom'

import { useSearchHotkey } from '@/hooks/useSearchHotkey'

import BlogSidebar from '@/components/blog/BlogSidebar'
import BlogAside from '@/components/blog/BlogAside'
import BlogFooter from '@/components/blog/BlogFooter'
import AlbumBlock from '@/components/blocks/AlbumBlock'
import Search from '@/components/popover/Search'
// import Background from '@/components/ui/Background'

interface RouteHandle {
	title?: string
	layout?: 'board' | 'blog' | 'cont'
}

export default function BlogLayout() {
	const matches = useMatches()
	const [SearchOpen, setSearchOpen] = useState(false)
	useSearchHotkey(setSearchOpen)
	const searchInputRef = useRef<HTMLInputElement>(null)

	// 模式切换/动态标题
	const routeHandle = useMemo(() => {
		const last = [...matches].reverse().find((match) => match.handle as RouteHandle | undefined)
		return last?.handle as RouteHandle | undefined
	}, [matches])

	const mode = routeHandle?.layout ?? 'board'
	const pageTitle = routeHandle?.title ? `${routeHandle.title} - 目之所及` : '目之所及'

	useEffect(() => {
		document.title = pageTitle
	}, [pageTitle])

	// 搜索框聚焦
	useEffect(() => {
		if (SearchOpen && searchInputRef.current) {
			searchInputRef.current.focus()
		}
	}, [SearchOpen])

	return (
		<BlogRoot data-mode={mode}>
			<BlogSidebar onSearchOpen={() => setSearchOpen(true)} />

			<MainArea>
				<AlbumBlock />
				<Outlet />
				<BlogFooter />
			</MainArea>

			<BlogAside />

			{SearchOpen && <Search searchInputRef={searchInputRef} onSearchClose={() => setSearchOpen(false)} />}

			{/* <Background /> */}
			<Background />
		</BlogRoot>
	)
}

const Background = styled.div`
	position: fixed;
	inset: 5%;
	z-index: -1;

	background-image: url('https://free.picui.cn/free/2026/08/06/6a74ac5350f08.png');
	filter: saturate(400%) blur(100px) opacity(0.8);

	html[data-theme='dark'] & {
		display: none;
	}
`

const BlogRoot = styled.section`
	display: flex;
	justify-content: center;
	gap: 16px;

	min-height: 100vh;
	width: 100%;
	height: 100%;
`
const MainArea = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 32px;
	width: 100%;
	min-height: 100vh;
	transition: all 0.3s ease-in-out;

	[data-mode='board'] & {
		max-width: 500px;
		justify-content: center;
	}

	[data-mode='blog'] & {
		max-width: 900px;
	}

	[data-mode='cont'] & {
		max-width: 760px;
	}

	@media (max-width: 1024px) {
		[data-mode='blog'] & {
			max-width: 640px;
		}
		[data-mode='cont'] & {
			max-width: 640px;
		}
	}

	@media (max-width: 768px) {
		gap: 24px;
		padding: 12px 16px 32px;

		[data-mode='board'] &,
		[data-mode='blog'] &,
		[data-mode='cont'] & {
			max-width: 100%;
		}
	}
`
