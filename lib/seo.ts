import { site } from "@/data/site";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aleksydobrodziej.com"
).replace(/\/$/, "");

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
