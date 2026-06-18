"use client";

import { motion } from "motion/react";

const versprechen = [
  {
    number: "1",
    title: "Festpreis garantiert",
    description:
      "Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Angebot. Was wir sagen, gilt – keine Nachforderungen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Schnell & pünktlich",
    description:
      "Wir halten Termine ein. Innerhalb von 24 Stunden Rückmeldung, meist innerhalb weniger Tage vor Ort.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Diskret & respektvoll",
    description:
      "Ob Todesfall, Messie-Wohnung oder Zwangsräumung – wir gehen mit jeder Situation sensibel und ohne Wertung um.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Vollständig & sauber",
    description:
      "Wir entrümpeln komplett – auf Wunsch inkl. Reinigung. Verwertbare Gegenstände werden angerechnet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
      </svg>
    ),
  },
];

export default function EntruempelungVersprechen() {
  return (
    <section
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#111318" }}>
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
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
            Ihr Vorteil mit ASR
          </h2>
        </motion.div>

        {/* Grid */}
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
                borderTop: "3px solid #007DF8",
                border: "1px solid rgba(255,255,255,0.06)",
                borderTopColor: "#007DF8",
              }}>

              {/* Icon + Nummer */}
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
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    color: "rgba(243,241,236,0.06)",
                  }}>
                  {item.number}
                </span>
              </div>

              <h3
                className="font-bold"
                style={{
                  fontFamily: "'Archivo', system-ui, sans-serif",
                  fontSize: "1.1rem",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
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
