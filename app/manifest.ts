import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.fullName} — Developer Portfolio`,
    short_name: site.fullName,
    description:
      "Frontend-leaning developer from Poland building real, working software with React, Next.js and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#070B09",
    theme_color: "#070B09",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
    ],
  };
}
