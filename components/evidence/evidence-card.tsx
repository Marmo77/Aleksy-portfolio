import {
  GraduationCap,
  Table2,
  FileText,
  Image as ImageIcon,
  Globe,
  Code,
  Languages,
} from "lucide-react";
import type { EvidenceStat } from "@/data/site";
import { site } from "@/data/site";
import { Surface } from "@/components/shared/surface";
import { Reveal } from "@/components/shared/reveal";
import { CountUp } from "@/components/shared/count-up";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  math: GraduationCap,
  english: GraduationCap,
  "excel-count": Table2,
  "team-poland": FileText,
  adobe: ImageIcon,
  europass: Globe,
  inf: Code,
  languages: Languages,
};

export function EvidenceCard({ stat, delay }: { stat: EvidenceStat; delay: number }) {
  const Icon = ICONS[stat.id];
  const spanClass = stat.span === 3 ? "md:col-span-3" : "md:col-span-2";

  if (stat.hero) {
    return (
      <Reveal delay={delay} className={cn(spanClass, "md:row-span-2")}>
        <Surface
          className="flex h-full flex-col justify-between p-8"
          style={{
            background:
              "linear-gradient(155deg, var(--mint-soft), var(--card-bg) 60%)",
          }}
        >
          <span className="font-mono text-[11px] text-mint">{site.evidence.githubHandle}</span>
          <div>
            <div className="font-display text-[clamp(48px,6vw,72px)] leading-none font-bold">
              <CountUp value={stat.value ?? ""} />
            </div>
            <div className="mt-3 text-sm text-text-muted">{stat.description}</div>
          </div>
        </Surface>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay} className={spanClass}>
      <Surface className="p-6">
        {Icon && <Icon size={16} className="mb-3 text-mint" strokeWidth={2} />}
        {stat.value ? (
          <div className="font-display text-[clamp(28px,3.4vw,40px)] leading-none font-bold">
            <CountUp value={stat.value} />
          </div>
        ) : (
          <div className="font-display text-lg font-semibold">{stat.title}</div>
        )}
        <div className="mt-2 text-sm text-text-muted">{stat.description}</div>
      </Surface>
    </Reveal>
  );
}
