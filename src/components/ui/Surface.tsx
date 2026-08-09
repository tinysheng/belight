import { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

interface SurfaceProps {
	className?: string
	enterOrder?: number
	label?: string
}

export default function Surface({ children, className, enterOrder = 0, label }: PropsWithChildren<SurfaceProps>) {
	return (
		<SurfaceWrapper className={className} enterOrder={enterOrder} hasLabel={!!label}>
			{label && <Label>{label}</Label>}
			{children}
		</SurfaceWrapper>
	)
}

const SurfaceWrapper = styled.section<SurfaceProps & { hasLabel: boolean }>`
	position: relative;
	padding: 10px;
	border-width: 1px;
	border-style: dashed;
	border-color: var(--color-border);
	border-radius: 3px;
	opacity: 0;
	scale: 0.3;

	will-change: transform;
	animation: card-show 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
	animation-delay: ${({ enterOrder = 0 }) => enterOrder * 120}ms;

	@keyframes card-show {
		to {
			opacity: 1;
			scale: 1;
		}
	}

	&:hover {
		border-color: var(--color-border-hover);
	}
`

const Label = styled.span`
	position: absolute;
	top: -10px;
	left: 16px;
	padding: 0 8px;
	font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
	font-size: 14px;
	color: var(--color-text-2);
	line-height: 18px;
	z-index: 1;
`
