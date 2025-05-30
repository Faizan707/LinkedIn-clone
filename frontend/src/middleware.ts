import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const isProtectedRoute = request.nextUrl.pathname.startsWith('/feeds')

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  return NextResponse.next()
}
export const config = {
  matcher: ['/feeds'],
}
