import { createRoot } from 'react-dom/client'
import { Global } from '@emotion/react'
import { globalStyles } from '@/styles'

import App from './App'

const root = createRoot(document.getElementById('root')!)

root.render(
	<>
		<Global styles={globalStyles} />
		<App />
	</>
)
