"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useActiveSection } from "@/components/layout/use-active-section";
import { cn } from "@/lib/utils";

function resolveHref(href: string, pathname: string) {
  if (!href.startsWith("#")) return href;
  return pathname === "/" ? href : `/${href}`;
}

const SECTION_IDS = site.nav.map((link) => link.href.slice(1));

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight"
        >
          {site.companyName.slice(0, -1)}
          <span className="text-mint">{site.companyName.slice(-1)}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((link) => {
            const isActive = pathname === "/" && activeSection === link.href.slice(1);
            return (
              <Link
                key={link.label}
                href={resolveHref(link.href, pathname)}
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
          <ThemeToggle />
          <Button asChild size="cta-sm" className="hidden sm:inline-flex">
            <Link href={resolveHref("#contact", pathname)}>Get in touch</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
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
                  const isActive = pathname === "/" && activeSection === link.href.slice(1);
                  return (
                    <Link
                      key={link.label}
                      href={resolveHref(link.href, pathname)}
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
                <Button asChild size="cta" className="mt-4 justify-center">
                  <Link
                    href={resolveHref("#contact", pathname)}
                    onClick={() => setOpen(false)}
                  >
                    Get in touch
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
