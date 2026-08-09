import { useEffect } from 'react'
export function useSearchHotkey(setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>) {
	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			const isCmdOrCtrl = e.metaKey || e.ctrlKey

			if (isCmdOrCtrl && e.key.toLowerCase() === 'k') {
				e.preventDefault()
				e.stopPropagation()
				setSearchOpen((prev) => !prev)
				return
			}

			if (e.key === 'Escape') {
				setSearchOpen(false)
			}
		}

		window.addEventListener('keydown', onKeyDown, true)

		return () => {
			window.removeEventListener('keydown', onKeyDown, true)
		}
	}, [setSearchOpen])
}
