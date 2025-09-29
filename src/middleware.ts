import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = url.hostname.toLowerCase();

  if (hostname === "muhammadraffey.xyz") {
    url.hostname = "www.muhammadraffey.xyz";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sitemap.xml", "/robots.txt", "/((?!_next).*)"],
};
