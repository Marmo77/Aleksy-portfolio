import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { ProjectDetail } from "@/components/projects/project-detail";

export function generateStaticParams() {
  return site.projects.items.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = site.projects.items.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.name} — ${site.fullName}`,
    description: project.detailTagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const items = site.projects.items;
  const index = items.findIndex((p) => p.slug === slug);

  if (index === -1) notFound();

  const project = items[index];
  const prevProject = index > 0 ? items[index - 1] : null;
  const nextProject = index < items.length - 1 ? items[index + 1] : null;

  return (
    <ProjectDetail project={project} prevProject={prevProject} nextProject={nextProject} />
  );
}
