import { NextResponse, type NextRequest } from "next/server";

const SPAM_PATH_TERMS = [
  "modafinil",
  "viagra",
  "cialis",
  "levitra",
  "casino",
  "poker",
  "slots",
  "slot",
  "betting",
  "pharmacy",
  "phentermine",
  "tramadol",
  "xanax",
  "ozempic",
  "ketamine",
  "porn",
  "escort",
];

const BOT_PROBE_PATHS = [
  "/wp-admin",
  "/wp-content",
  "/wp-includes",
  "/wp-login.php",
  "/xmlrpc.php",
  "/wpt-testimonial",
];

const KILLED_BRAND_PATHS = [
  "/boutique",
  "/eternal-freedom",
  "/magic-money-meaning",
  // TODO: add 4 retiring dharma lesson slugs once Michael confirms exact paths
  // TODO: add old AI-soup blog slugs once the audit list is in hand
];

function pathMatches(pathname: string, prefixes: string[]): boolean {
  return prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.toLowerCase();

  if (
    pathMatches(pathname, BOT_PROBE_PATHS) ||
    SPAM_PATH_TERMS.some((term) => pathname.includes(term))
  ) {
    return new NextResponse(null, {
      status: 410,
      headers: {
        "x-robots-tag": "noindex, nofollow",
        "cache-control": "public, max-age=3600",
      },
    });
  }

  if (pathMatches(pathname, KILLED_BRAND_PATHS)) {
    const url = request.nextUrl.clone();
    url.pathname = "/gone";
    return NextResponse.rewrite(url, {
      status: 410,
      headers: {
        "x-robots-tag": "noindex, nofollow",
        "cache-control": "public, max-age=3600",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml).*)"],
};
