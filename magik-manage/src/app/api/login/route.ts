import { IMenu } from '@/app/interface/IMenu';
import getFirstMenu from '@/app/utils/getFirstMenu';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function POST(request: NextRequest): Promise<never | NextResponse<any>> {
	try {
		const user = await request.json();
		const res = await fetch('http://localhost:8888/login', {
			method: 'post',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
			},
		});
		const ret = await res.json();
		if (ret.code === 200) {
			const response = await fetch(`http://localhost:8888/menu/list/user/${ret.data.userId}`, {
				method: 'post',
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
					Authorization: ret.data.token,
				},
			});
			const userMenuData = await response.json();
			if (userMenuData.code === 200) {
				const menuList: IMenu[] = userMenuData.data || [];
				if (menuList.length !== 0) {
					const menu = getFirstMenu(menuList[0]);
					if (menu) {
						const date = new Date();
						cookies().set('authorization', ret.data.token, {
							httpOnly: true,
							expires: date.setTime(date.getTime() + 24 * 60 * 60 * 1000), //一天
						});
						cookies().set('user-id', ret.data.userId);
						cookies().set('user-name', ret.data.userName);
						cookies().set('avatar-url', ret.data.avatarUrl);
						const response = NextResponse.json({
							code: 200,
							data: {
								...ret.data,
								menu: menu,
							},
							message: 'success',
						});
						response.headers.append('Authorization', ret.data.token);
						return response;
					}
				} else {
					return NextResponse.json({
						code: 403,
						message: '您没有菜单权限',
					});
				}
			}
		}
		return NextResponse.json(ret);
	} catch (e: any) {
		return NextResponse.json({ message: e.message });
	}
}
