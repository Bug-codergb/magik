import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function POST(request: NextRequest, { params }: { params: { userId: string } }) {
	try {
		const { userId } = params;
		const token = cookies().get('authorization')?.value || '';
		const res = await fetch(`http://localhost:8888/menu/list/user/${userId}`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				Authorization: token,
			},
		});
		const ret = await res.json();
		if (ret.code === 401) {
			console.log('no authorization');
			//cookies().delete('authorization');
		}
		return NextResponse.json(ret);
	} catch (e: any) {
		return NextResponse.json({ message: e.message });
	}
}
