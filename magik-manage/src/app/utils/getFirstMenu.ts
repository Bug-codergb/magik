import { IMenu } from '@/app/interface/IMenu'

function getFirstMenu(menu: IMenu): IMenu | undefined {
	if (!menu) {
		return undefined
	}
	if (menu.children && menu.children.length !== 0) {
		return getFirstMenu(menu.children[0])
	} else {
		return menu
	}
}
export default getFirstMenu
