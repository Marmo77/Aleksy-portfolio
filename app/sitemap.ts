import type { MetadataRoute } from "next";
import { getSite } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Home + project pages (privacy is noindex, so excluded). Slugs are shared
  // across locales; each URL lists its language alternates for hreflang.
  const subpaths = [
    "",
    ...getSite("en").projects.items.map((p) => `/projects/${p.slug}`),
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const subpath of subpaths) {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, absoluteUrl(`/${locale}${subpath}`)])
    );
    for (const locale of locales) {
      entries.push({
        url: absoluteUrl(`/${locale}${subpath}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: subpath === "" ? 1 : 0.8,
        alternates: { languages },
      });
    }
  }

  return entries;
}
