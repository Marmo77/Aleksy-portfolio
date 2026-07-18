"use client";

import * as React from "react";

const ContributionsContext = React.createContext<number | null>(null);

/**
 * Fetches the real GitHub contribution total once and shares it across the
 * page, so the hero stat, the heatmap banner and the Evidence card all show
 * the same live number instead of hardcoded values. Falls back to the seed
 * count if the API is unavailable.
 */
export function ContributionsProvider({
  fallback,
  children,
}: {
  fallback: number;
  children: React.ReactNode;
}) {
  const [total, setTotal] = React.useState<number>(fallback);

  React.useEffect(() => {
    let cancelled = false;
    fetch("/api/github-contributions")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: { total?: number }) => {
        if (!cancelled && typeof data.total === "number") setTotal(data.total);
      })
      .catch(() => {
        /* keep the fallback */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <ContributionsContext.Provider value={total}>
      {children}
    </ContributionsContext.Provider>
  );
}

/** Live GitHub contribution total (falls back to the provided seed). */
export function useContributions(fallback: number): number {
  const value = React.useContext(ContributionsContext);
  return value ?? fallback;
}

/** Formatted live total, e.g. "1,185" (matches the heatmap grouping). */
export function useContributionsFormatted(fallback: number): string {
  return useContributions(fallback).toLocaleString("en-US");
}
