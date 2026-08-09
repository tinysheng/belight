import styled from '@emotion/styled'

interface OverlayProps {
	onSearchClose: () => void
}

export default function OverLay({ onSearchClose }: OverlayProps) {
	return <OverLayWrapper onClick={() => onSearchClose()} />
}

const OverLayWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #00000066;
	z-index: 99;
`
