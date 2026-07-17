export const locales = ["pl", "en"] as const;
export type Locale = (typeof locales)[number];

/** Fallback when the browser language isn't Polish and no cookie is set. */
export const defaultLocale: Locale = "en";

export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Short label shown in the language switch. */
export const localeLabels: Record<Locale, string> = { pl: "PL", en: "EN" };

/** BCP-47 tag for <html lang> and hreflang. */
export const localeHtmlLang: Record<Locale, string> = {
  pl: "pl-PL",
  en: "en-US",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Returns the locale segment of a path, or null if there isn't one. */
export function getPathLocale(pathname: string): Locale | null {
  const seg = pathname.split("/")[1];
  return isLocale(seg) ? (seg as Locale) : null;
}

/** Removes the leading locale segment, returning the remaining path ("/" if none). */
export function stripLocale(pathname: string): string {
  const loc = getPathLocale(pathname);
  if (!loc) return pathname || "/";
  const rest = pathname.slice(loc.length + 1);
  return rest || "/";
}

/** Rebuilds a path under a different locale, preserving the rest of the path. */
export function swapLocaleInPath(pathname: string, locale: Locale): string {
  const rest = stripLocale(pathname);
  return rest === "/" ? `/${locale}` : `/${locale}${rest}`;
}
