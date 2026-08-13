import { get } from '@/utils/request'
import type { PostListItem, PostDetail, ArchiveList } from '@/types/post'

// #region 获取文章列表
export const getPostList = async (): Promise<PostListItem[]> => {
	const data = await get<PostListItem[]>('/posts')

	if (!Array.isArray(data)) {
		console.error('文章列表格式异常:', data)
		throw new Error('文章列表格式异常')
	}

	return data
}

// #region 获取文章详情
export const getPostDetail = async (slug: string): Promise<PostDetail> => {
	const data = await get<PostDetail>(`/posts/${slug}`)

	if (!data || typeof data !== 'object') {
		console.error('文章详情格式异常:', data)
		throw new Error('文章详情格式异常')
	}

	return data
}

// #region 获取归档列表
export const getArchives = async (): Promise<ArchiveList[]> => {
	const data = await get<ArchiveList[]>('/archives')

	if (!Array.isArray(data)) {
		console.error('归档列表格式异常:', data)
		return []
	}

	return data
}
