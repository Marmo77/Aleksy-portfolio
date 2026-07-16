import { site } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-3 px-6 text-sm text-text-dim sm:flex-row">
        <span>{site.footer.copyright}</span>
        <div className="flex flex-col items-center md:items-end gap-1">
          <span className="font-mono text-[12px]">{site.footer.builtWith}</span>
          <span className="">
            Designed & Created:{" "}
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
