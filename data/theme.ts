export const colors = {
  dark: {
    bg: "#070B09",
    bgSoft: "#0C1310",
    cardBg: "#0F1613",
    cardBgHover: "#121B17",
    border: "rgba(255,255,255,0.09)",
    borderStrong: "rgba(255,255,255,0.16)",
    text: "#EAF3EE",
    textMuted: "#8FA39B",
    textDim: "#5C6E67",
    mint: "#37E8AC",
    mintDeep: "#12B884",
    mintSoft: "rgba(55,232,172,0.12)",
    mintSoftStrong: "rgba(55,232,172,0.22)",
    amber: "#E8B84B",
    shadow: "0 20px 60px -20px rgba(0,0,0,0.6)",
  },
  light: {
    bg: "#FAFAF7",
    bgSoft: "#F1F0EA",
    cardBg: "#FFFFFF",
    cardBgHover: "#FCFCFA",
    border: "rgba(10,15,12,0.09)",
    borderStrong: "rgba(10,15,12,0.16)",
    text: "#0B120F",
    textMuted: "#57655D",
    textDim: "#8B968F",
    mint: "#0C9C71",
    mintDeep: "#0A7D5A",
    mintSoft: "rgba(12,156,113,0.10)",
    mintSoftStrong: "rgba(12,156,113,0.18)",
    amber: "#B5811C",
    shadow: "0 20px 60px -25px rgba(10,20,15,0.18)",
  },
} as const;

export const fonts = {
  display: "var(--font-display)",
  body: "var(--font-sans)",
  mono: "var(--font-mono)",
} as const;

export const radii = {
  card: "1.125rem",
  pill: "9999px",
} as const;
