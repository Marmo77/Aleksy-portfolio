import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = site.projects.items.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
