"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export const Surface = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  function Surface({ className, ...props }, forwardedRef) {
    const innerRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = innerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
      <div
        ref={(node) => {
          innerRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        onMouseMove={handleMouseMove}
        className={cn("surface", className)}
        {...props}
      />
    );
  }
);
