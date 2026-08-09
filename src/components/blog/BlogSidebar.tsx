import styled from '@emotion/styled'

import UserBlock from '@/components/blocks/UserBlock'
import TagCloudBlock from '@/components/blocks/TagCloudBlock'

interface BlogAsideProps {
	onSearchOpen: () => void
}

export default function BlogSidebar({ onSearchOpen }: BlogAsideProps) {
	return (
		<Sidebar>
			<UserBlock onSearchOpen={onSearchOpen} />
			<TagCloudBlock />
		</Sidebar>
	)
}

const Sidebar = styled.aside`
	flex: 0 0 260px;
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 32px;

	min-width: 0;
	height: 100dvh;
	padding-top: 32px;
	transition: all 0.2s ease;

	[data-mode='board'] & {
		justify-content: center;
		align-items: flex-end;
	}

	[data-mode='blog'] & {
		justify-content: flex-start;
		align-items: flex-end;
	}

	@media (max-width: 768px) {
		position: fixed;
		inset-inline-start: 0;
		background-color: #eefcfc;
		transform: translateX(-100%);
		transition: transform 0.2s;
		z-index: 1000;
	}
`
