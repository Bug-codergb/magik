import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const res = await fetch(`http://localhost:8888/user/delete/${params.id}`, {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},
		});
		const ret = await res.json();
		return NextResponse.json(ret);
	} catch (e: any) {
		return NextResponse.json({ message: e.message });
	}
}
