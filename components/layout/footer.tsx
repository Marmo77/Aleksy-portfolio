"use client";

import Link from "next/link";
import { useSite } from "@/components/i18n/site-provider";

export function Footer() {
  const site = useSite();
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-3 px-6 text-sm text-text-dim sm:flex-row">
        <span>{site.footer.copyright}</span>
        <div className="flex flex-col items-center md:items-end gap-1">
          <span className="font-mono text-[12px]">{site.footer.builtWith}</span>
          <span className="">
            {site.footer.designedCreated}{" "}
            <Link
              href={site.agency.ctaUrl}
              target="_blank"
              className="text-sm font-semibold text-primary/80 cursor-pointer hover:underline underline-offset-3"
            >
              {site.footer.builtBy}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
