"use client";

import { motion } from "motion/react";

const versprechen = [
  {
    title: "Einfühlsam & diskret",
    description:
      "Wir verstehen, dass eine Haushaltsauflösung oft mit schwierigen Situationen verbunden ist. Unser Team geht sensibel und ohne Druck vor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Wertanrechnung",
    description:
      "Verwertbare Gegenstände, Möbel und Antiquitäten werden professionell eingeschätzt und direkt vom Preis abgezogen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Keine Vorleistung",
    description:
      "Sie müssen nichts vorbereiten. Wir kommen, besichtigen, und übernehmen alles – von der Erstbesichtigung bis zur besenreinen Übergabe.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    title: "Festpreis & transparent",
    description:
      "Nach der Besichtigung erhalten Sie ein vollständiges, verbindliches Angebot. Keine versteckten Kosten, kein Stress.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export default function HaushaltsauflösungVersprechen() {
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
            Sie sind nicht allein
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 17, lineHeight: 1.6,
            color: "rgba(243,241,236,0.55)",
            maxWidth: 480,
          }}>
            Eine Haushaltsauflösung ist mehr als das Ausräumen von Räumen.
            Wir begleiten Sie mit Verständnis und Sorgfalt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {versprechen.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-lg"
              style={{
                background: "#1d2128",
                border: "1px solid rgba(255,255,255,0.06)",
                borderTopColor: "#007DF8",
                borderTopWidth: 3,
              }}>

              <div className="flex items-center justify-center">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full"
                  style={{
                    background: "rgba(0,125,248,0.1)",
                    border: "1px solid rgba(0,125,248,0.25)",
                    color: "#007DF8",
                  }}>
                  {item.icon}
                </div>
              </div>

              <h3 className="font-bold" style={{
                fontFamily: "'Archivo', system-ui, sans-serif",
                fontSize: "1.1rem", letterSpacing: "-0.01em", lineHeight: 1.2,
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
