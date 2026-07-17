// Root layout is an intentional pass-through: the real <html>/<body>, fonts,
// providers and metadata live in app/[locale]/layout.tsx so the <html lang>
// attribute can be set per locale. Non-localized routes (sitemap, robots,
// manifest, opengraph-image, api) render outside the [locale] segment.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
