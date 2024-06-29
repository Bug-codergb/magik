import { IMenu } from '@/app/interface/IMenu';
import { R } from '@/app/interface/R';
import { formatMenu } from '@/app/utils/formatMenu';
import getFirstMenu from '@/app/utils/getFirstMenu';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
type MenuItem = Required<MenuProps>['items'][number];

async function getData(): Promise<R<IMenu[]>> {
	const auth = cookies().get('authorization');
	const userId = cookies().get('user-id');
	const res = await fetch(`http://localhost:8888/menu/list/user/${userId ? userId.value : ''}`, {
		method: 'post',
		next: {
			revalidate: 60 * 60,
			tags: ['user-role-menu'],
		},
		headers: {
			Authorization: auth ? auth.value : '',
		},
	});
	const ret = await res.json();
	return ret;
}
export default async function () {
	let res: R<IMenu[]> = await getData();
	let rawNav: any[] = [];
	let firstMenu = null;
	if (res.code === 200) {
		rawNav = formatMenu(res.data);
		firstMenu = getFirstMenu(res.data[0]);
	} else if (res.code === 401) {
		redirect('/logout');
	}
	const headersList = headers();
	const _nextUrl = headersList.get('_nextUrl') || (firstMenu ? firstMenu.path : '');
	return (
		<div className={'flex size-full flex-col text-slate-950'}>
			<div className={'h-16 text-slate-950'}></div>
			<Menu
				//onClick={onClick}
				style={{ width: '100%' }}
				defaultSelectedKeys={[_nextUrl]}
				defaultOpenKeys={[_nextUrl]}
				mode="inline"
				items={rawNav}
				className={'flex-1 overflow-y-auto'}
			/>
		</div>
	);
}
