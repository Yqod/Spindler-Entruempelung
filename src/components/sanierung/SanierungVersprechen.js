"use client";

import { motion } from "motion/react";

const versprechen = [
  {
    number: "1",
    title: "Aus einer Hand",
    description:
      "Entrümpelung und Sanierung direkt im Anschluss – kein Koordinationsaufwand, ein Ansprechpartner.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Festpreis",
    description:
      "Kein böses Erwachen nach Abschluss. Wir besichtigen, kalkulieren und nennen Ihnen einen verbindlichen Preis.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Bezugsfertig übergeben",
    description:
      "Wir arbeiten bis die Immobilie bereit ist – sauber, renoviert und schlüsselfertig für Eigentümer oder neue Mieter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Regional & zuverlässig",
    description:
      "Wir sind in der Altmark verwurzelt. Kurze Wege, schnelle Reaktion, persönlicher Kontakt vor Ort.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function SanierungVersprechen() {
  return (
    <section
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#111318" }}>
      <div className="max-w-[1400px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 flex flex-col items-center text-center gap-3">
          <span style={{
            color: "#007DF8",
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 13, fontWeight: 600,
            letterSpacing: ".16em", textTransform: "uppercase",
          }}>
            Unser Versprechen
          </span>
          <h2 style={{
            fontFamily: "'Archivo', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "-0.02em", lineHeight: 1.04,
            color: "#f3f1ec",
          }}>
            Warum ASR Sanierung?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {versprechen.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col gap-4 p-6 rounded-lg"
              style={{
                background: "#1d2128",
                border: "1px solid rgba(255,255,255,0.06)",
                borderTopColor: "#007DF8",
                borderTopWidth: 3,
              }}>

              <div className="flex items-start justify-between">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full"
                  style={{
                    background: "rgba(0,125,248,0.1)",
                    border: "1px solid rgba(0,125,248,0.25)",
                    color: "#007DF8",
                  }}>
                  {item.icon}
                </div>
                <span
                  className="font-black"
                  style={{
                    fontFamily: "'Archivo', system-ui, sans-serif",
                    fontSize: "2.5rem",
                    letterSpacing: "-0.03em", lineHeight: 1,
                    color: "rgba(243,241,236,0.06)",
                  }}>
                  {item.number}
                </span>
              </div>

              <h3 className="font-bold" style={{
                fontFamily: "'Archivo', system-ui, sans-serif",
                fontSize: "1.1rem",
                letterSpacing: "-0.01em", lineHeight: 1.2,
                color: "#f3f1ec",
              }}>
                {item.title}
              </h3>

              <p style={{
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                fontSize: 15, lineHeight: 1.65,
                color: "rgba(243,241,236,0.55)",
              }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
