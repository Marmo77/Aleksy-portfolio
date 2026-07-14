import { Table2 } from "lucide-react";
import type { SkillCard } from "@/data/site";
import { Surface } from "@/components/shared/surface";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

export function SkillCardExcel({ card }: { card: SkillCard }) {
  return (
    <Reveal delay={0.16} className="md:col-span-2">
      <Surface className="p-7">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-mint-soft">
          <Table2 size={19} className="text-mint" strokeWidth={2} />
        </div>
        <h3 className="font-display text-lg font-semibold">{card.title}</h3>
        {card.stat && (
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-3xl font-bold text-mint">{card.stat.value}</span>
            <span className="text-sm text-text-muted">{card.stat.label}</span>
          </div>
        )}
        <p className="mt-3 mb-5 text-sm text-text-muted">{card.description}</p>
        <div className="flex flex-wrap gap-2">
          {card.badges.map((badge) => (
            <Badge key={badge} variant={badge === card.highlightBadge ? "mint" : "default"}>
              {badge}
            </Badge>
          ))}
        </div>
      </Surface>
    </Reveal>
  );
}
