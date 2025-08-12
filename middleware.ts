import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const redirects: Record<string, string> = {
  "/kontakt": "/contact",
  "/dla-ksiegowych": "/ksiegowi",
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { pathname, search, hash } = url;

  if (redirects[pathname]) {
    const target = new URL(redirects[pathname] + search + hash, url);
    return NextResponse.redirect(target, 301);
  }

  // Enforce www in production
  const host = request.headers.get("host") || "";
  if (process.env.NODE_ENV === "production" && !host.startsWith("www.")) {
    return NextResponse.redirect(`https://www.zmianakrs.pl${pathname}${search}${hash}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
