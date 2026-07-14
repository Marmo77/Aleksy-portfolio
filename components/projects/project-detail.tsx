import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { Project } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Surface } from "@/components/shared/surface";
import { Reveal } from "@/components/shared/reveal";

export function ProjectDetail({
  project,
  prevProject,
  nextProject,
}: {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}) {
  const tagVariant = project.tag === "LIVE" ? "mint" : "amber";

  return (
    <>
      <section className="pt-[150px] pb-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <Button asChild variant="text" className="mb-6 text-sm text-text-muted">
            <Link href="/#projects">
              <ArrowLeft size={13} strokeWidth={2.5} />
              Back to all projects
            </Link>
          </Button>

          <div className="mt-6 mb-5 flex flex-wrap items-center gap-3">
            {project.detailBadges.map((badge) => (
              <Badge key={badge.label} variant={badge.variant}>
                {badge.label}
              </Badge>
            ))}
          </div>

          <h1 className="font-display max-w-[820px] text-[36px] leading-[1.05] font-bold sm:text-[50px]">
            {project.name}
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-text-muted">
            {project.detailTagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            {project.liveUrl ? (
              <>
                <Button asChild size="cta">
                  <Link href={project.liveUrl} target="_blank">
                    Open live demo
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="cta">
                  <Link href={project.repoUrl} target="_blank">
                    View source
                  </Link>
                </Button>
              </>
            ) : (
              <Button asChild size="cta">
                <Link href={project.repoUrl} target="_blank">
                  View source on GitHub
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      <Reveal className="mx-auto max-w-[1180px] px-6 pb-8">
        <div className="relative flex aspect-[16/7.5] items-center justify-center overflow-hidden rounded-3xl border border-border bg-card-bg">
          {project.thumbnail ? (
            <>
              <Image
                src={project.thumbnail}
                alt={`${project.name} — screenshot`}
                fill
                sizes="100vw"
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />
            </>
          ) : (
            <div className="diagonal-stripes absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 140% at 15% 10%, var(--mint-soft) 0%, transparent 55%)",
                }}
              />
              <div className="font-display relative z-[1] flex h-full items-center justify-center">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-[32px] border border-border-strong bg-bg-soft text-[38px] font-bold text-text-dim">
                  {project.monogram}
                </div>
              </div>
            </div>
          )}
          <Badge variant={tagVariant} className="absolute top-[22px] left-[22px] z-[2]">
            {project.tag}
          </Badge>
        </div>
      </Reveal>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1180px] gap-16 px-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Reveal>
              <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
                Overview
              </span>
              <h2 className="font-display mt-3 text-2xl font-bold">
                {project.detailOverviewHeading}
              </h2>
              {project.overview.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-text-muted">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal className="mt-14">
              <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
                Key features
              </span>
              <div className="mt-5 flex flex-col gap-5">
                {project.keyFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[7px] bg-mint-soft">
                      <Check size={12} strokeWidth={3} className="text-mint" />
                    </div>
                    <p className="text-text-muted">
                      <span className="font-medium text-foreground">{feature.title}</span> —{" "}
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {project.whatsNext && (
              <Reveal className="mt-14">
                <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
                  What&apos;s next
                </span>
                <p className="mt-4 leading-relaxed text-text-muted">{project.whatsNext}</p>
              </Reveal>
            )}
          </div>

          <div>
            <Reveal>
              <Surface className="p-7">
                <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
                  Tech stack
                </span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="mt-7 border-t border-border pt-7">
                  <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
                    Links
                  </span>
                  <div className="mt-4 flex flex-col gap-3">
                    {project.liveUrl && (
                      <Button asChild variant="text" className="justify-start text-sm">
                        <Link href={project.liveUrl} target="_blank">
                          Live demo
                          <ArrowUpRight size={12} strokeWidth={2.5} />
                        </Link>
                      </Button>
                    )}
                    <Button asChild variant="text" className="justify-start text-sm">
                      <Link href={project.repoUrl} target="_blank">
                        Source on GitHub
                        <ArrowUpRight size={12} strokeWidth={2.5} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Surface>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-14">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6">
          {prevProject ? (
            <Button asChild variant="outline" size="cta">
              <Link href={`/projects/${prevProject.slug}`}>
                <ArrowLeft size={14} strokeWidth={2.5} />
                Previous
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline" size="cta">
              <Link href="/#projects">
                <ArrowLeft size={14} strokeWidth={2.5} />
                All projects
              </Link>
            </Button>
          )}

          {nextProject ? (
            <Button asChild variant="outline" size="cta">
              <Link href={`/projects/${nextProject.slug}`}>
                Next: {nextProject.name}
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline" size="cta">
              <Link href="/#contact">
                Get in touch
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </Button>
          )}
        </div>
      </section>
    </>
  );
}
