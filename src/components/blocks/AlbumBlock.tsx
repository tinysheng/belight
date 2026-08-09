import styled from '@emotion/styled'

export default function AlbumBlock() {
	return (
		<AlbumBlockContainer>
			<Photo src="https://free.picui.cn/free/2026/01/01/69555399d8e3b.webp" alt="album" />
			<Overlay>
				<AlbumTitle>生活碎片</AlbumTitle>
				<AlbumDesc>记录每一个值得珍藏的瞬间</AlbumDesc>
			</Overlay>
		</AlbumBlockContainer>
	)
}

const AlbumBlockContainer = styled.div`
	position: relative;
	width: 100%;
	height: 200px;
	border-radius: var(--radius-md, 12px);
	background: #fff;
	overflow: hidden;
	cursor: pointer;

	&:hover img {
		transform: scale(1.05);
	}

	&:hover .album-overlay {
		opacity: 1;
	}

	[data-mode='blog'] & {
		display: none;
	}
	[data-mode='cont'] & {
		display: none;
	}
`

const Photo = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: var(--radius-md, 12px);
	transition: transform 0.5s ease;
`

const Overlay = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 16px;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 60%);
	border-radius: var(--radius-md, 12px);
	opacity: 0.8;
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 1;
	}
`

const AlbumTitle = styled.p`
	font-size: 16px;
	font-weight: 700;
	color: var(--color-text);
	margin: 0 0 4px;
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`

const AlbumDesc = styled.p`
	font-size: 12px;
	color: var(--color-text);
	opacity: 0.75;
	margin: 0;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`
