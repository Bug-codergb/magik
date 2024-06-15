import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const isLogin = true;
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const nextUrl = request.nextUrl.pathname;
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
      return NextResponse.rewrite(new URL('/home', request.url))
    }
  }

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/home/:path*', '/login'],
}
