import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { SpotlightSection } from "@/components/shared/spotlight-section";
import { AgencyAuroraBackground } from "@/components/agency/agency-aurora-background";
import { AgencyServiceChip } from "@/components/agency/agency-service-chip";
import { AgencyStats } from "@/components/agency/agency-stats";

const FLOAT_DELAYS = [0, 0.6, 1.2, 1.8];
const REVEAL_DELAYS = [0.06, 0.12, 0.18, 0.24];

export function AgencySection() {
  const { agency } = site;

  return (
    <SpotlightSection
      id="agency"
      spotSize={650}
      spotClassName="opacity-80"
      className="border-y border-border bg-bg-soft py-32"
    >
      <AgencyAuroraBackground />
      <div className="relative z-[1] mx-auto max-w-[1180px] px-6">
        <Reveal className="max-w-[700px]">
          <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
            {agency.sectionLabel}
          </span>
          <h2 className="font-display mt-3 text-[34px] leading-tight font-bold sm:text-[44px]">
            I run a small web agency — <span className="gradient-text">AD.digital.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-text-muted">{agency.paragraph}</p>
          <div className="mt-8">
            <Button asChild size="cta">
              <Link href={agency.ctaUrl} target="_blank">
                {agency.ctaLabel}
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {agency.services.map((service, i) => (
            <AgencyServiceChip
              key={service.title}
              service={service}
              delay={REVEAL_DELAYS[i]}
              floatDelay={FLOAT_DELAYS[i]}
            />
          ))}
        </div>

        <AgencyStats stats={agency.stats} />
      </div>
    </SpotlightSection>
  );
}
