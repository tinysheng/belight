import { get } from '@/utils/request'
import type { PostCard, PostDetail, ArchiveItem, Tag, Category } from '@/types/post'

const formatDate = (date: string) => new Date(date).toLocaleDateString()

const mapTag = (name: string) => ({
	name,
	slug: name.toLowerCase(),
})

// #region 获取文章列表
export const getPostList = async (): Promise<PostCard[]> => {
	const res = await get<unknown>('/api/posts')

	// 兼容多种返回结构
	const rawList = Array.isArray(res)
		? res
		: res && typeof res === 'object' && 'list' in res
			? (res as Record<string, unknown>).list
			: res && typeof res === 'object' && 'data' in res
				? (res as Record<string, unknown>).data
				: null

	if (!Array.isArray(rawList)) {
		console.error('文章列表格式异常:', res)
		throw new Error('文章列表格式异常')
	}

	return rawList.map((item) => ({
		id: item.id,
		title: item.title,
		slug: item.slug,
		cover: item.cover_url ?? item.cover ?? '',
		excerpt: item.excerpt ?? '',

		category: {
			name: item.category ?? '未分类',
			slug: (item.category ?? 'uncategorized').toLowerCase(),
		},

		tags: Array.isArray(item.tags) ? item.tags.map(mapTag) : [],

		createdAt: item.created_at ? formatDate(item.created_at) : '',
		views: item.views ?? 0,
	}))
}

// #region 获取文章详情
export const getPostDetail = async (slug: string): Promise<PostDetail> => {
	const res = await get<unknown>(`/api/posts/${slug}`)

	const item = res && typeof res === 'object' && !Array.isArray(res) ? (res as Record<string, unknown>) : null

	if (!item) {
		console.error('文章详情格式异常:', res)
		throw new Error('文章详情格式异常')
	}

	return {
		id: item.id as number,
		title: (item.title as string) ?? '',
		slug: (item.slug as string) ?? slug,
		cover: (item.cover_url as string) ?? (item.cover as string) ?? '',
		excerpt: (item.excerpt as string) ?? '',

		category: {
			name: (item.category as string) ?? '未分类',
			slug: ((item.category as string) ?? 'uncategorized').toLowerCase(),
		},

		tags: Array.isArray(item.tags) ? (item.tags as string[]).map(mapTag) : [],

		content: (item.content_html as string) ?? (item.content as string) ?? '',

		createdAt: item.created_at ? formatDate(item.created_at as string) : '',
		updatedAt: item.updated_at ? formatDate(item.updated_at as string) : '',

		views: (item.views as number) ?? 0,
	}
}

// #region 获取归档列表
export const getArchives = async (): Promise<ArchiveItem[]> => {
	const res = await get<unknown>('/archives')

	const rawList = Array.isArray(res)
		? res
		: res && typeof res === 'object' && 'list' in res
			? (res as Record<string, unknown>).list
			: res && typeof res === 'object' && 'data' in res
				? (res as Record<string, unknown>).data
				: []

	if (!Array.isArray(rawList)) {
		console.error('归档列表格式异常:', res)
		return []
	}

	// 假设后端是平铺数据，这里分组
	const map = new Map<number, ArchiveItem>()

	rawList.forEach((item) => {
		const year = new Date(item.created_at).getFullYear()

		if (!map.has(year)) {
			map.set(year, { year, list: [] })
		}

		map.get(year)!.list.push({
			id: item.id,
			title: item.title,
			slug: item.slug,
			createdAt: formatDate(item.created_at),
		})
	})

	return Array.from(map.values())
}

// #region 获取标签列表
export const getTags = async (): Promise<Tag[]> => {
	const res = await get<unknown>('/tags')

	const list = Array.isArray(res) ? res : res && typeof res === 'object' && 'data' in res ? (res as Record<string, unknown>).data : []

	if (!Array.isArray(list)) {
		console.error('标签列表格式异常:', res)
		return []
	}

	return list.map((name: string) => mapTag(name))
}

// #region 获取分类列表
export const getCategories = async (): Promise<Category[]> => {
	const res = await get<unknown>('/categories')

	const list = Array.isArray(res) ? res : res && typeof res === 'object' && 'data' in res ? (res as Record<string, unknown>).data : []

	if (!Array.isArray(list)) {
		console.error('分类列表格式异常:', res)
		return []
	}

	return list.map((name: string) => ({
		name,
		slug: name.toLowerCase(),
	}))
}
