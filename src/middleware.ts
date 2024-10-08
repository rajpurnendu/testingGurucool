import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // console.log('====================================');
    // let params = new URL(request.url).searchParams;
    // console.log(params);
    
    // console.log(request.cookies.get('loginToken')?.value);
    if(!request.cookies.get('loginToken')?.value){
      return NextResponse.redirect(new URL('/', request.url));
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/wallet/:path*','/my-profile/:path*','/call-consultation-started', '/call-consultation-ended'],
}