import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const redirects: Record<string, string> = {
  '/kontakt': '/contact',
  '/dla-ksiegowych': '/ksiegowi',
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get('host') || ''
  // On Vercel, use VERCEL_ENV to detect preview vs production
  const isProd = process.env.VERCEL_ENV === 'production'
  const isVercelPreview = host.endsWith('.vercel.app')

  // 1) Handle path redirects
  if (redirects[pathname]) {
    return NextResponse.redirect(new URL(redirects[pathname], request.url), 301)
  }

  // 2) Force WWW only on the real custom domain in production (not on *.vercel.app previews)
  if (isProd && !isVercelPreview && !host.startsWith('www.')) {
    const url = new URL(request.url)
    url.host = `www.${host}`
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip Next internals and API
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
