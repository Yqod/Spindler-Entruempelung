import ComparisonSlider from "@/src/components/react-bits/comparison-slider";

export default function HomeComparisonSlider({
  beforeImage = "https://images.unsplash.com/photo-1530555554800-fd2a6cc30d97?w=1400&q=85",
  afterImage = "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1400&q=85",
  eyebrow = "Vorher & Nachher",
  headline = "Der Unterschied spricht\nfür sich",
  subtext = "Wir entrümpeln Keller, Dachböden und Wohnungen – sauber, schnell und zuverlässig.",
}) {
  return (
    <section
      className="w-full py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "#f5f2ec" }}>
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center gap-3">
          <span
            className="text-[13px] font-semibold uppercase tracking-[.16em]"
            style={{ color: "#ee6a2c", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>
            {eyebrow}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black whitespace-pre-line"
            style={{
              fontFamily: "'Archivo', system-ui, sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.04,
              color: "#1b1f26",
            }}>
            {headline}
          </h2>
          <p
            className="max-w-md text-base mt-1"
            style={{
              color: "#3a414c",
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              lineHeight: 1.6,
            }}>
            {subtext}
          </p>
        </div>

        {/* Slider */}
        <div
          className="w-full rounded-lg overflow-hidden"
          style={{
            aspectRatio: "16/9",
            border: "1px solid #e2dcd1",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}>
          <ComparisonSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeAlt="Vor der Entrümpelung"
            afterAlt="Nach der Entrümpelung"
            initialPosition={50}
            showLabels={true}
            labelText={{ before: "Vorher", after: "Nachher" }}
            labelPosition="top-left"
            dividerColor="#ee6a2c"
            handleColor="#ee6a2c"
            handleSize={44}
            enableInertia={true}
            className="rounded-none"
            autoAnimate={true}
          />
        </div>

      </div>
    </section>
  );
}
