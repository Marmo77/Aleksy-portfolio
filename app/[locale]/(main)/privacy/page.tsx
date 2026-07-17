import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getSite } from "@/data/site";
import { isLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const site = getSite(locale);
  return {
    title: site.ui.privacy.title,
    description: site.ui.privacy.intro,
    alternates: { canonical: `/${locale}/privacy` },
    robots: { index: false, follow: true },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolved = isLocale(locale) ? locale : "en";
  const site = getSite(resolved);
  const t = site.ui.privacy;

  return (
    <section className="pt-[150px] pb-28">
      <div className="mx-auto max-w-[720px] px-6">
        <Button asChild variant="text" className="mb-6 text-sm text-text-muted">
          <Link href={`/${resolved}#contact`}>
            <ArrowLeft size={13} strokeWidth={2.5} />
            {t.back}
          </Link>
        </Button>

        <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
          {t.label}
        </span>
        <h1 className="font-display mt-3 text-[32px] font-bold sm:text-[38px]">
          {t.title}
        </h1>
        <p className="mt-5 leading-relaxed text-text-muted">{t.intro}</p>

        <div className="mt-10 flex flex-col gap-8">
          {t.sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="font-display text-lg font-semibold">{sec.heading}</h2>
              <p className="mt-2 leading-relaxed text-text-muted">
                {sec.body.replace("{email}", site.contact.email)}
              </p>
            </div>
          ))}
          <div>
            <h2 className="font-display text-lg font-semibold">
              {t.questionsHeading}
            </h2>
            <p className="mt-2 leading-relaxed text-text-muted">
              {t.questionsPrefix}{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="text-mint hover:underline"
              >
                {site.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
