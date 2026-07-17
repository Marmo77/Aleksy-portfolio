import Link from "next/link";

// Global fallback for paths outside any locale. In practice middleware
// redirects everything into a locale, so this is rarely hit — but the root
// layout is a pass-through, so this must render its own <html>/<body>.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070B09",
          color: "#EAF3EE",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: 40, margin: 0 }}>404</h1>
          <p style={{ color: "#8FA39B" }}>This page could not be found.</p>
          <Link href="/en" style={{ color: "#37E8AC" }}>
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
