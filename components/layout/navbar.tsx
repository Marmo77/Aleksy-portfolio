"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useSite, useLocale } from "@/components/i18n/site-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LanguageSwitch } from "@/components/layout/language-switch";
import { useActiveSection } from "@/components/layout/use-active-section";
import { cn } from "@/lib/utils";

export function Navbar() {
  const site = useSite();
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const sectionIds = React.useMemo(
    () => site.nav.map((link) => link.href.slice(1)),
    [site.nav]
  );
  const activeSection = useActiveSection(sectionIds);

  const home = `/${locale}`;
  const isHome = pathname === home;

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between px-6">
        <Link
          href={home}
          onClick={handleLogoClick}
          className="font-display text-lg font-bold tracking-tight"
        >
          {site.companyName.slice(0, -1)}
          <span className="text-mint">{site.companyName.slice(-1)}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((link) => {
            const isActive = isHome && activeSection === link.href.slice(1);
            return (
              <Link
                key={link.href}
                href={`${home}${link.href}`}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  isActive ? "text-mint" : "text-text-muted"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitch className="hidden sm:flex" />
          <ThemeToggle />
          <Button asChild size="cta-sm" className="hidden sm:inline-flex">
            <Link href={`${home}#contact`}>{site.ui.getInTouch}</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full md:hidden"
              onClick={() => setOpen(true)}
              aria-label={site.ui.openMenu}
            >
              <Menu size={18} />
            </Button>
            <SheetContent side="right" className="border-border bg-bg">
              <SheetHeader>
                <SheetTitle className="font-display">
                  {site.companyName}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {site.nav.map((link) => {
                  const isActive = isHome && activeSection === link.href.slice(1);
                  return (
                    <Link
                      key={link.href}
                      href={`${home}${link.href}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-mint-soft hover:text-foreground",
                        isActive ? "text-mint" : "text-text-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="mt-4 flex items-center justify-between px-3">
                  <LanguageSwitch onNavigate={() => setOpen(false)} />
                </div>
                <Button asChild size="cta" className="mt-4 justify-center">
                  <Link href={`${home}#contact`} onClick={() => setOpen(false)}>
                    {site.ui.getInTouch}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
