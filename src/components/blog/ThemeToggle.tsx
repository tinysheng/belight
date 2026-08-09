import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

type Theme = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'theme'

const getSystemTheme = (): 'light' | 'dark' => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

const applyTheme = (theme: Theme) => {
	const root = document.documentElement
	const resolved = theme === 'system' ? getSystemTheme() : theme
	root.setAttribute('data-theme', resolved)
}

export default function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>('system')

	useEffect(() => {
		const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
		if (stored === 'light' || stored === 'dark' || stored === 'system') {
			setTheme(stored)
			applyTheme(stored)
		} else {
			applyTheme('system')
		}

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const handleSystemChange = () => {
			const current = localStorage.getItem(STORAGE_KEY) as Theme | null
			if (!current || current === 'system') {
				applyTheme('system')
			}
		}
		mediaQuery.addEventListener('change', handleSystemChange)
		return () => mediaQuery.removeEventListener('change', handleSystemChange)
	}, [])

	const handleClick = (next: Theme) => {
		setTheme(next)
		localStorage.setItem(STORAGE_KEY, next)
		applyTheme(next)
	}

	return (
		<ThemeToggleArea>
			<span onClick={() => handleClick('light')}>light</span>
			<span>·</span>
			<span onClick={() => handleClick('system')}>system</span>
			<span>·</span>
			<span onClick={() => handleClick('dark')}>dark</span>
		</ThemeToggleArea>
	)
}

const ThemeToggleArea = styled.span`
	& > span {
		padding: 0 0.1rem;
		cursor: pointer;

		&:hover {
			opacity: 0.8;
		}
	}
`
