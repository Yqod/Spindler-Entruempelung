const leistungen = [
  {
    title: "Entrümpelung von Wohnungen",
    description:
      "Keller, Dachboden, Garage oder ganze Wohnung – wir räumen schnell, gründlich und zu fairen Preisen. Inklusive fachgerechter Entsorgung.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Entrümpelung + Sanierung",
    description:
      "Nach der Entrümpelung direkt weiter: Wir übernehmen auch Reinigung, Bodenbeläge und kleinere Sanierungsarbeiten – alles aus einer Hand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Haushaltsauflösung",
    description:
      "Einfühlsam und diskret – ob nach einem Todesfall oder Umzug. Wir übernehmen die komplette Auflösung inkl. Wertanrechnung verwertbarer Gegenstände.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

export default function HomeLeistungen({
  eyebrow = "Unsere Leistungen",
  headline = "Was wir für Sie tun",
}) {
  return (
    <section
      className="w-full py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "#ebe5da" }}
      id="leistungen">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-3">
          <span
            className="text-[13px] font-semibold uppercase tracking-[.16em]"
            style={{ color: "#ee6a2c", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>
            {eyebrow}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black"
            style={{
              fontFamily: "'Archivo', system-ui, sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.04,
              color: "#1b1f26",
            }}>
            {headline}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leistungen.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 p-6 rounded-lg"
              style={{
                background: "#ffffff",
                borderLeft: "4px solid #ee6a2c",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}>
              <div style={{ color: "#ee6a2c" }}>{item.icon}</div>
              <h3
                className="text-xl font-bold"
                style={{
                  fontFamily: "'Archivo', system-ui, sans-serif",
                  letterSpacing: "-0.02em",
                  color: "#1b1f26",
                }}>
                {item.title}
              </h3>
              <p
                className="text-base"
                style={{
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  lineHeight: 1.6,
                  color: "#3a414c",
                }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
