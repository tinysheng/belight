import styled from '@emotion/styled'

import RecentlyBlock from '@/components/blocks/RecentlyBlock'
import RandomBlock from '@/components/blocks/RandomBlock'
import TocBlock from '@/components/blocks/TocBlock'

export default function BlogAside() {
	return (
		<Aside>
			<RecentlyBlock />
			<RandomBlock />
			<TocBlock />
		</Aside>
	)
}

const Aside = styled.aside`
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 32px;

	min-width: 0;
	height: 100dvh;
	padding-top: 30px;

	[data-mode='board'] & {
		justify-content: center;
		align-items: flex-start;
	}

	[data-mode='blog'] & {
		display: none;
	}

	[data-mode='cont'] & {
		flex: 0 0 260px;
	}

	@media screen and (max-width: 1080px) {
		position: fixed;
		inset-inline-end: 0;
		top: 0;
		max-width: 100%;
		max-height: 100%;
		background-color: #eefcfc;
		transform: translateX(100%);
		transition: transform 0.2s;
	}
`
