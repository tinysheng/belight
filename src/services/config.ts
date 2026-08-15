import { get } from '@/utils/request'

export interface NavItem {
	text: string
	link: string
	icon: string
}

export interface ConfigProps {
	Avatar: string
	Author: string
	Description: string
	Title: string
	Subtitle: string
	Site: string
	Navs: NavItem[]
}

export const getConfig = async (): Promise<ConfigProps> => {
	const res = await get<ConfigProps>('/config')

	return res
}
