export function AgencyAuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <span
        className="agency-aurora-blob"
        style={{
          width: 360,
          height: 360,
          background: "var(--mint)",
          top: -120,
          left: "8%",
          animation: "drift1 16s ease-in-out infinite",
        }}
      />
      <span
        className="agency-aurora-blob"
        style={{
          width: 280,
          height: 280,
          background: "var(--mint-deep)",
          bottom: -100,
          right: "10%",
          animation: "drift2 20s ease-in-out infinite",
        }}
      />
    </div>
  );
}
