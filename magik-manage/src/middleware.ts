import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
  const nextUrl = request.nextUrl.pathname;
  const auth = cookies().get("authorization");
  let isLogin = !!auth;
  if(nextUrl === "/login"){ 
    if(isLogin){
      return NextResponse.redirect(new URL('/home', request.url))
    }else{
      return NextResponse.rewrite(new URL('/login', request.url))
    }
  }else{
    if(!isLogin){
      return NextResponse.redirect(new URL('/login', request.url))
    }else{
      return NextResponse.rewrite(new URL(nextUrl, request.url))
    }
  }

}

export const config = {
  matcher: ['/home/:path*', '/login'],
}
