import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(_request: NextRequest) {
  // Host canonicalization (www/apex) is handled ONLY in Vercel.
  // No redirects or rewrites are allowed here.
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip Next internals and API routes
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
