import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function unauthorized() {
  return new NextResponse('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Admin Area", charset="UTF-8"',
      'Cache-Control': 'no-store',
    },
  })
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const isAdminRoute = pathname === '/admin' || pathname.startsWith('/admin/')
  if (!isAdminRoute) {
    return NextResponse.next()
  }

  const adminUser = process.env.ADMIN_USER
  const adminPass = process.env.ADMIN_PASS
  if (!adminUser || !adminPass) {
    return unauthorized()
  }

  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.toLowerCase().startsWith('basic ')) {
    return unauthorized()
  }

  const base64 = authHeader.slice(6).trim()
  let decoded = ''
  try {
    decoded = atob(base64)
  } catch {
    return unauthorized()
  }

  const sep = decoded.indexOf(':')
  if (sep === -1) return unauthorized()

  const user = decoded.slice(0, sep)
  const pass = decoded.slice(sep + 1)

  if (user !== adminUser || pass !== adminPass) {
    return unauthorized()
  }

  const res = NextResponse.next()
  res.headers.set('Cache-Control', 'no-store')
  return res
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
}
