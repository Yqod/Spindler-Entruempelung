"use client";

import { motion } from "motion/react";

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer2({
  phone = "03931 · 21 80 30",
  phoneHref = "tel:+493931218030",
  whatsappHref = "https://wa.me/491511000000",
  email = "info@spindler-entruempelung.de",
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden" id="kontakt">

      {/* Hintergrundbild */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(17,19,24,0.6)" }} />
      </div>

      <div className="relative">
        {/* Nur das Bild */}
        <div className="h-64 sm:h-80 md:h-96" />

        {/* Dunkler Footer-Bereich */}
        <div className="relative" style={{ background: "#111318" }}>

          {/* Kurven-Ecken */}
          <div className="absolute left-0 top-0 z-10 -translate-y-full">
            <svg width="614" height="153" viewBox="0 0 614 153" fill="none" className="h-auto w-[140px] sm:w-[200px] md:w-[250px] relative top-px">
              <path d="M0 0H451.601C467.78 0 483.071 7.75893 491.954 21.2815C558.518 122.612 538.359 153.074 614 153H0V0Z" fill="#111318" />
            </svg>
          </div>
          <div className="absolute right-0 top-0 z-10 -translate-y-full">
            <svg width="614" height="153" viewBox="0 0 614 153" fill="none" className="h-auto w-[250px] scale-x-[-1] relative top-px">
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

              {/* Kontakt */}
              <motion.div variants={item} className="flex flex-col items-center text-center gap-6 w-full max-w-[720px]">
                <span style={{
                  color: "#ee6a2c", fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  fontSize: 13, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase",
                }}>
                  Kontakt
                </span>
                <h2 style={{
                  fontFamily: "'Archivo', system-ui, sans-serif", fontWeight: 900,
                  fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.02em",
                  lineHeight: 1.04, color: "#f3f1ec",
                }}>
                  Bereit für einen{" "}
                  <span style={{ color: "#ee6a2c" }}>sauberen Neustart?</span>
                </h2>
                <motion.a href={phoneHref} whileHover={{ scale: 1.04 }} style={{
                  fontFamily: "'Archivo', system-ui, sans-serif", fontWeight: 900,
                  fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", letterSpacing: "-0.03em",
                  lineHeight: 1, color: "#f3f1ec", textDecoration: "none",
                }}>
                  {phone}
                </motion.a>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={phoneHref}
                    className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white transition-all hover:-translate-y-0.5"
                    style={{
                      fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 16,
                      background: "linear-gradient(180deg, rgba(238,106,44,.92), rgba(216,88,31,.92))",
                      border: "1px solid rgba(255,255,255,0.22)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), 0 4px 16px rgba(238,106,44,0.3)",
                    }}>
                    <PhoneIcon /> Jetzt anrufen
                  </a>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white transition-all hover:-translate-y-0.5"
                    style={{
                      fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 16,
                      background: "linear-gradient(180deg, rgba(37,211,102,.9), rgba(31,190,90,.9))",
                      border: "1px solid rgba(255,255,255,0.2)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 16px rgba(37,211,102,0.2)",
                    }}>
                    <WhatsAppIcon /> WhatsApp schreiben
                  </a>
                </div>
              </motion.div>

              {/* Trennlinie */}
              <div className="w-full" style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

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
                    <a href={link.href} style={{ color: "rgba(243,241,236,0.5)" }}
                      className="transition-colors hover:text-[#f3f1ec]">
                      {link.label}
                    </a>
                    {i < arr.length - 1 && (
                      <span style={{ color: "rgba(255,255,255,0.15)" }}>—</span>
                    )}
                  </span>
                ))}
              </motion.div>

              {/* Trennlinie */}
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
