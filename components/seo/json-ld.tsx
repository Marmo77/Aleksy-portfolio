import { getSite } from "@/data/site";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

/**
 * Person + WebSite structured data (schema.org / JSON-LD), localized.
 * Helps Google understand who the site is about and connect the profile to
 * its social accounts. Values are pulled from the locale's data dictionary.
 */
export function JsonLd({ locale }: { locale: Locale }) {
  const site = getSite(locale);
  const skills = Array.from(
    new Set(site.skills.cards.flatMap((card) => card.badges))
  );

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    url: SITE_URL,
    jobTitle: "Frontend & Fullstack Developer",
    description: site.hero.paragraph,
    email: `mailto:${site.contact.email}`,
    sameAs: SOCIAL_LINKS,
    knowsAbout: skills,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PL",
      addressRegion: "Szczecin",
    },
    knowsLanguage: ["pl", "en"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.fullName} — Developer Portfolio`,
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale,
    author: { "@type": "Person", name: site.fullName },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([person, website]) }}
    />
  );
}
