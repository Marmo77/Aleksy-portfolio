import { Database } from "lucide-react";
import type { SkillCard } from "@/data/site";
import { Surface } from "@/components/shared/surface";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

export function SkillCardBackend({ card }: { card: SkillCard }) {
  return (
    <Reveal delay={0.08} className="md:col-span-2">
      <Surface className="p-7">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-mint-soft">
          <Database size={19} className="text-mint" strokeWidth={2} />
        </div>
        <h3 className="font-display text-lg font-semibold">{card.title}</h3>
        <p className="mt-2 mb-5 text-sm text-text-muted">{card.description}</p>
        <div className="flex flex-wrap gap-2">
          {card.badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
      </Surface>
    </Reveal>
  );
}
