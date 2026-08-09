import { keyframes } from '@emotion/react'

export const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

export const fadeOut = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`

export const slideUp = keyframes`
	from {
		transform: translateY(12px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`

export const slideDown = keyframes`
	from {
		transform: translateY(-12px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`

export const slideLeft = keyframes`
	from {
		transform: translateX(12px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
`

export const slideRight = keyframes`
	from {
		transform: translateX(-12px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
`

export const scaleIn = keyframes`
	from {
		transform: scale(0.95);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
`

export const scaleOut = keyframes`
	from {
		transform: scale(1);
		opacity: 1;
	}
	to {
		transform: scale(0.95);
		opacity: 0;
	}
`

export const pulse = keyframes`
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
`

export const spin = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

export const bounce = keyframes`
	0%,
	100% {
		transform: translateY(-25%);
		animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
	}
	50% {
		transform: translateY(0);
		animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
	}
`

export const shimmer = keyframes`
	0% {
		background-position: -200% 0;
	}
	100% {
		background-position: 200% 0;
	}
`
