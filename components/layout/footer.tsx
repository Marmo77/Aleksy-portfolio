import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-3 px-6 text-sm text-text-dim sm:flex-row">
        <span>{site.footer.copyright}</span>
        <span className="font-mono text-[12px]">{site.footer.builtWith}</span>
      </div>
    </footer>
  );
}
