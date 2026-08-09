import { css } from '@emotion/react'

export const main = css`
	:root {
		background-color: var(--color-bg);
		color: var(--color-text);

		font-family: sans-serif;
		font-family: var(--font-base);
		font-synthesis: style;
		scrollbar-gutter: stable;
		scroll-behavior: smooth;
		scrollbar-width: thin;
		scroll-padding: 2rem;
		scrollbar-color: var(--color-text-2) transparent;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		overflow-x: hidden;
	}

	img,
	picture,
	video,
	canvas {
		display: block;
		max-width: 100%;
	}

	ul,
	ol {
		list-style: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		font-size: inherit;
	}

	a {
		color: inherit;
		text-decoration: none;

		color: var(--primary-color);
		transition: color var(--transition-fast);
	}

	a:hover {
		color: var(--primary-hover-color);
	}

	code,
	pre,
	kbd,
	samp {
		font-family: var(--font-family-mono);
	}

	button,
	input,
	textarea,
	select {
		font: inherit;
		color: inherit;
	}

	button {
		background: none;
		border: none;
		cursor: pointer;
	}

	input,
	textarea,
	select {
		background: none;
		border: none;
		outline: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	:focus-visible {
		outline: 2px solid #00ccff88;
		outline-offset: 2px;
	}

	::selection {
		background-color: var(--color-accent);
	}
`
