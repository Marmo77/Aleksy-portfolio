import type { CodeWindowData } from "@/data/site";
import { cn } from "@/lib/utils";

const TOKEN_CLASS: Record<CodeWindowData["lines"][number][number]["type"], string> = {
  key: "text-[var(--code-key)]",
  var: "text-foreground",
  prop: "text-[var(--code-prop)]",
  str: "text-mint",
  plain: "text-text-muted",
};

export function CodeWindow({ data, className }: { data: CodeWindowData; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-bg-soft", className)}>
      <div className="flex items-center gap-1.5 border-b border-border bg-card-bg px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full" style={{ background: "#EF6A5F" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "#F5BD4F" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "#61C554" }} />
        <span className="ml-2 font-mono text-[11px] text-text-dim">{data.filename}</span>
      </div>
      <pre className="overflow-x-auto p-4 px-[18px] font-mono text-[12.5px] leading-[1.7] text-text-muted">
        {data.lines.map((line, i) => (
          <div key={i}>
            {line.map((token, j) => (
              <span key={j} className={TOKEN_CLASS[token.type]}>
                {token.text}
              </span>
            ))}
          </div>
        ))}
      </pre>
    </div>
  );
}
