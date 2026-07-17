"use client";

import * as React from "react";
import { useSite } from "@/components/i18n/site-provider";

const WEEKS = 28;
const DAYS = 7;
const GRID_SIZE = WEEKS * DAYS;

function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function levelForRandom(r: number) {
  if (r > 0.82) return 4;
  if (r > 0.66) return 3;
  if (r > 0.48) return 2;
  if (r > 0.3) return 1;
  return 0;
}

function seededLevels(seed: number) {
  const rand = mulberry32(seed);
  return Array.from({ length: GRID_SIZE }, () => levelForRandom(rand()));
}

export function HeroHeatmap() {
  const site = useSite();
  const [levels] = React.useState<number[]>(() => seededLevels(site.hero.contributionsLastYear));
  const [total, setTotal] = React.useState<number>(site.hero.contributionsLastYear);

  React.useEffect(() => {
    let cancelled = false;

    fetch("/api/github-contributions")
      .then((res) => {
        if (!res.ok) throw new Error("bad response");
        return res.json() as Promise<{ total: number }>;
      })
      .then((data) => {
        if (cancelled || typeof data.total !== "number") return;
        setTotal(data.total);
      })
      .catch(() => {
        // keep the static fallback total
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-card-bg p-5 pb-[18px] shadow-elevated">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-xs text-text-muted">
          {total.toLocaleString("en-US")} {site.ui.heatmap.contributions}
        </span>
        <a
          href={`https://github.com/${site.hero.githubHandle}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-mint-soft px-2 py-1 font-mono text-[11px] text-mint transition-colors hover:bg-mint-soft-strong"
        >
          github.com/{site.hero.githubHandle}
        </a>
      </div>

      <div className="grid grid-cols-[repeat(20,1fr)] gap-[3px] sm:grid-cols-[repeat(28,1fr)]">
        {levels.map((lvl, i) => (
          <div
            key={i}
            className="heatmap-cell"
            data-lvl={lvl > 0 ? lvl : undefined}
            style={{ animationDelay: `${i * 0.006}s` }}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-mono text-[11px] text-text-dim">Jul — Jul</span>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[11px] text-text-dim">{site.ui.heatmap.less}</span>
          <span className="h-[10px] w-[10px] rounded-[2.5px] bg-bg-soft" />
          <span className="h-[10px] w-[10px] rounded-[2.5px] bg-mint-soft" />
          <span className="h-[10px] w-[10px] rounded-[2.5px]" style={{ background: "color-mix(in srgb, var(--mint) 45%, var(--bg-soft))" }} />
          <span className="h-[10px] w-[10px] rounded-[2.5px]" style={{ background: "color-mix(in srgb, var(--mint) 75%, var(--bg-soft))" }} />
          <span className="h-[10px] w-[10px] rounded-[2.5px] bg-mint" />
          <span className="font-mono text-[11px] text-text-dim">{site.ui.heatmap.more}</span>
        </div>
      </div>
    </div>
  );
}
