"use client";

import { useSite } from "@/components/i18n/site-provider";
import { Reveal } from "@/components/shared/reveal";
import { EvidenceBentoGrid } from "@/components/evidence/evidence-bento-grid";

export function EvidenceSection() {
  const site = useSite();
  return (
    <section className="py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mb-14">
          <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
            {site.evidence.sectionLabel}
          </span>
          <h2 className="font-display mt-3 text-[32px] font-bold sm:text-[38px]">
            {site.evidence.heading}
          </h2>
        </Reveal>

        <EvidenceBentoGrid />
      </div>
    </section>
  );
}
