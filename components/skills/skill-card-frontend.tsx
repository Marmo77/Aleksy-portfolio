import { Code2 } from "lucide-react";
import type { SkillCard } from "@/data/site";
import { Surface } from "@/components/shared/surface";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { CodeWindow } from "@/components/skills/code-window";

export function SkillCardFrontend({ card }: { card: SkillCard }) {
  return (
    <Reveal className="md:col-span-3 md:row-span-2">
      <Surface className="flex h-full flex-col justify-between p-8">
        <div>
          <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-mint-soft">
            <Code2 size={20} className="text-mint" strokeWidth={2} />
          </div>
          <h3 className="font-display text-xl font-semibold">{card.title}</h3>
          <p className="mt-2 max-w-[420px] text-sm text-text-muted">{card.description}</p>

          {card.codeWindow && <CodeWindow data={card.codeWindow} className="mt-6" />}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {card.badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
      </Surface>
    </Reveal>
  );
}
