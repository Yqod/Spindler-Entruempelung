"use client";

import { motion } from "motion/react";

export default function Footer7() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      style={{ background: "#111318" }}>
      <div className="relative max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr] gap-10 lg:gap-8 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <img
              src="/assets/logoo.png"
              alt="Altmark Sanierung und Räumung"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h4
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "rgba(243,241,236,0.5)", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>
              Navigation
            </h4>
            <ul
              className="flex flex-col gap-2 text-xl sm:text-2xl"
              style={{ fontFamily: "'Archivo', system-ui, sans-serif", color: "#f3f1ec" }}>
              {[
                { label: "Entrümpelung", href: "/entruempelung" },
                { label: "Sanierung", href: "/sanierung" },
                { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="transition-colors hover:text-[#007DF8]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h4
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "rgba(243,241,236,0.5)", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>
              Einsatzgebiet
            </h4>
            <p
              className="text-xl sm:text-2xl leading-tight"
              style={{ fontFamily: "'Archivo', system-ui, sans-serif", color: "#f3f1ec" }}>
              Altmark · Stendal
              <br />
              Salzwedel · Gardelegen
            </p>
          </div>
        </motion.div>

        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row gap-4 items-center sm:justify-between text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: 13,
              color: "rgba(243,241,236,0.3)",
            }}>
            © {year} ASR Entrümpelung. Alle Rechte vorbehalten.
          </p>
          <div
            className="flex items-center gap-3"
            style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontSize: 13 }}>
            <a
              href="/impressum"
              className="transition-colors hover:text-[#f3f1ec]"
              style={{ color: "rgba(243,241,236,0.5)" }}>
              Impressum
            </a>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <a
              href="/datenschutz"
              className="transition-colors hover:text-[#f3f1ec]"
              style={{ color: "rgba(243,241,236,0.5)" }}>
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
