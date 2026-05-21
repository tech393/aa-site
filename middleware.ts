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

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.toLowerCase();

  if (
    pathname === "/boutique" ||
    pathname.startsWith("/boutique/") ||
    pathname === "/wp-admin" ||
    pathname.startsWith("/wp-admin/") ||
    pathname === "/wp-content" ||
    pathname.startsWith("/wp-content/") ||
    pathname === "/wp-includes" ||
    pathname.startsWith("/wp-includes/") ||
    pathname === "/wp-login.php" ||
    pathname === "/xmlrpc.php" ||
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

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml).*)"],
};
