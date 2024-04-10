import { NextResponse, NextRequest } from 'next/server'
import getDataFromToken from './helpers/getDataFromToken';

export function middleware(request: NextRequest) {

  const path = request.nextUrl.pathname
  const isPublicPath = path === '/login' || path === '/signup'
  const token = request.cookies.get('token')?.value || ''
  //let userRole = '';

  // if (token) {
  //   const decodedToken = getDataFromToken(request);
  //   userRole = decodedToken.userRole; // Get the role from the decoded token
  // }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }

  // if (path === '/dashboard' && !(userRole === 'admin' || userRole === 'teacher')) {
  //   return NextResponse.redirect(new URL('/', request.nextUrl)); // Redirect to an unauthorized page or home
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/profile',
    '/profile/mark-attendance',
    '/login',
    '/signup',
    '/dashboard'
  ],
}