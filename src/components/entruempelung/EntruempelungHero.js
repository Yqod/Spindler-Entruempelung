"use client";

import { motion } from "motion/react";

const orangeBtn = {
  background: "linear-gradient(180deg, rgba(238,106,44,0.92), rgba(216,88,31,0.92))",
  border: "1px solid rgba(255,255,255,0.22)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), 0 4px 16px rgba(238,106,44,0.25)",
};

export default function EntruempelungHero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-end overflow-hidden px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">

      {/* Video-Hintergrund */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80">
        <source
          src="https://videos.pexels.com/video-files/1409899/1409899-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="max-w-3xl flex flex-col gap-6">

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              color: "#ee6a2c",
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: 13, fontWeight: 600,
              letterSpacing: ".16em", textTransform: "uppercase",
            }}>
            Professionelle Entrümpelung
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Archivo', system-ui, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 8vw, 7rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.04,
              color: "#f3f1ec",
            }}>
            Wir entrümpeln{" "}
            <span >alles.</span>
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
            Von der Einzimmerwohnung bis zum Industrielager – kein Auftrag ist zu groß oder zu klein.
            Schnell, diskret und zum Festpreis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#kontakt"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white transition-all hover:-translate-y-0.5"
              style={{ ...orangeBtn, fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 16 }}>
              Kostenlos anfragen
            </a>
            <a
              href="#leistungen"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold transition-all hover:-translate-y-0.5"
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
