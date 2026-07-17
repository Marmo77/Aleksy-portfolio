"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSite, useLocale } from "@/components/i18n/site-provider";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const site = useSite();
  const locale = useLocale();
  const t = site.ui.notFound;

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-28">
      <div className="mx-auto max-w-[540px] text-center">
        <div className="font-display text-[80px] leading-none font-bold text-mint sm:text-[110px]">
          {t.code}
        </div>
        <h1 className="font-display mt-4 text-[28px] font-bold sm:text-[34px]">
          {t.title}
        </h1>
        <p className="mt-4 leading-relaxed text-text-muted">{t.description}</p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="cta">
            <Link href={`/${locale}`}>
              <ArrowLeft size={14} strokeWidth={2.5} />
              {t.home}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
