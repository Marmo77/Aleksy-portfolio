import { Monitor, Search, MapPin, MessageCircle } from "lucide-react";
import type { AgencyService } from "@/data/site";
import { Reveal } from "@/components/shared/reveal";

const ICONS: Record<AgencyService["icon"], React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  webdev: Monitor,
  seo: Search,
  maps: MapPin,
  support: MessageCircle,
};

export function AgencyServiceChip({
  service,
  delay,
  floatDelay = 0,
}: {
  service: AgencyService;
  delay: number;
  floatDelay?: number;
}) {
  const Icon = ICONS[service.icon];

  return (
    <Reveal delay={delay}>
      <div
        className="agency-chip-float rounded-2xl border border-border bg-card-bg p-[22px] transition-colors hover:border-mint-soft-strong"
        style={{ animationDelay: `${floatDelay}s` }}
      >
        <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-mint-soft">
          <Icon size={17} className="text-mint" strokeWidth={2} />
        </div>
        <h3 className="font-display mt-4 font-semibold">{service.title}</h3>
        <p className="mt-1.5 text-sm text-text-muted">{service.description}</p>
      </div>
    </Reveal>
  );
}
