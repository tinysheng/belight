import styled from '@emotion/styled'

export default function Home() {
	return (
		<HomeArea>
			<Overline>Belight — 个人博客</Overline>
			<Headline>
				一缕光
				<Cursor />
			</Headline>
			<Divider />
			<Description>记录设计与代码的细碎思考</Description>
			<Meta>47 篇文章 · 12k 阅读</Meta>
		</HomeArea>
	)
}

const HomeArea = styled.div`
	width: 100%;
	height: 320px;
	border-radius: 20px;
	padding: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	position: relative;
	overflow: hidden;
	gap: 12px;

	@media (max-width: 520px) {
		width: 100%;
		max-width: 500px;
		padding: 32px 24px;
	}
`

const Overline = styled.span`
	font-size: 12px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: var(--color-text-1);
	font-weight: 500;
`

const Headline = styled.h1`
	font-size: 44px;
	font-weight: 800;
	color: var(--color-text);
	margin: 0;
	letter-spacing: -1px;
	line-height: 1.1;
	display: flex;
	align-items: center;
	gap: 4px;
`

const Cursor = styled.span`
	width: 3px;
	height: 36px;
	background: var(--color-text);
	animation: blink 1s step-end infinite;
	border-radius: 2px;

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
`

const Divider = styled.div`
	width: 40px;
	height: 3px;
	background: linear-gradient(90deg, #c8b4a0, #d4c5b5);
	border-radius: 2px;
	margin: 8px 0;
`

const Description = styled.p`
	font-size: 15px;
	color: var(--color-text-1);
	margin: 0;
	line-height: 1.6;
	max-width: 320px;
`

const Meta = styled.span`
	font-size: 12px;
	color: var(--color-text-2);
	margin-top: 8px;
`
