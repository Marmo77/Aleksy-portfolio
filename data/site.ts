import type { Locale } from "@/lib/i18n";
import { siteEn, type SiteContent } from "./site.en";
import { sitePl } from "./site.pl";

export type { SiteContent };
export type Site = SiteContent;
export * from "./site.types";

/** Resolves the site content dictionary for a locale. */
export function getSite(locale: Locale): SiteContent {
  return locale === "pl" ? sitePl : siteEn;
}

/**
 * Language-neutral default (English), for server infra that only reads
 * locale-independent fields — sitemap slugs, OG name, GitHub handle, etc.
 */
export const site = siteEn;
