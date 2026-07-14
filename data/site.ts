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
  icon: "mail" | "github" | "location" | "open-to";
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

export const site = {
  companyName: "Alex.",
  fullName: "Alex Goodman",
  role: "Frontend-leaning developer",
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Agency", href: "#agency" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ] as NavLink[],

  hero: {
    eyebrow:
      "Developer, Poland · starting university (IT) in October · open to internships",
    headline: ["Frontend-leaning developer,", "shipping full products."],
    paragraph:
      "I design and build real, working software — from marketing sites to a database-backed admin dashboard with authentication. Self-taught, measuring progress in commits and shipped features rather than job titles, and starting university this October to study IT.",
    stats: [
      { value: "1,141", label: "contributions / yr" },
      { value: "4", label: "shipped projects" },
      { value: "🇵🇱", label: "Team Poland · MOS 2026" },
    ] as StatItem[],
    githubHandle: "Marmo77",
    contributionsLastYear: 1141,
    marqueeItems: [
      "React",
      "Next.js",
      "Vercel",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Bits",
      "ESLint",
      "Supabase",
      "OAuth",
      "Vite",
      "Git",
      "Python",
      "GitHub",
    ],
  },

  about: {
    sectionLabel: "01 — About",
    heading: "Proof of work, not a résumé.",
    paragraphs: [
      "I'm Alex — a developer from Poland just finished technical secondary school with a programming specialization, where I passed both national IT certification exams (INF.03, INF.04) alongside my Matura finals.",
      "Outside of school, I taught myself React, TypeScript and Python by building things people could actually use: an agency website, live sites for local businesses, and — my most involved build so far — a car-service admin dashboard with authentication and a full relational database behind it.",
      "I'm starting university this October to study IT, and I'm looking for an internship or collaboration to run alongside it — anything that lets me keep building real things while I study.",
    ],
    journeyLabel: "Journey so far",
    journey: [
      {
        title: "Self-taught foundations",
        description:
          "Started building websites independently — HTML/CSS, then React, then Python's object-oriented side to round out the backend logic.",
      },
      {
        title: "Technical secondary school — Programming",
        period: "2021 – 2026",
        description:
          "Passed INF.03 and INF.04 certification exams (programmer technician), plus strong Matura results (Math 92%, English 97%).",
      },
      {
        title: "IT internship — Rimini, Italy",
        description:
          "One-month international placement under the Europass mobility program, working in an IT environment abroad.",
      },
      {
        title: "Team Poland — MOS 2026",
        description:
          "Selected to represent Poland at the Microsoft Office Specialist World Championship (held in the US), Excel category — backed by multiple Excel Expert certification passes.",
      },
      {
        title: "Starting university — IT",
        period: "October 2026",
        description:
          "Beginning IT studies at university while looking for an internship or collaboration to keep building real projects alongside coursework.",
      },
    ] as JourneyItem[],
  },

  skills: {
    sectionLabel: "02 — Stack",
    heading: "What I actually build with.",
    subheading:
      "No padded list — this is the exact stack behind every project on this page.",
    cards: [
      {
        id: "frontend",
        title: "Frontend",
        description:
          "Where I spend most of my time — interfaces that feel considered, not default. Every project on this page ships with this exact combination.",
        badges: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "React Bits",
        ],
        codeWindow: {
          filename: "stack.ts",
          lines: [
            [
              { type: "key", text: "const" },
              { type: "var", text: " stack" },
              { type: "plain", text: " = {" },
            ],
            [
              { type: "prop", text: "  ui" },
              { type: "plain", text: ": [" },
              { type: "str", text: '"React"' },
              { type: "plain", text: ", " },
              { type: "str", text: '"TypeScript"' },
              { type: "plain", text: "]," },
            ],
            [
              { type: "prop", text: "  styling" },
              { type: "plain", text: ": [" },
              { type: "str", text: '"Tailwind CSS"' },
              { type: "plain", text: "]," },
            ],
            [
              { type: "prop", text: "  components" },
              { type: "plain", text: ": [" },
              { type: "str", text: '"shadcn/ui"' },
              { type: "plain", text: ", " },
              { type: "str", text: '"React Bits"' },
              { type: "plain", text: "]," },
            ],
            [{ type: "plain", text: "};" }],
          ],
        },
      },
      {
        id: "backend",
        title: "Backend / BaaS",
        description:
          "Supabase for auth, database and storage — used for real in the Car Service Dashboard.",
        badges: ["Supabase", "PostgreSQL", "OAuth", "Python (OOP)"],
      },
      {
        id: "excel",
        title: "Excel & Productivity",
        description:
          "The certified skill behind Team Poland's MOS 2026 selection — also comfortable in Photoshop and Figma for client work.",
        badges: ["Excel Expert", "Adobe Photoshop", "Figma"],
        highlightBadge: "Excel Expert",
        stat: { value: "5×", label: "Microsoft Excel Expert exams passed" },
      },
    ] as SkillCard[],
  },

  evidence: {
    sectionLabel: "03 — Evidence",
    heading: "Numbers, not adjectives.",
    githubHandle: "github.com/Marmo77",
    stats: [
      {
        id: "contributions",
        value: "1,141",
        description:
          "GitHub contributions in the past year — consistent, not a one-time push.",
        span: 3,
        hero: true,
      },
      {
        id: "math",
        value: "92%",
        description: "Matura exam score — Mathematics",
        span: 3,
      },
      {
        id: "english",
        value: "97%",
        description: "Matura exam score — English (written)",
        span: 3,
      },
      {
        id: "excel-count",
        value: "5×",
        description: "Microsoft Excel Expert certification passes",
        span: 2,
      },
      {
        id: "team-poland",
        title: "Team Poland",
        description: "Selected for MOS 2026 World Championship, Excel category",
        span: 2,
      },
      {
        id: "adobe",
        title: "Adobe Certified",
        description: "Visual Design using Adobe Photoshop",
        span: 2,
      },
      {
        id: "europass",
        title: "Europass",
        description: "One-month IT internship — Rimini, Italy",
        span: 2,
      },
      {
        id: "inf",
        title: "INF.03 / INF.04",
        description: "National programming certification exams — passed",
        span: 2,
      },
      {
        id: "languages",
        title: "Languages",
        description: "Polish (native) · English (fluent, C1)",
        span: 2,
      },
    ] as EvidenceStat[],
  },

  agency: {
    sectionLabel: "04 — Beyond the code",
    heading: "I run a small web agency — AD.digital.",
    paragraph:
      "Alongside university and my own projects, I design and build complete web presences for local businesses around Szczecin - restaurants, insurance agencies, car services, furniture makers. I handle the whole process myself, end to end.",
    ctaLabel: "Visit AD.digital",
    ctaUrl: "https://addigital.vercel.app/",
    services: [
      {
        icon: "webdev",
        title: "Web Design & Development",
        description:
          "Full builds from design to deploy, on Next.js and Tailwind.",
      },
      {
        icon: "seo",
        title: "SEO & Local Search",
        description:
          "Semantic structure and on-page SEO tuned for local search terms.",
      },
      {
        icon: "maps",
        title: "Google Maps & Business Profile",
        description:
          "Setting up and optimizing Google Business listings so clients show up where people are actually looking.",
      },
      {
        icon: "support",
        title: "Ongoing Support",
        description:
          "Clients can reach me directly for edits and updates — no ticket system.",
      },
    ] as AgencyService[],
    stats: [
      { value: "5+", label: "client builds shipped" },
      { value: "5", label: "towns covered" },
      { value: "100%", label: "handled solo, end to end" },
    ] as StatItem[],
  },

  projects: {
    sectionLabel: "05 — Projects",
    heading: "Selected work.",
    subheading:
      "Four real builds, from a marketing site to a full authenticated admin dashboard. Each one links to a detail page and the source.",
    viewAllLabel: "View all repositories on GitHub",
    viewAllUrl: "https://github.com/Marmo77",
    items: [
      {
        slug: "car-service-dashboard",
        name: "Car Service Dashboard",
        tag: "IN DEVELOPMENT",
        featured: true,
        monogram: "CSD",
        homeBadges: ["Supabase", "PostgreSQL", "OAuth", "Next.js"],
        summary:
          "A fully hand-coded SaaS-style admin dashboard for a car service business — vehicle and booking CRUD, role-based OAuth login, and relational data modeling on Supabase Postgres. My deepest dive into auth, database logic, and access control so far.",
        overview: [
          "Everything I'd built before this was frontend-heavy: a landing page, a business site, a menu. This dashboard was the first time I had to design an actual data model — vehicles, services, bookings, and staff accounts — and make sure the UI, the database, and the auth layer all agreed with each other.",
          "It's a SaaS-style CRUD dashboard for a car service business: staff can log in, add and update vehicles, manage service records, and see everything in one admin view. It's still in active development, which I've left visible on purpose — it's a more honest picture of ongoing work than a project I only show once it's finished.",
        ],
        keyFeatures: [
          {
            title: "Role-based OAuth authentication",
            description:
              "staff and admin accounts see different views and permissions.",
          },
          {
            title: "Full CRUD for vehicles and bookings",
            description:
              "backed by a relational Supabase Postgres schema, not just local state.",
          },
          {
            title: "Relational data modeling",
            description:
              "services, vehicles and bookings reference each other correctly, with constraints that keep data consistent.",
          },
          {
            title: "Admin UI built with shadcn/ui",
            description:
              "tables, dialogs and forms composed from accessible, unstyled primitives rather than a page-builder kit.",
          },
          {
            title: "Validation on every mutation",
            description:
              "every create/update path checks its inputs before it touches the database.",
          },
        ],
        whatsNext:
          "I'm still finishing booking-conflict handling and reporting views. Once the feature set is stable, this is also the project I plan to containerize first — it's my reason for learning Docker rather than the other way around.",
        techStack: [
          "Next.js",
          "TypeScript",
          "Supabase",
          "PostgreSQL",
          "OAuth",
          "shadcn/ui",
          "Tailwind CSS",
        ],
        repoUrl: "https://github.com/Marmo77/car_service_dashboard",
        detailTagline:
          "A hand-coded SaaS-style admin dashboard for a car service business — full vehicle and booking CRUD, role-based authentication, and a relational Postgres schema behind every screen. This is the project with the most hours, the most commits, and the most hard problems I've had to work through.",
        detailBadges: [
          { label: "In active development", variant: "amber" },
          { label: "Most complex build so far", variant: "mint" },
        ],
        detailOverviewHeading: "Why this project matters most",
      },
      {
        slug: "ad-digital",
        name: "AD.digital",
        tag: "LIVE",
        monogram: "AD",
        thumbnail: "/screenshots/addigital.webp",
        gif: "/gifs/addigital.gif",
        homeBadges: ["Vite", "Tailwind CSS", "Framer Motion"],
        summary:
          "The marketing site for my own small web agency — built for speed and conversion, with a portfolio grid, animated hero, and a quote-request flow for local businesses.",
        overview: [
          "I run a small web agency on the side, building sites for local businesses around Goleniów, Szczecin, Stargard and Nowogard. This is its own storefront — it has to load fast, read clearly on a phone, and turn a visit into a message within a few seconds of arriving.",
          'It doubles as a portfolio in its own right: the "Realizations" section links out to real client sites, including the restaurant and car-service builds also shown on this page.',
        ],
        keyFeatures: [
          {
            title: "~1.2s load, 95+ Lighthouse",
            description:
              "aggressive image optimization and a lean bundle keep the first paint fast on mobile networks.",
          },
          {
            title: "Quote-request flow that converts",
            description:
              "a low-friction path from any section to a filled-out brief — the site's single most important job.",
          },
          {
            title: "Animated hero and gradient system",
            description:
              "built with Framer Motion for smooth, GPU-friendly transitions.",
          },
          {
            title: 'Portfolio / "Realizations" grid',
            description:
              "showcases real client projects, linking straight out to the live sites.",
          },
          {
            title: "SEO-conscious structure",
            description:
              "semantic HTML and metadata aimed at ranking for local search terms across four towns.",
          },
          {
            title: "Dark / light theme toggle",
            description:
              "persisted across the session, matching client-facing polish expectations.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://addigital.vercel.app/",
        repoUrl: "https://github.com/Marmo77/AD-digital-website",
        detailTagline:
          "The marketing site for my own small web agency — designed and built to convert local business owners into clients, not just to look good.",
        detailBadges: [{ label: "Live", variant: "mint" }],
        detailOverviewHeading: "A site that has to sell, not just exist",
      },
      {
        slug: "bistro-burger",
        name: "Bistro Burger",
        tag: "LIVE",
        monogram: "BB",
        thumbnail: "/screenshots/bistroburger.webp",
        gif: "/gifs/bistroburger.gif",
        homeBadges: ["Vite", "Reservation UI", "Responsive Design"],
        summary:
          "A live site for a burger gastropub in Szczecin — menu presentation and a table-reservation flow, designed to feel local, appetizing, and easy to book from.",
        overview: [
          "A gastropub in Szczecin with craft beer and signature burgers needed a site that felt as warm and specific as the food itself, rather than a generic restaurant template. The brief was simple: make someone hungry, then make booking a table effortless.",
          "The build leans heavily on large photography, a confident type scale for the menu, and a reservation flow that never makes the visitor hunt for a way to book a table.",
        ],
        keyFeatures: [
          {
            title: "Reservation-first layout",
            description:
              "a persistent booking CTA on every section — the shortest possible path from hungry to booked.",
          },
          {
            title: "Appetite-driven menu presentation",
            description:
              "categorized, image-led menu sections built for quick scanning on a phone at the table.",
          },
          {
            title: "Imagery-heavy responsive design",
            description:
              "carefully cropped hero and section photography that holds up from phone to desktop.",
          },
          {
            title: "Fast on restaurant Wi-Fi",
            description:
              "optimized images and a light bundle keep it snappy even on a weak mobile signal.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS"],
        liveUrl: "https://www.burgerszczecin.pl/",
        repoUrl: "https://github.com/Marmo77/Restaurant-Mockup-Portfolio",
        detailTagline:
          "A live site for a burger gastropub in Szczecin — built around one job: make someone hungry enough to book a table in under a minute.",
        detailBadges: [{ label: "Live", variant: "mint" }],
        detailOverviewHeading: "Designing for appetite, not just layout",
      },
      {
        slug: "nordcar-service",
        name: "NordCar Serwis",
        tag: "LIVE",
        monogram: "NC",
        thumbnail: "/screenshots/nordcar.webp",
        gif: "/gifs/nordcar.gif",
        homeBadges: ["Vite", "Tailwind CSS", "Business Site"],
        summary:
          "A live business site for a car service company — service listings, booking CTAs, and a clean, trust-building layout for a local audience.",
        overview: [
          "Car service customers want two things fast: proof the shop is competent, and a way to book without calling. This site is built around a clear services list, direct booking CTAs, and a layout that reads as established rather than improvised — a companion piece to the Car Service Dashboard's admin side.",
        ],
        keyFeatures: [
          {
            title: "Book without calling",
            description:
              'repeated "Umów wizytę" CTAs at natural decision points down the page, not just in the header.',
          },
          {
            title: "Transparent service listings",
            description:
              "clear pricing and scope for each service, so a visitor knows what to expect before they book.",
          },
          {
            title: "Trust-building layout",
            description:
              "clean grid, consistent spacing, opening hours and contact up top — a tone closer to a corporate service page than a template.",
          },
          {
            title: "Fully responsive",
            description:
              "reads clearly from a phone in the parking lot to a desktop at home, with the booking CTA always in reach.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS"],
        liveUrl: "https://nordcar-serwis.vercel.app/",
        repoUrl: "https://github.com/Marmo77/Carservice-mockup-website",
        detailTagline:
          "A live business site for a car service company — built to make a mechanic's shop feel as trustworthy online as it is in person.",
        detailBadges: [{ label: "Live", variant: "mint" }],
        detailOverviewHeading: "Trust, built through layout",
      },
    ] as Project[],
  },

  contact: {
    sectionLabel: "06 — Contact",
    heading: "Let's build something together.",
    subheading:
      "Open to internships, part-time roles, and any collaboration that lets me keep building real things. I'll get back to you within a day.",
    email: "hello@alexgoodman.dev",
    form: {
      intro:
        "Got a project, an internship, or just want to say hi? I'd love to hear from you.",
      messagePlaceholder:
        "Tell me a bit about the project, role, or opportunity you have in mind...",
      consentLabel:
        "I agree to let my details be used to reply to this message —",
      privacyUrl: "/privacy",
      submitLabel: "Send it my way",
      successNote:
        "Your email app should pop up in a second — just hit send there too.",
    } as ContactFormCopy,
    rows: [
      {
        icon: "mail",
        label: "Email",
        value: "hello@alexgoodman.dev",
        href: "mailto:hello@alexgoodman.dev",
      },
      {
        icon: "github",
        label: "GitHub",
        value: "github.com/Marmo77",
        href: "https://github.com/Marmo77",
      },
      { icon: "location", label: "Based in", value: "Poland" },
      {
        icon: "open-to",
        label: "Open to",
        value: "Internships & collaboration",
      },
    ] as ContactRow[],
  },

  footer: {
    copyright: "© 2026 Alex Goodman.",
    builtWith: "Built with React · TypeScript · Tailwind CSS · shadcn/ui",
  },
};

export type Site = typeof site;
