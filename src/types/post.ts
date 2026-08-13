export interface PostListItem {
	id: number
	title: string
	slug: string
	excerpt: string
	coverUrl: string
	topLevel: number
	views: number
	createdAt: string
	updatedAt: string
	category: string
	tags: string[]
}

export interface PostDetail extends PostListItem {
	content: string
}

export interface ArchiveList {
	year: number
	count: number
	list: {
		id: number
		title: string
		slug: string
		createdAt: string
		updatedAt: string
		category: string
		tags: string[]
	}[]
}

export interface Pagination {
	page: number
	limit: number
	total: number
	totalPages: number
}
