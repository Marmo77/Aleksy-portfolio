import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSite } from "@/data/site";
import { isLocale } from "@/lib/i18n";
import { hreflangAlternates } from "@/lib/seo";
import { ProjectDetail } from "@/components/projects/project-detail";

export function generateStaticParams() {
  // Slugs are locale-independent; Next combines these with the [locale] params.
  return getSite("en").projects.items.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const site = getSite(locale);
  const project = site.projects.items.find((p) => p.slug === slug);
  if (!project) return {};

  const subpath = `/projects/${project.slug}`;
  const path = `/${locale}${subpath}`;

  return {
    title: project.name,
    description: project.detailTagline,
    keywords: [project.name, ...project.techStack, site.fullName],
    alternates: {
      canonical: path,
      languages: hreflangAlternates(subpath),
    },
    openGraph: {
      type: "article",
      title: `${project.name} — ${site.fullName}`,
      description: project.detailTagline,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${site.fullName}`,
      description: project.detailTagline,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const site = getSite(locale);
  const items = site.projects.items;
  const index = items.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = items[index];
  const prevProject = index > 0 ? items[index - 1] : null;
  const nextProject = index < items.length - 1 ? items[index + 1] : null;

  return (
    <ProjectDetail
      site={site}
      locale={locale}
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
