"use client";

import * as React from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

const NUMBER_PATTERN = /(\d[\d,]*)(\.\d+)?/;

export function CountUp({ value, className, duration = 1.4 }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = React.useState(value);

  const match = value.match(NUMBER_PATTERN);

  React.useEffect(() => {
    if (!match || !isInView) return;
    if (shouldReduceMotion) {
      setDisplay(value);
      return;
    }

    const [full, intPart] = match;
    const prefix = value.slice(0, match.index ?? 0);
    const suffix = value.slice((match.index ?? 0) + full.length);
    const target = Number(intPart.replace(/,/g, ""));
    const hasCommas = intPart.includes(",");
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      const formatted = hasCommas ? current.toLocaleString("en-US") : String(current);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {match ? display : value}
    </span>
  );
}
