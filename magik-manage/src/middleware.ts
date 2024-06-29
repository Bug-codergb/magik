import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export function middleware(request: NextRequest) {
	const nextUrl = request.nextUrl.pathname;
	const auth = cookies().get('authorization');
	let isLogin = !!auth;

	if (nextUrl === '/login') {
		if (isLogin) {
			return NextResponse.redirect(new URL('/home', request.url));
		} else {
			return NextResponse.next();
		}
	}
	if (nextUrl.startsWith('/api')) {
		const response = NextResponse.next();
		response.headers.append('Authorization', auth ? auth.value : '');
		return response;
	} else {
		if (!isLogin) {
			return NextResponse.redirect(new URL('/login', request.url));
		} else {
			const newHeader = new Headers(request.headers);
			newHeader.append('_nextUrl', request.nextUrl.pathname);
			return NextResponse.next({
				request: {
					headers: newHeader,
				},
			});
		}
	}
}
let a = 12;
export const config = {
	matcher: ['/home/:path*', '/api/:path*', '/login'],
};
