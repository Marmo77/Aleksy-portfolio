import type { StatItem } from "@/data/site";
import { Reveal } from "@/components/shared/reveal";
import { CountUp } from "@/components/shared/count-up";

export function AgencyStats({ stats }: { stats: StatItem[] }) {
  return (
    <Reveal delay={0.3} className="mt-14 flex flex-wrap gap-x-12 gap-y-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="font-display text-[clamp(28px,3.4vw,40px)] leading-none font-bold">
            <CountUp value={stat.value} />
          </div>
          <div className="mt-1 font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </Reveal>
  );
}
