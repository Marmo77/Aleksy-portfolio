"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  locales,
  localeLabels,
  swapLocaleInPath,
  LOCALE_COOKIE,
  type Locale,
} from "@/lib/i18n";
import { useSite, useLocale } from "@/components/i18n/site-provider";
import { cn } from "@/lib/utils";

export function LanguageSwitch({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const current = useLocale();
  const site = useSite();

  function switchTo(locale: Locale) {
    if (locale === current) return;
    document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${
      60 * 60 * 24 * 365
    };samesite=lax`;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    onNavigate?.();
    router.push(`${swapLocaleInPath(pathname, locale)}${hash}`);
  }

  return (
    <div
      role="group"
      aria-label={site.ui.changeLanguage}
      className={cn(
        "flex items-center rounded-full border border-border p-0.5",
        className
      )}
    >
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchTo(loc)}
          aria-current={loc === current ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 font-mono text-[11px] font-medium transition-colors",
            loc === current
              ? "bg-mint-soft text-mint"
              : "text-text-muted hover:text-foreground"
          )}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
