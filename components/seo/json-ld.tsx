import { site } from "@/data/site";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/seo";

export function JsonLd() {
  const skills = Array.from(
    new Set(site.skills.cards.flatMap((card) => card.badges)),
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
    url: SITE_URL,
    inLanguage: "en",
    author: { "@type": "Person", name: site.fullName },
  };

  return (
    <script
      type="application/ld+json"
      // schema.org JSON-LD must be embedded as raw JSON
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([person, website]),
      }}
    />
  );
}
