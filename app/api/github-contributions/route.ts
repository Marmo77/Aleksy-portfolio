import { NextResponse } from "next/server";
import { site } from "@/data/site";

export const dynamic = "force-static";
export const revalidate = 3600;

interface ApiResponse {
  total: Record<string, number>;
}

export async function GET() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${site.hero.githubHandle}?y=last`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error(`GitHub contributions API responded ${res.status}`);
    }

    const data: ApiResponse = await res.json();
    const total = Object.values(data.total).reduce((sum, n) => sum + n, 0);

    return NextResponse.json({ total });
  } catch {
    return NextResponse.json({ error: "unavailable" }, { status: 502 });
  }
}
