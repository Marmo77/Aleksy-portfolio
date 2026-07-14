"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightSectionProps extends React.ComponentProps<"section"> {
  spotSize?: number;
  spotClassName?: string;
}

export const SpotlightSection = React.forwardRef<HTMLElement, SpotlightSectionProps>(
  function SpotlightSection(
    { className, spotClassName, spotSize = 600, children, ...props },
    forwardedRef
  ) {
    const innerRef = React.useRef<HTMLElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      const el = innerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
      <section
        ref={(node) => {
          innerRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        onMouseMove={handleMouseMove}
        className={cn("relative overflow-hidden", className)}
        style={{ "--spot-size": `${spotSize}px` } as React.CSSProperties}
        {...props}
      >
        <div className={cn("spotlight", spotClassName)} />
        {children}
      </section>
    );
  }
);
