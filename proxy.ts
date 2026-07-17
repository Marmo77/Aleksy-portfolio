import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale, isLocale, LOCALE_COOKIE } from "@/lib/i18n";

function detectLocale(req: NextRequest): string {
  const cookie = req.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;

  const accept = req.headers.get("accept-language")?.toLowerCase() ?? "";
  const prefersPolish = accept
    .split(",")
    .some((part) => part.trim().startsWith("pl"));

  return prefersPolish ? "pl" : defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const res = NextResponse.redirect(url);
  res.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  // Skip Next internals, API routes, metadata files, and any path with a file
  // extension (logo.svg, sitemap.xml, robots.txt, manifest.webmanifest, images…).
  matcher: ["/((?!_next|api|opengraph-image|.*\\..*).*)"],
};
