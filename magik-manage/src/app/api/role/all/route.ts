import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function POST(request: NextRequest) {
	try {
		const params = new URL(request.url).searchParams;
		const res = await fetch(
			`http://localhost:8888/role/all?page=${params.get('page')}&limit=${params.get('limit')}`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
				},
			}
		);
		const ret = await res.json();
		return NextResponse.json(ret);
	} catch (e: any) {
		return NextResponse.json({ message: e.message });
	}
}
