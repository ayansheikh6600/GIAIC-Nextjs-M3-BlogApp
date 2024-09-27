import {jwtDecode} from 'jwt-decode';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/dashboard')) {



  const token: any = req.cookies.get('authToken');

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {

    const verifyResponse = await fetch(new URL('/api/auth/verifyToken', req.url), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: token.value }),
    });
    // Cast jwtDecode to unknown first, then to a callable function
    const { valid, decodedToken } = await verifyResponse.json();
    
    
    if (!valid) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    // console.log(decodedToken);

    return NextResponse.next();
  } catch (err) {
    console.log(err);
    return NextResponse.redirect(new URL('/login', req.url));
  }

}

if (pathname.startsWith('/login') || pathname.startsWith("/signup")) {
  const token: any = req.cookies.get('authToken');

  if (token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

}


}

export const config = {
  matcher: ['/dashboard', "/login", "/signup"], // Protect specific routes
};
