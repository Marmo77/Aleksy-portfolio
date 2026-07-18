import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteProvider } from "@/components/i18n/site-provider";
import { ContributionsProvider } from "@/components/shared/contributions";
import { getSite } from "@/data/site";
import {
  SITE_URL,
  SITE_KEYWORDS,
  SEO_META,
  absoluteUrl,
  hreflangAlternates,
} from "@/lib/seo";
import { locales, isLocale, localeHtmlLang } from "@/lib/i18n";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const meta = SEO_META[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta.title, template: "%s — Aleksy Dobrodziej" },
    description: meta.description,
    keywords: SITE_KEYWORDS,
    applicationName: "Aleksy Dobrodziej — Portfolio",
    authors: [{ name: "Aleksy Dobrodziej", url: SITE_URL }],
    creator: "Aleksy Dobrodziej",
    alternates: {
      canonical: `/${locale}`,
      languages: hreflangAlternates(""),
    },
    openGraph: {
      type: "website",
      siteName: "Aleksy Dobrodziej — Developer Portfolio",
      title: meta.title,
      description: meta.description,
      url: absoluteUrl(`/${locale}`),
      locale: meta.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const site = getSite(locale);

  return (
    <html
      lang={localeHtmlLang[locale]}
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd locale={locale} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            <SiteProvider site={site} locale={locale}>
              <ContributionsProvider fallback={site.hero.contributionsLastYear}>
                {children}
              </ContributionsProvider>
            </SiteProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
