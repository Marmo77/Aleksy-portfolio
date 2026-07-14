import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { ProjectRow } from "@/components/projects/project-row";

export function ProjectsSection() {
  const { projects } = site;

  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mb-8">
          <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
            {projects.sectionLabel}
          </span>
          <h2 className="font-display mt-3 text-[32px] font-bold sm:text-[38px]">
            {projects.heading}
          </h2>
          <p className="mt-4 max-w-[560px] text-text-muted">{projects.subheading}</p>
        </Reveal>

        <div>
          {projects.items.map((project, i) => (
            <ProjectRow key={project.slug} project={project} reverse={i % 2 === 1} />
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Button asChild variant="outline" size="cta">
            <Link href={projects.viewAllUrl} target="_blank">
              {projects.viewAllLabel}
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
