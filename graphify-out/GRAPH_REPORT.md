# Graph Report - .  (2026-07-18)

## Corpus Check
- Large corpus: 100 files · ~1,086,723 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 399 nodes · 813 edges · 22 communities (18 shown, 4 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 23 edges (avg confidence: 0.84)
- Token cost: 128,390 input · 0 output

## Community Hubs (Navigation)
- shadcn UI Components & Forms
- App Router Routes & SEO Metadata
- Homepage Section Components
- Runtime Dependencies
- TypeScript Config
- Build Tooling & Dev Deps
- shadcn/ui Config (components.json)
- Projects & Skills Components
- Contact/Icons & Site Data Types
- Architecture & Tech Stack (docs)
- Agency Section & Animations
- Portfolio Screens: Agency & Restaurant
- Portfolio Screens: Local Businesses
- Portfolio Screens: Insurance & Branding
- Theme Tokens (colors/fonts)
- Contact Form Validation
- ESLint Config
- Next.js Config
- PostCSS Config
- Reduced-Motion Preference

## God Nodes (most connected - your core abstractions)
1. `cn()` - 62 edges
2. `useSite()` - 38 edges
3. `Reveal()` - 16 edges
4. `compilerOptions` - 16 edges
5. `isLocale()` - 15 edges
6. `react` - 15 edges
7. `getSite()` - 14 edges
8. `Button()` - 13 edges
9. `useLocale()` - 12 edges
10. `ADobrodziej Developer Portfolio` - 10 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `getSite()`  [EXTRACTED]
  app/[locale]/(main)/projects/[slug]/page.tsx → data/site.ts
- `robots()` --calls--> `absoluteUrl()`  [EXTRACTED]
  app/robots.ts → lib/seo.ts
- `ContactRow()` --calls--> `cn()`  [EXTRACTED]
  components/contact/contact-row.tsx → lib/utils.ts
- `EvidenceCard()` --calls--> `cn()`  [EXTRACTED]
  components/evidence/evidence-card.tsx → lib/utils.ts
- `SiteContextValue` --references--> `Locale`  [EXTRACTED]
  components/i18n/site-provider.tsx → lib/i18n.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Data-driven project rendering pipeline** — readme_data_site_ts, readme_dynamic_project_route, readme_generatestaticparams [EXTRACTED 0.90]
- **Accessible contact form stack** — readme_mailto_fallback_form, readme_react_hook_form, readme_zod [EXTRACTED 0.90]
- **Core framework/UI tech stack** — readme_nextjs_app_router, readme_react_19, readme_typescript, readme_tailwind_css_v4, readme_shadcn_ui [EXTRACTED 0.85]
- **Full-Screen Hero With Dual CTA Buttons** — public_screenshots_addigital_ad_digital_site, public_screenshots_bistroburger_bistro_burger_site, concept_conversion_cta_dual_button [INFERRED 0.85]
- **Polish Local Business Portfolio Landing Pages** — public_screenshots_meblexszczecin_meblex_szczecin_site, public_screenshots_nordcar_nord_car_site, concept_local_service_business_landing_page [INFERRED 0.75]
- **Nova Ubezpieczenia Portfolio Asset Set** — public_gifs_novaubezpieczenia_nova_insurance_site_demo, public_screenshots_novaubezpieczenia_nova_insurance_website, public_screenshots_novaubezpieczenia_nova_insurance_screenshot_webp [INFERRED 0.85]

## Communities (22 total, 4 thin omitted)

### Community 0 - "shadcn UI Components & Forms"
Cohesion: 0.06
Nodes (49): ContactValues, ThemeToggle(), CodeWindow(), TOKEN_CLASS, Button(), buttonVariants, Card(), CardAction() (+41 more)

### Community 1 - "App Router Routes & SEO Metadata"
Cohesion: 0.08
Nodes (39): ApiResponse, generateMetadata(), inter, jetbrainsMono, LocaleLayout(), spaceGrotesk, generateMetadata(), generateMetadata() (+31 more)

### Community 2 - "Homepage Section Components"
Cohesion: 0.09
Nodes (34): NotFound(), AboutSection(), JourneyTimeline(), AgencySection(), ContactForm(), ContactSection(), EvidenceBentoGrid(), EvidenceCard() (+26 more)

### Community 3 - "Runtime Dependencies"
Cohesion: 0.06
Nodes (31): class-variance-authority, clsx, framer-motion, @hookform/resolvers, lucide-react, next, next-themes, dependencies (+23 more)

### Community 4 - "TypeScript Config"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 5 - "Build Tooling & Dev Deps"
Cohesion: 0.08
Nodes (25): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+17 more)

### Community 6 - "shadcn/ui Config (components.json)"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 7 - "Projects & Skills Components"
Cohesion: 0.25
Nodes (11): ProjectRow(), Reveal(), RevealProps, Surface, SkillCardBackend(), SkillCardExcel(), SkillCardFrontend(), SkillsSection() (+3 more)

### Community 8 - "Contact/Icons & Site Data Types"
Cohesion: 0.16
Nodes (14): ContactRow(), ICONS, GithubIcon(), LinkedinIcon(), AgencyService, CodeToken, ContactFormCopy, ContactRow (+6 more)

### Community 9 - "Architecture & Tech Stack (docs)"
Cohesion: 0.13
Nodes (18): Next.js Agent Rules (breaking changes), node_modules/next/dist/docs guide, CLAUDE.md project instructions, ADobrodziej Developer Portfolio, Aleksy Dobrodziej (author), data/site.ts single source of truth, data/theme.ts color tokens & fonts, /projects/[slug] dynamic route (+10 more)

### Community 10 - "Agency Section & Animations"
Cohesion: 0.17
Nodes (10): AgencyAuroraBackground(), FLOAT_DELAYS, REVEAL_DELAYS, AgencyServiceChip(), ICONS, AgencyStats(), CountUp(), CountUpProps (+2 more)

### Community 11 - "Portfolio Screens: Agency & Restaurant"
Cohesion: 0.32
Nodes (8): Dual Call-to-Action Hero Pattern, Web Agency Portfolio Hero Landing Pattern, AD Digital Site Animated Demo (GIF), Bistro Burger Site Animated Demo (GIF), AD Digital Web Agency Site, AD Digital Site Screenshot (WebP), Bistro Burger Restaurant Site, Bistro Burger Site Screenshot (WebP)

### Community 12 - "Portfolio Screens: Local Businesses"
Cohesion: 0.50
Nodes (5): Local Service Business Landing Page Pattern, Meblex Szczecin Site Demo (GIF), NordCar Site Demo (GIF), Meblex Szczecin - Custom Furniture Manufacturer Site, NordCar - Auto Service & Sales Site

### Community 13 - "Portfolio Screens: Insurance & Branding"
Cohesion: 0.50
Nodes (5): Nova Ubezpieczenia Insurance Site (Animated Demo), GitHub Contributions Social Preview (Marmo77), ADobrodziej Brand Logo (AD Mark), Nova Ubezpieczenia Screenshot (WebP), Nova Ubezpieczenia Insurance Website

### Community 14 - "Theme Tokens (colors/fonts)"
Cohesion: 0.50
Nodes (3): colors, fonts, radii

### Community 15 - "Contact Form Validation"
Cohesion: 1.00
Nodes (3): Accessible contact form with mailto fallback, React Hook Form, Zod validation

## Knowledge Gaps
- **118 isolated node(s):** `spaceGrotesk`, `inter`, `jetbrainsMono`, `ApiResponse`, `size` (+113 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Runtime Dependencies` to `Homepage Section Components`, `Build Tooling & Dev Deps`?**
  _High betweenness centrality (0.183) - this node is a cross-community bridge._
- **Why does `react` connect `Homepage Section Components` to `shadcn UI Components & Forms`, `Agency Section & Animations`, `Runtime Dependencies`?**
  _High betweenness centrality (0.180) - this node is a cross-community bridge._
- **Why does `cn()` connect `shadcn UI Components & Forms` to `App Router Routes & SEO Metadata`, `Homepage Section Components`, `Projects & Skills Components`, `Contact/Icons & Site Data Types`, `Agency Section & Animations`?**
  _High betweenness centrality (0.135) - this node is a cross-community bridge._
- **What connects `spaceGrotesk`, `inter`, `jetbrainsMono` to the rest of the system?**
  _118 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `shadcn UI Components & Forms` be split into smaller, more focused modules?**
  _Cohesion score 0.06169772256728778 - nodes in this community are weakly interconnected._
- **Should `App Router Routes & SEO Metadata` be split into smaller, more focused modules?**
  _Cohesion score 0.07948568088836938 - nodes in this community are weakly interconnected._
- **Should `Homepage Section Components` be split into smaller, more focused modules?**
  _Cohesion score 0.09098039215686274 - nodes in this community are weakly interconnected._