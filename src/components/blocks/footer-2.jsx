"use client";

import { motion } from "motion/react";

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer2() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden">

      {/* Hintergrundbild */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(17,19,24,0.55)" }} />
      </div>

      <div className="relative overflow-hidden">
        {/* Bild-Bereich */}
        <div className="h-40 sm:h-56 md:h-72" />

        {/* Dunkler Bereich */}
        <div className="relative overflow-hidden" style={{ background: "#111318" }}>

          {/* Kurven-Ecken */}
          <div className="absolute left-0 top-0 z-10 -translate-y-full">
            <svg width="614" height="153" viewBox="0 0 614 153" fill="none"
              className="h-auto w-[140px] sm:w-[200px] md:w-[250px] relative top-px">
              <path d="M0 0H451.601C467.78 0 483.071 7.75893 491.954 21.2815C558.518 122.612 538.359 153.074 614 153H0V0Z" fill="#111318" />
            </svg>
          </div>
          <div className="absolute right-0 top-0 z-10 -translate-y-full">
            <svg width="614" height="153" viewBox="0 0 614 153" fill="none"
              className="h-auto w-[140px] sm:w-[200px] md:w-[250px] scale-x-[-1] relative top-px">
              <path d="M0 0H451.601C467.78 0 483.071 7.75893 491.954 21.2815C558.518 122.612 538.359 153.074 614 153H0V0Z" fill="#111318" />
            </svg>
          </div>

          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ staggerChildren: 0.1 }}
              className="flex flex-col items-center gap-8">

              {/* Logo */}
              <motion.div variants={item} className="text-center">
                <h2 className="font-black" style={{
                  fontFamily: "'Archivo', system-ui, sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  letterSpacing: "-0.02em", lineHeight: 1, color: "#f3f1ec",
                }}>
                  Spindler
                </h2>
                <p className="mt-1 font-semibold uppercase" style={{
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)",
                  letterSpacing: ".18em", color: "#ee6a2c",
                }}>
                  Entrümpelung
                </p>
              </motion.div>

              {/* Links */}
              <motion.div variants={item}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
                style={{
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  fontSize: 12, fontWeight: 600,
                  letterSpacing: ".14em", textTransform: "uppercase",
                }}>
                {[
                  { label: "Impressum", href: "/impressum" },
                  { label: "Datenschutz", href: "/datenschutz" },
                  { label: "Kontakt", href: "#kontakt" },
                ].map((link, i, arr) => (
                  <span key={link.label} className="flex items-center gap-3 sm:gap-5">
                    <a href={link.href}
                      style={{ color: "rgba(243,241,236,0.5)" }}
                      className="transition-colors hover:text-[#f3f1ec]">
                      {link.label}
                    </a>
                    {i < arr.length - 1 && (
                      <span style={{ color: "rgba(255,255,255,0.15)" }}>—</span>
                    )}
                  </span>
                ))}
              </motion.div>

              {/* Divider */}
              <div className="w-full" style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

              {/* Copyright */}
              <motion.div variants={item}
                className="flex w-full flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <p style={{
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  fontSize: 13, color: "rgba(243,241,236,0.3)",
                }}>
                  © {year} Spindler Entrümpelung. Alle Rechte vorbehalten.
                </p>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11, letterSpacing: ".06em",
                  color: "rgba(243,241,236,0.2)",
                }}>
                  Altmark · Stendal · Salzwedel · Gardelegen
                </p>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
