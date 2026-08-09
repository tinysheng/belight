import { lazy, Suspense } from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import BlogLayout from '@/components/layout/BlogLayout'
import Loading from '@/components/ui/Loading'

// 页面组件
import Home from '@/pages/home'
const Posts = lazy(() => import('@/pages/posts'))
const PostDetail = lazy(() => import('@/pages/postdetail'))
const About = lazy(() => import('@/pages/about'))
const Archives = lazy(() => import('@/pages/archives'))
const FriendsLink = lazy(() => import('@/pages/friends'))
const Dynamic = lazy(() => import('@/pages/dynamic'))

const routes: RouteObject[] = [
	{
		path: '/',
		element: <BlogLayout />,
		children: [
			{
				index: true,
				element: <Home />,
				handle: { layout: 'board' },
			},
			{
				path: 'posts',
				children: [
					{ index: true, element: <Posts />, handle: { title: '文章', layout: 'blog' } },
					{ path: ':slug', element: <PostDetail />, handle: { title: '文章', layout: 'cont' } },
				],
			},
			{
				path: 'about',
				element: <About />,
				handle: { title: '关于', layout: 'blog' },
			},
			{
				path: 'archives',
				element: <Archives />,
				handle: { title: '归档', layout: 'blog' },
			},
			{
				path: 'friends',
				element: <FriendsLink />,
				handle: { title: '友链', layout: 'blog' },
			},
			{
				path: 'dynamic',
				element: <Dynamic />,
				handle: { title: '动态', layout: 'blog' },
			},
		],
	},
	{
		path: '*',
		element: (
			<Suspense fallback={<Loading />}>
				<div> 404 Not Found </div>
			</Suspense>
		),
	},
]

export const router = createBrowserRouter(routes)
