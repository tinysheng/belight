import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from '@/routes'
import { store } from '@/store'

import Loading from '@/components/ui/Loading'

export default function App() {
	return (
		<Provider store={store}>
			{/* 全局loading */}
			<Suspense fallback={<Loading />}>
				<RouterProvider router={router}></RouterProvider>
			</Suspense>
		</Provider>
	)
}
