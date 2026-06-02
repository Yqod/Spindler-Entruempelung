"use client";

import dynamic from "next/dynamic";

const ModelScatterCanvas = dynamic(
  () => import("./ModelScatterCanvas"),
  { ssr: false, loading: () => null }
);

export default function HomeModelScatter() {
  return (
    <section
      id="house-section"
      className="relative w-full"
      style={{ height: "220vh", background: "#171a20" }}>

      {/* Sticky viewport — Canvas + Text bleiben während dem Scrollen stehen */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">

        {/* Text links */}
        <div
          className="absolute inset-y-0 left-0 z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-20 pointer-events-none"
          style={{ maxWidth: "45%" }}>
          <span
            style={{
              color: "#ee6a2c",
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              marginBottom: 16,
              display: "block",
            }}>
            Scroll um zu sehen
          </span>
          <h2
            style={{
              fontFamily: "'Archivo', system-ui, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.04,
              color: "#f3f1ec",
              marginBottom: 20,
            }}>
            Wir bringen<br />Ordnung rein
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 17,
            lineHeight: 1.6,
            color: "rgba(243,241,236,0.68)",
            maxWidth: 320,
          }}>
            Jedes Teil hat seinen Platz — wir sorgen dafür, dass er wieder frei wird.
          </p>
        </div>

        {/* Three.js Canvas — füllt die rechte Seite (und ganzen Screen) */}
        <ModelScatterCanvas sectionId="house-section" />
      </div>
    </section>
  );
}
