import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { GithubIcon } from "@/components/shared/github-icon";
import { cn } from "@/lib/utils";

export function ProjectRow({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  const pillLabel = project.featured
    ? "FEATURED · MOST COMPLEX BUILD"
    : project.tag;
  const pillVariant = project.featured ? "amber" : "mint";

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-10 border-b border-border py-11 last:border-b-0 md:flex-row md:items-center md:gap-14",
        reverse && "md:flex-row-reverse",
      )}
    >
      <div className="relative aspect-[4/2.75] w-full overflow-hidden rounded-[22px] border border-border bg-card-bg md:flex-[0_0_52%]">
        {project.thumbnail ? (
          <Link className="group absolute inset-0" href={`/projects/${project.slug}`}>
            <Image
              src={project.thumbnail}
              alt={`${project.name} — screenshot`}
              fill
              sizes="(min-width: 768px) 52vw, 100vw"
              className="object-center object-cover group-hover:scale-110 duration-500 ease-in-out transition-transform"
            />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent" />
          </Link>
        ) : (
          <div className="diagonal-stripes absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 140% at 15% 10%, var(--mint-soft) 0%, transparent 55%)",
              }}
            />
            <div className="relative z-[1] flex h-full items-center justify-center">
              <div className="font-display flex h-[120px] w-[120px] items-center justify-center rounded-[26px] border border-border-strong bg-bg-soft text-[30px] font-bold text-text-dim shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]">
                {project.monogram}
              </div>
              <div className="absolute bottom-[26px] right-[calc(50%-78px)] h-[34px] w-[34px] rounded-full bg-mint-deep opacity-55" />
            </div>
          </div>
        )}
        <Badge variant={pillVariant} className="absolute top-5 left-5 z-[2]">
          {pillLabel}
        </Badge>
      </div>

      <div className="flex-1">
        <div className="mb-5 flex flex-wrap gap-2">
          {project.homeBadges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
        <h3 className="font-display text-2xl font-bold sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-3 leading-relaxed text-text-muted">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Button asChild size="cta">
            <Link href={`/projects/${project.slug}`}>
              Show more details
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </Button>
          {project.liveUrl && (
            <Button asChild variant="text">
              <Link href={project.liveUrl} target="_blank">
                Live demo
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </Link>
            </Button>
          )}
          <Button asChild variant="text" className="text-text-muted">
            <Link href={project.repoUrl} target="_blank">
              <GithubIcon size={14} />
              Source
            </Link>
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
