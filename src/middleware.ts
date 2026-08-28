import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // Support for subdomain portfolio.thequantpartners.com or localhost test
  if (
    hostname.startsWith("portfolio.") ||
    hostname.startsWith("portafolio.")
  ) {
    // If accessing root of portfolio subdomain, rewrite to /portafolio
    if (url.pathname === "/") {
      return NextResponse.rewrite(new URL("/portafolio", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - icon.svg
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg).*)",
  ],
};
