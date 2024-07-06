import { IMenu } from '@/app/interface/IMenu';
import * as iconList from '@ant-design/icons/lib/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';
type MenuItem = Required<MenuProps>['items'][number];
export function formatMenu(menu: IMenu[]): MenuItem[] {
	let ret: MenuItem[] = [];
	if (!menu || menu.length === 0) {
		return ret;
	}
	for (let item of menu) {
		let Component = (iconList as Record<string, any>)[item.icon];
		let row: MenuItem = {
			path: item.path,
			key: item.path, //item.id,
			label:
				item.children && item.children.length !== 0 ? (
					item.title
				) : (
					<Link href={item.path} prefetch={false}>
						{item.title}
					</Link>
				),
			icon: Component ? <Component /> : '',
			children: item.children && item.children.length !== 0 ? formatMenu(item.children) : undefined,
		};
		ret.push(row);
	}
	return ret;
}
