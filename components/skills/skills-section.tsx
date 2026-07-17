"use client";

import { useSite } from "@/components/i18n/site-provider";
import { Reveal } from "@/components/shared/reveal";
import { SkillCardFrontend } from "@/components/skills/skill-card-frontend";
import { SkillCardBackend } from "@/components/skills/skill-card-backend";
import { SkillCardExcel } from "@/components/skills/skill-card-excel";

export function SkillsSection() {
  const site = useSite();
  const [frontend, backend, excel] = site.skills.cards;

  return (
    <section id="skills" className="border-y border-border bg-bg-soft py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
            {site.skills.sectionLabel}
          </span>
          <h2 className="font-display mt-3 text-[32px] font-bold sm:text-[38px]">
            {site.skills.heading}
          </h2>
          <p className="mt-4 max-w-[560px] text-text-muted">{site.skills.subheading}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 [&>*]:min-w-0">
          <SkillCardFrontend card={frontend} />
          <SkillCardBackend card={backend} />
          <SkillCardExcel card={excel} />
        </div>
      </div>
    </section>
  );
}
