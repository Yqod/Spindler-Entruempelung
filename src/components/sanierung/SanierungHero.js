"use client";

import { motion } from "motion/react";

const orangeBtn = {
  background: "#007DF8",
  boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
};

export default function SanierungHero() {
  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80">
        <source
          src="/comparisonPictures/apartment_renovation_hero.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/45" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="max-w-3xl flex flex-col gap-6">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Archivo', system-ui, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.04,
              color: "#f3f1ec",
            }}>
            Von leer bis{" "}
            <span>bezugsfertig.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: 18, lineHeight: 1.65,
              color: "rgba(243,241,236,0.6)",
              maxWidth: 540,
            }}>
            Nach der Entrümpelung übernehmen wir direkt die Sanierung –
            Böden, Wände, Bad, Elektro. Alles aus einer Hand, zum Festpreis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#kontakt"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-bold text-white transition-colors hover:brightness-95"
              style={{ ...orangeBtn, fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 16 }}>
              Kostenlos anfragen
            </a>
            <a
              href="#leistungen"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-bold transition-colors hover:bg-white/10"
              style={{
                fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 16,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#f3f1ec",
              }}>
              Alle Leistungen
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
