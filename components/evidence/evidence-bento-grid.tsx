import { site } from "@/data/site";
import { EvidenceCard } from "@/components/evidence/evidence-card";

export function EvidenceBentoGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-6">
      {site.evidence.stats.map((stat, i) => (
        <EvidenceCard key={stat.id} stat={stat} delay={Math.min(i * 0.06, 0.42)} />
      ))}
    </div>
  );
}
