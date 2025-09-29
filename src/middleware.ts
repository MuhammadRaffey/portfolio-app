import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = url.hostname.toLowerCase();

  // Canonicalize to www host
  if (hostname === "muhammadraffey.xyz") {
    url.hostname = "www.muhammadraffey.xyz";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Ensure sitemap.xml and robots.txt also get canonicalized
  matcher: ["/sitemap.xml", "/robots.txt", "/((?!_next).*)"],
};
