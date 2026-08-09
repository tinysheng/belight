export interface Tag {
	name: string
	slug: string
}

export interface Category {
	name: string
	slug: string
}

export interface PostCard {
	id: number
	title: string
	slug: string
	cover: string
	excerpt: string

	category: Category
	tags: Tag[]

	createdAt: string
	views: number
}

export interface PostDetail extends PostCard {
	content: string
	updatedAt: string
}

export interface ArchiveItem {
	year: number
	list: {
		id: number
		title: string
		slug: string
		createdAt: string
	}[]
}
