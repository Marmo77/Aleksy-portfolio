import { site } from "@/data/site";

function MarqueeRow() {
  return (
    <>
      {site.hero.marqueeItems.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-7 whitespace-nowrap px-7 font-mono text-[13px] tracking-[0.08em] text-text-dim"
        >
          {item}
          <span className="h-1 w-1 rounded-full bg-mint" />
        </span>
      ))}
    </>
  );
}

export function HeroMarquee() {
  return (
    <div className="mt-16 border-y border-border">
      <div className="overflow-hidden py-4">
        <div className="marquee-track">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </div>
  );
}
