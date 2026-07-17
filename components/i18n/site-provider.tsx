"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "@/data/site";

interface SiteContextValue {
  site: SiteContent;
  locale: Locale;
}

const SiteContext = React.createContext<SiteContextValue | null>(null);

export function SiteProvider({
  site,
  locale,
  children,
}: SiteContextValue & { children: React.ReactNode }) {
  const value = React.useMemo(() => ({ site, locale }), [site, locale]);
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite(): SiteContent {
  const ctx = React.useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within <SiteProvider>");
  return ctx.site;
}

export function useLocale(): Locale {
  const ctx = React.useContext(SiteContext);
  if (!ctx) throw new Error("useLocale must be used within <SiteProvider>");
  return ctx.locale;
}
