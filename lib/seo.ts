import { site } from "@/data/site";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aleksydobrodziej.com"
).replace(/\/$/, "");

/** Localized SEO title/description + OpenGraph locale, per language. */
export const SEO_META: Record<
  Locale,
  { title: string; description: string; ogLocale: string }
> = {
  en: {
    title: "Aleksy Dobrodziej — Junior Frontend & Fullstack Developer",
    description:
      "Aleksy Dobrodziej — a frontend-leaning developer from Poland building real, working software with React, Next.js and TypeScript. Open to internships and web development work.",
    ogLocale: "en_US",
  },
  pl: {
    title: "Aleksy Dobrodziej — Programista Frontend / Fullstack",
    description:
      "Aleksy Dobrodziej — programista z naciskiem na frontend. Tworzę prawdziwe, działające aplikacje w React, Next.js i TypeScript oraz strony internetowe dla firm. Otwarty na staże i współpracę.",
    ogLocale: "pl_PL",
  },
};

/**
 * hreflang map for a given sub-path (e.g. "" for home, "/projects/x").
 * Values are locale-prefixed paths resolved against metadataBase.
 */
export function hreflangAlternates(subpath = ""): Record<string, string> {
  return {
    "en-US": `/en${subpath}`,
    "pl-PL": `/pl${subpath}`,
    "x-default": `/en${subpath}`,
  };
}

/** Absolute URL helper for canonical / OG / sitemap entries. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Social / profile URLs **/
export const SOCIAL_LINKS = site.contact.rows
  .filter((row) => row.href?.startsWith("http"))
  .map((row) => row.href as string);

export const SITE_KEYWORDS: string[] = [
  // English
  "Aleksy Dobrodziej",
  "junior frontend developer",
  "junior fullstack developer",
  "React developer",
  "Next.js developer",
  "TypeScript developer",
  "frontend developer Poland",
  "frontend developer Szczecin",
  // Polish
  "tworzenie stron internetowych",
  "tworzenie stron internetowych Szczecin",
  "strony internetowe dla firm",
  "programista frontend",
  "web developer Szczecin",
  "AD.digital",
];
