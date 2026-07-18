"use client";

import { useSite } from "@/components/i18n/site-provider";
import Link from "next/link";

export function JourneyTimeline() {
  const site = useSite();

  return (
    <div>
      <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
        {site.about.journeyLabel}
      </span>
      <div className="relative mt-6 flex flex-col gap-8">
        <div className="timeline-line" />
        {site.about.journey.map((item) => {
          const isInteractive =
            item.interactive === true && Boolean(item.interactiveURL);

          return (
            <div key={item.title} className="group flex gap-5">
              <div className="mt-1 h-[15px] w-[15px] shrink-0 rounded-full border-2 border-mint bg-black transition-colors duration-200 group-hover:bg-mint z-10" />
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  {isInteractive ? (
                    <Link
                      href={item.interactiveURL!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold underline decoration-mint/40 underline-offset-2 transition-colors hover:text-mint"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div className="font-display font-semibold">
                      {item.title}
                    </div>
                  )}
                  {item.period && (
                    <span className="font-mono text-[11px] text-text-dim">
                      {item.period}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
