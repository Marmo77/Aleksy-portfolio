import { site } from "@/data/site";

export function JourneyTimeline() {
  return (
    <div>
      <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
        {site.about.journeyLabel}
      </span>
      <div className="relative mt-6 flex flex-col gap-8">
        <div className="timeline-line" />
        {site.about.journey.map((item) => (
          <div key={item.title} className="group flex gap-5">
            <div className="mt-1 h-[15px] w-[15px] shrink-0 rounded-full border-2 border-mint bg-black transition-colors duration-200 group-hover:bg-mint z-10" />
            <div>
              <div className="font-display font-semibold">{item.title}</div>
              <p className="mt-1 text-sm text-text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
