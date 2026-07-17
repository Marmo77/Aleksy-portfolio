"use client";

import { useSite } from "@/components/i18n/site-provider";
import { Reveal } from "@/components/shared/reveal";
import { JourneyTimeline } from "@/components/about/journey-timeline";

export function AboutSection() {
  const site = useSite();
  return (
    <section id="about" className="py-28">
      <div className="mx-auto grid max-w-[1180px] gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
            {site.about.sectionLabel}
          </span>
          <h2 className="font-display mt-3 text-[32px] leading-tight font-bold sm:text-[38px]">
            {site.about.heading}
          </h2>
          {site.about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "mt-5 leading-relaxed text-text-muted" : "mt-4 leading-relaxed text-text-muted"}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal id="journey">
          <JourneyTimeline />
        </Reveal>
      </div>
    </section>
  );
}
