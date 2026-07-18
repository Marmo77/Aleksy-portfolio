export interface NavLink {
  label: string;
  href: string;
}

export interface JourneyItem {
  title: string;
  description: string;
  period?: string;
}

export interface CodeToken {
  type: "key" | "var" | "prop" | "str" | "plain";
  text: string;
}

export interface CodeWindowData {
  filename: string;
  lines: CodeToken[][];
}

export interface SkillCard {
  id: "frontend" | "backend" | "excel";
  title: string;
  description: string;
  badges: string[];
  highlightBadge?: string;
  stat?: { value: string; label: string };
  codeWindow?: CodeWindowData;
}

export interface EvidenceStat {
  id: string;
  value?: string;
  title?: string;
  description: string;
  span: 2 | 3;
  hero?: boolean;
}

export interface AgencyService {
  icon: "webdev" | "seo" | "maps" | "support";
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  /** When true, the value is replaced at runtime by the live GitHub total. */
  live?: boolean;
}

export interface DetailBadge {
  label: string;
  variant: "mint" | "amber";
}

export interface Project {
  slug: string;
  name: string;
  tag: "LIVE" | "IN DEVELOPMENT";
  featured?: boolean;
  monogram: string;
  thumbnail?: string;
  gif?: string;
  homeBadges: string[];
  summary: string;
  overview: string[];
  keyFeatures: { title: string; description: string }[];
  whatsNext?: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl: string;
  detailTagline: string;
  detailBadges: DetailBadge[];
  detailOverviewHeading: string;
}

export interface ContactRow {
  icon: "mail" | "github" | "location" | "open-to" | "linkedin";
  label: string;
  value: string;
  href?: string;
}

export interface ContactFormCopy {
  intro: string;
  messagePlaceholder: string;
  consentLabel: string;
  privacyUrl: string;
  submitLabel: string;
  successNote: string;
}
