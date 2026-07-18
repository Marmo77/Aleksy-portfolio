import type {
  NavLink,
  JourneyItem,
  SkillCard,
  EvidenceStat,
  AgencyService,
  StatItem,
  Project,
  ContactRow,
  ContactFormCopy,
} from "./site.types";

export const siteEn = {
  companyName: "ADobrodziej.",
  fullName: "Aleksy Dobrodziej",
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
      "I design and build real, working software - from marketing sites to a database-backed admin dashboard with authentication. Self-taught, measuring progress in commits and shipped features rather than job titles, and starting university this October to study IT.",
    stats: [
      { value: "1,141", label: "contributions / yr", live: true },
      { value: "6", label: "shipped projects" },
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
    sectionLabel: "01 - About",
    heading: "Proof of work, not a résumé.",
    paragraphs: [
      "I'm Aleksy - a developer from Poland (19yo) just finished technical secondary school with a programming specialization, where I passed both national IT certification exams (INF.03, INF.04) alongside my Matura finals.",
      "Outside of school, I taught myself React, TypeScript and Python by building things people could actually use: an agency website, a restaurant ordering mockup, and - my most involved build so far - a car-service admin dashboard with authentication and a full relational database behind it.",
      "I'm starting university this October to study IT, and I'm looking for an internship or collaboration to run alongside it - anything that lets me keep building real things while I study.",
    ],
    journeyLabel: "Journey so far",
    journey: [
      {
        title: "Self-taught foundations",
        description:
          "Started building websites independently - HTML/CSS, then React, then Python's object-oriented side to round out the backend logic.",
      },
      {
        title: "Technical secondary school - Programming",
        period: "2021 – 2026",
        description:
          "Passed INF.03 and INF.04 certification exams (programmer technician), plus strong Matura results (Math 92%, English 97%).",
      },
      {
        title: "IT internship - Rimini, Italy",
        description:
          "One-month international placement under the Europass mobility program, working in an IT environment abroad.",
      },
      {
        title: "Team Poland - MOS 2026",
        description:
          "Selected to represent Poland at the Microsoft Office Specialist World Championship (held in the US), Excel category - backed by multiple Excel Expert certification passes.",
      },
      {
        title: "Starting university - IT",
        period: "October 2026",
        description:
          "Beginning IT studies at university while looking for an internship or collaboration to keep building real projects alongside coursework.",
      },
    ] as JourneyItem[],
  },

  skills: {
    sectionLabel: "02 - Stack",
    heading: "What I actually build with.",
    subheading:
      "No padded list - this is the exact stack behind every project on this page.",
    cards: [
      {
        id: "frontend",
        title: "Frontend",
        description:
          "Where I spend most of my time - interfaces that feel considered, not default. Every project on this page ships with this exact combination.",
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
          "Supabase for auth, database and storage - used for real in the Car Service Dashboard.",
        badges: ["Supabase", "PostgreSQL", "OAuth", "Python (OOP)"],
      },
      {
        id: "excel",
        title: "Excel & Productivity",
        description:
          "The certified skill behind Team Poland's MOS 2026 selection - also comfortable in Photoshop and Figma for client work.",
        badges: ["Excel Expert", "Adobe Photoshop", "Figma"],
        highlightBadge: "Excel Expert",
        stat: { value: "5×", label: "Microsoft Excel Expert exams passed" },
      },
    ] as SkillCard[],
  },

  evidence: {
    sectionLabel: "03 - Evidence",
    heading: "Numbers, not adjectives.",
    githubHandle: "github.com/Marmo77",
    stats: [
      {
        id: "contributions",
        value: "1,141",
        description:
          "GitHub contributions in the past year - consistent, not a one-time push.",
        span: 3,
        hero: true,
      },
      {
        id: "math",
        value: "92%",
        description: "Matura exam score - Mathematics",
        span: 3,
      },
      {
        id: "english",
        value: "97%",
        description: "Matura exam score - English (written)",
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
        description: "One-month IT internship - Rimini, Italy",
        span: 2,
      },
      {
        id: "inf",
        title: "INF.03 / INF.04",
        description: "National programming certification exams - passed",
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
    sectionLabel: "04 - Beyond the code",
    heading: "I run a small web agency - ADdigital.",
    paragraph:
      "Alongside university and my own projects, I design and build complete web presences for local businesses around Szczecin - restaurants, insurance agencies, car services, furniture makers. I handle the whole process myself, end to end.",
    ctaLabel: "Visit ADdigital",
    ctaUrl: "https://addigital.pl",
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
          "Clients can reach me directly for edits and updates - no ticket system.",
      },
    ] as AgencyService[],
    stats: [
      { value: "5+", label: "client builds shipped" },
      { value: "5", label: "towns covered" },
      { value: "100%", label: "handled solo, end to end" },
    ] as StatItem[],
  },

  projects: {
    sectionLabel: "05 - Projects",
    heading: "Selected work.",
    subheading:
      "Six real builds, from marketing sites to a full authenticated admin dashboard. Each one links to a detail page and the source.",
    viewAllLabel: "View all repositories on GitHub",
    viewAllUrl: "https://github.com/Marmo77",
    featuredLabel: "FEATURED · MOST COMPLEX BUILD",
    tagLabels: { LIVE: "LIVE", "IN DEVELOPMENT": "IN DEVELOPMENT" },
    items: [
      {
        slug: "car-service-dashboard",
        name: "Car Service Dashboard",
        tag: "IN DEVELOPMENT",
        featured: true,
        monogram: "CSD",
        homeBadges: ["Supabase", "PostgreSQL", "OAuth", "Next.js"],
        summary:
          "A fully hand-coded SaaS-style admin dashboard for a car service business - vehicle and booking CRUD, role-based OAuth login, and relational data modeling on Supabase Postgres. My deepest dive into auth, database logic, and access control so far.",
        overview: [
          "Everything I'd built before this was frontend-heavy: a landing page, a mockup, a menu. This dashboard was the first time I had to design an actual data model - vehicles, services, bookings, and staff accounts - and make sure the UI, the database, and the auth layer all agreed with each other.",
          "It's a SaaS-style CRUD dashboard for a car service business: staff can log in, add and update vehicles, manage service records, and see everything in one admin view. It's still in active development, which I've left visible on purpose - it's a more honest picture of ongoing work than a project I only show once it's finished.",
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
          "I'm still finishing booking-conflict handling and reporting views. Once the feature set is stable, this is also the project I plan to containerize first - it's my reason for learning Docker rather than the other way around.",
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
          "A hand-coded SaaS-style admin dashboard for a car service business - full vehicle and booking CRUD, role-based authentication, and a relational Postgres schema behind every screen. This is the project with the most hours, the most commits, and the most hard problems I've had to work through.",
        detailBadges: [
          { label: "In active development", variant: "amber" },
          { label: "Most complex build so far", variant: "mint" },
        ],
        detailOverviewHeading: "Why this project matters most",
      },
      {
        slug: "ad-digital",
        name: "ADdigital",
        tag: "LIVE",
        monogram: "AD",
        thumbnail: "/screenshots/addigital.webp",
        gif: "/gifs/addigital.gif",
        homeBadges: ["Vite", "Tailwind CSS", "Framer Motion"],
        summary:
          "The marketing site for my own small web agency - built for speed and conversion, with a portfolio grid, animated hero, and a quote-request flow for local businesses.",
        overview: [
          "I run a small web agency on the side, building sites for local businesses around Goleniów, Szczecin, Stargard and Nowogard. This is its own storefront - it has to load fast, read clearly on a phone, and turn a visit into a message within a few seconds of arriving.",
          'It doubles as a portfolio in its own right: the "Realizations" section links out to real client sites, including the restaurant and car-service site also shown on this page.',
        ],
        keyFeatures: [
          {
            title: "Animated hero and gradient system",
            description:
              "built with Framer Motion for smooth, GPU-friendly transitions.",
          },
          {
            title: 'Portfolio / "Realizations" grid',
            description:
              "showcases real client projects with results (e.g. reservation and lead-gen uplift).",
          },
          {
            title: "Dark / light theme toggle",
            description:
              "persisted across the session, matching client-facing polish expectations.",
          },
          {
            title: "SEO-conscious structure",
            description:
              "semantic HTML and metadata aimed at ranking for local search terms.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://addigital.pl",
        repoUrl: "https://github.com/Marmo77/AD-digital-website",
        detailTagline:
          "The marketing site for my own small web agency - designed and built to convert local business owners into clients, not just to look good.",
        detailBadges: [{ label: "Live", variant: "mint" }],
        detailOverviewHeading: "A site that has to sell, not just exist",
      },
      {
        slug: "burgerszczecin",
        name: "Burger Restaurant",
        tag: "LIVE",
        monogram: "RM",
        thumbnail: "/screenshots/bistroburger.webp",
        gif: "/gifs/bistroburger.gif",
        homeBadges: ["Vite", "Reservation UI", "Responsive Design"],
        summary:
          "A burger gastropub concept site - menu presentation and a table-reservation flow, designed to feel local, appetizing, and easy to book from.",
        overview: [
          "This was a mockup client brief: a gastropub with craft beer and signature burgers, needing a site that felt as warm and specific as the food itself rather than a generic restaurant template.",
          "The build leans heavily on large photography, a confident type scale for the menu, and a reservation flow that never makes the visitor hunt for a way to book a table.",
        ],
        keyFeatures: [
          {
            title: "Menu presentation",
            description:
              "categorized, image-led menu sections built for quick scanning on mobile.",
          },
          {
            title: "Table reservation CTA",
            description:
              "a persistent, low-friction path from any section straight to booking.",
          },
          {
            title: "Imagery-heavy responsive layout",
            description:
              "carefully cropped hero and section images that hold up from phone to desktop.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS"],
        liveUrl: "https://www.burgerszczecin.pl/",
        repoUrl: "https://github.com/Marmo77/Restaurant-burger-website",
        detailTagline:
          "A concept site for a burger gastropub - built around one job: make someone hungry enough to book a table in under a minute.",
        detailBadges: [{ label: "Live", variant: "mint" }],
        detailOverviewHeading: "Designing for appetite, not just layout",
      },
      {
        slug: "nordcar-service",
        name: "NordCar Service",
        tag: "LIVE",
        monogram: "NC",
        thumbnail: "/screenshots/nordcar.webp",
        gif: "/gifs/nordcar.gif",
        homeBadges: ["Vite", "Tailwind CSS", "Business Site"],
        summary:
          "A business site mockup for a car service company - service listings, booking CTAs, and a clean, trust-building layout for a local audience.",
        overview: [
          "Car service customers want two things fast: proof the shop is competent, and a way to book without calling. This mockup is built around a clear services list, direct booking CTAs, and a layout that reads as established rather than improvised - a companion piece to the Car Service Dashboard's admin side.",
        ],
        keyFeatures: [
          {
            title: "Service listings",
            description:
              "clear pricing and scope for each service, no hidden details.",
          },
          {
            title: "Booking CTAs",
            description:
              "repeated at natural decision points down the page rather than only in the header.",
          },
          {
            title: "Trust-building layout",
            description:
              "clean grid, consistent spacing, and a tone closer to a corporate service page than a template.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS"],
        liveUrl: "https://nord-car.pl",
        repoUrl: "https://github.com/Marmo77/Carservice-website",
        detailTagline:
          "A business site mockup for a car service company - built to make a mechanic's shop feel as trustworthy online as it is in person.",
        detailBadges: [{ label: "Live", variant: "mint" }],
        detailOverviewHeading: "Trust, built through layout",
      },
      {
        slug: "meblex",
        name: "Meblex",
        tag: "LIVE",
        monogram: "MX",
        thumbnail: "/screenshots/meblexszczecin.webp",
        gif: "/gifs/meblexszczecin.gif",
        homeBadges: ["Vite", "Tailwind CSS", "Portfolio Gallery"],
        summary:
          "A website for a custom furniture maker in Szczecin - a visual portfolio of bespoke fit-outs with a clear path to a made-to-measure quote.",
        overview: [
          "Meblex builds bespoke furniture - kitchens, wardrobes, commercial fit-outs - where the work sells itself once you can see it. The site's job is to put that craftsmanship front and centre and make requesting a custom quote effortless.",
          "It leans on a large, image-led gallery of finished projects, a clear breakdown of what they make, and a contact path tuned for one thing: turning a browse into an enquiry.",
        ],
        keyFeatures: [
          {
            title: "Project gallery",
            description:
              "an image-led showcase of finished custom builds - the strongest sales tool a furniture maker has.",
          },
          {
            title: "Made-to-measure quote path",
            description:
              "a low-friction route from any section to a custom-order enquiry.",
          },
          {
            title: "Category breakdown",
            description:
              "clear sections for kitchens, wardrobes and commercial work so visitors self-identify fast.",
          },
          {
            title: "Responsive, image-heavy layout",
            description:
              "high-resolution photography that stays crisp and fast from phone to desktop.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS"],
        liveUrl: "https://www.meblex-szczecin.pl/",
        repoUrl: "https://github.com/Marmo77/CustomFurnitures-website",
        detailTagline:
          "A website for a custom furniture maker in Szczecin - built to let the craftsmanship sell itself and make requesting a made-to-measure quote effortless.",
        detailBadges: [{ label: "Live", variant: "mint" }],
        detailOverviewHeading: "Letting the work sell itself",
      },
      {
        slug: "nova-ubezpieczenia",
        name: "Nova Insurance",
        tag: "LIVE",
        monogram: "NU",
        thumbnail: "/screenshots/novaubezpieczenia.webp",
        gif: "/gifs/novaubezpieczenia.gif",
        homeBadges: ["Vite", "Tailwind CSS", "Lead Capture"],
        summary:
          "A website for an insurance agency - a clear presentation of coverage types and a trust-first layout that turns visitors into quote requests.",
        overview: [
          "Insurance is a trust purchase: people want to know they're dealing with someone credible before they hand over their details. Nova Ubezpieczenia needed a site that reads as established and reassuring, then makes asking for a quote simple.",
          "The build organizes coverage into clear categories, keeps a contact and quote CTA within reach at every scroll depth, and keeps the tone professional and calm rather than salesy.",
        ],
        keyFeatures: [
          {
            title: "Coverage categories",
            description:
              "insurance types laid out clearly so a visitor finds what applies to them in seconds.",
          },
          {
            title: "Quote-request CTA",
            description:
              "a persistent, low-friction path to a contact and quote form from anywhere on the page.",
          },
          {
            title: "Trust-first layout",
            description:
              "clean structure, calm tone and clear contact details - the credibility signals an insurance client looks for.",
          },
          {
            title: "Fully responsive",
            description:
              "reads clearly on a phone or desktop, with the quote CTA always in reach.",
          },
        ],
        techStack: ["Vite", "Tailwind CSS"],
        liveUrl: "https://www.nova-ubezpieczenia.pl/",
        repoUrl: "https://github.com/Marmo77/Insurance-company-website",
        detailTagline:
          "A website for an insurance agency - built to read as credible and reassuring, then make requesting a quote simple.",
        detailBadges: [{ label: "Live", variant: "mint" }],
        detailOverviewHeading: "Trust first, quote second",
      },
    ] as Project[],
  },

  contact: {
    sectionLabel: "06 - Contact",
    heading: "Let's build something together.",
    subheading:
      "Open to internships, part-time roles, and any collaboration that lets me keep building real things. I'll get back to you within a day.",
    email: "aleksydobrodziej@gmail.com",
    form: {
      intro:
        "Got a project, an internship, or just want to say hi? I'd love to hear from you.",
      messagePlaceholder:
        "Tell me a bit about the project, role, or opportunity you have in mind...",
      consentLabel:
        "I agree to let my details be used to reply to this message -",
      privacyUrl: "/privacy",
      submitLabel: "Send it my way",
      successNote:
        "Your email app should pop up in a second - just hit send there too.",
    } as ContactFormCopy,
    rows: [
      {
        icon: "mail",
        label: "Email",
        value: "aleksydobrodziej@gmail.com",
        href: "mailto:aleksydobrodziej@gmail.com",
      },
      {
        icon: "github",
        label: "GitHub",
        value: "github.com/Marmo77",
        href: "https://github.com/Marmo77",
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        value: "aleksydobrodziej",
        href: "https://www.linkedin.com/in/aleksydobrodziej/",
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
    copyright: "© 2026 Aleksy Dobrodziej.",
    builtWith: "Built with React · TypeScript · Tailwind CSS · shadcn/ui",
    builtBy: "Addigital",
    designedCreated: "Designed & Created:",
  },

  ui: {
    getInTouch: "Get in touch",
    openMenu: "Open menu",
    changeLanguage: "Change language",
    hero: {
      viewProjects: "View projects",
      getInTouch: "Get in touch",
    },
    heatmap: {
      contributions: "contributions in the last year",
      less: "Less",
      more: "More",
    },
    projectCard: {
      details: "Show more details",
      liveDemo: "Live demo",
      source: "Source",
    },
    projectDetail: {
      back: "Back to all projects",
      overview: "Overview",
      keyFeatures: "Key features",
      whatsNext: "What's next",
      techStack: "Tech stack",
      links: "Links",
      openLiveDemo: "Open live demo",
      viewSource: "View source",
      viewSourceGithub: "View source on GitHub",
      liveDemo: "Live demo",
      sourceGithub: "Source on GitHub",
      previous: "Previous",
      next: "Next:",
      allProjects: "All projects",
      getInTouch: "Get in touch",
    },
    contactForm: {
      name: "Name",
      email: "Email",
      message: "Message",
      privacyPolicy: "Privacy Policy",
      otherWays: "Other ways to reach me",
      errName: "Your name is required",
      errEmail: "Enter a valid email address",
      errMessage: "Tell me what you're hiring for",
      errConsent: "Please accept the privacy policy to continue",
      mailSubject: "Portfolio contact from",
    },
    privacy: {
      label: "Privacy",
      title: "Privacy policy",
      back: "Back to contact",
      intro:
        "This is a personal portfolio, not a company, so this policy is short on purpose.",
      sections: [
        {
          heading: "What gets collected",
          body: "The contact form only asks for your name, email address, and message. Nothing else is tracked, stored, or logged when you use it.",
        },
        {
          heading: "How it's used",
          body: "Submitting the form opens your own email client with a pre-filled message addressed to {email}. The message only reaches me once you send it yourself - nothing is transmitted to a server or third party in between.",
        },
        {
          heading: "No sharing, no spam",
          body: "Your details are never sold, shared, or added to a mailing list. They're used only to reply to you.",
        },
      ],
      questionsHeading: "Questions",
      questionsPrefix: "Reach out any time at",
    },
    notFound: {
      code: "404",
      title: "Page not found",
      description:
        "The page you're looking for doesn't exist or has moved. Let's get you back on track.",
      home: "Back to home",
    },
  },
};

export type SiteContent = typeof siteEn;
