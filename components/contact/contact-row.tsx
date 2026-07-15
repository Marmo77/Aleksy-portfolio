import Link from "next/link";
import { Mail, MapPin, Plus, ArrowUpRight } from "lucide-react";
import type { ContactRow as ContactRowData } from "@/data/site";
import { GithubIcon } from "@/components/shared/github-icon";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "../shared/linkedin-icon";

const ICONS: Record<
  ContactRowData["icon"],
  React.ComponentType<{
    size?: number;
    className?: string;
    strokeWidth?: number;
  }>
> = {
  mail: Mail,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  location: MapPin,
  "open-to": Plus,
};

export function ContactRow({
  row,
  isLast,
}: {
  row: ContactRowData;
  isLast: boolean;
}) {
  const Icon = ICONS[row.icon];

  const content = (
    <>
      <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-mint-soft">
        <Icon size={17} className="text-mint" strokeWidth={2} />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="font-mono text-[11px] tracking-[0.06em] text-text-dim uppercase">
          {row.label}
        </span>
        <span className="text-[14.5px] font-medium">{row.value}</span>
      </span>
      {row.href && (
        <ArrowUpRight
          size={15}
          strokeWidth={2.5}
          className="contact-row-arrow ml-auto shrink-0 -translate-x-1 text-mint opacity-0 transition-all duration-200"
        />
      )}
    </>
  );

  const className = cn(
    "group flex items-center gap-4 rounded-[10px] px-1.5 py-[18px] transition-[padding,background] duration-200",
    !isLast && "border-b border-border",
    row.href &&
      "hover:bg-mint-soft hover:pl-3 [&:hover_.contact-row-arrow]:translate-x-0 [&:hover_.contact-row-arrow]:opacity-100",
  );

  if (row.href) {
    const isExternal = row.href.startsWith("http");
    return (
      <Link
        href={row.href}
        target={isExternal ? "_blank" : undefined}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
