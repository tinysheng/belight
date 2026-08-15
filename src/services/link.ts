import { get } from '@/utils/request'
import type { LinkItem } from '@/types/link'

export const getLinks = async (): Promise<LinkItem[]> => {
	const data = await get<LinkItem[]>('/links')

	return data
}
