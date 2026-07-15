import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.fullName} — Developer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1000px circle at 15% 0%, rgba(55,232,172,0.18), transparent 55%), #070B09",
          color: "#EAF3EE",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#37E8AC" }} />
          <div style={{ fontSize: "26px", letterSpacing: "0.14em", color: "#37E8AC", textTransform: "uppercase" }}>
            Developer · Poland · Open to internships
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "84px", fontWeight: 700, lineHeight: 1.05 }}>
            {site.fullName}
          </div>
          <div style={{ fontSize: "40px", fontWeight: 600, color: "#37E8AC", marginTop: "10px" }}>
            Junior Frontend &amp; Fullstack Developer
          </div>
          <div style={{ fontSize: "28px", color: "#8FA39B", marginTop: "22px", maxWidth: "900px" }}>
            React · Next.js · TypeScript · Tailwind CSS · Supabase
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "26px", color: "#8FA39B" }}>
          <div style={{ display: "flex" }}>aleksydobrodziej.com</div>
          <div style={{ display: "flex", color: "#37E8AC" }}>github.com/{site.hero.githubHandle}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
