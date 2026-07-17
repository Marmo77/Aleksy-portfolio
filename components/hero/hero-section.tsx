"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useSite } from "@/components/i18n/site-provider";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { SpotlightSection } from "@/components/shared/spotlight-section";
import { HeroHeatmap } from "@/components/hero/hero-heatmap";
import { HeroMarquee } from "@/components/hero/hero-marquee";

export function HeroSection() {
  const site = useSite();
  const { hero } = site;
  const [headlineStart, headlineGradient] = hero.headline;

  return (
    <SpotlightSection id="top" className="pt-[150px] pb-[90px]" spotSize={600}>
      <div className="relative mx-auto max-w-[1180px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full bg-mint shadow-[0_0_0_3px_var(--mint-soft)]" />
              <span className="font-mono text-xs tracking-[0.14em] text-mint uppercase">
                {hero.eyebrow}
              </span>
            </div>
            <h1 className="font-display text-[42px] leading-[1.03] font-bold tracking-tight sm:text-[56px] lg:text-[62px]">
              {headlineStart}{" "}
              <span className="gradient-text">{headlineGradient}</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-text-muted">
              {hero.paragraph}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="cta">
                <Link href="#projects">
                  {site.ui.hero.viewProjects}
                  <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="cta">
                <Link href="#contact">{site.ui.hero.getInTouch}</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-[clamp(28px,3.4vw,40px)] leading-none font-bold">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Reveal>
            <HeroHeatmap />
          </Reveal>
        </div>
      </div>

      <HeroMarquee />
    </SpotlightSection>
  );
}
