"use client";

import { motion } from "motion/react";

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

export default function HomeKontakt({
  phone = "03931 · 21 80 30",
  phoneHref = "tel:+493931218030",
  whatsappHref = "https://wa.me/491511000000",
}) {
  return (
    <section
      id="kontakt"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#111318" }}>
      <div className="max-w-[860px] mx-auto flex flex-col items-center text-center gap-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4">
          <span style={{
            color: "#006FEF",
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 13, fontWeight: 600,
            letterSpacing: ".16em", textTransform: "uppercase",
          }}>
            Kontakt
          </span>
          <h2 style={{
            fontFamily: "'Archivo', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            letterSpacing: "-0.02em", lineHeight: 1.04,
            color: "#f3f1ec",
          }}>
            Bereit für einen{" "}
            <span style={{ color: "#006FEF" }}>sauberen Neustart?</span>
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 17, lineHeight: 1.6,
            color: "rgba(243,241,236,0.55)",
            maxWidth: 480, marginTop: 4,
          }}>
            Sprechen Sie uns an – kostenlos, unverbindlich und unkompliziert.
          </p>
        </motion.div>

        <motion.a
          href={phoneHref}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          style={{
            fontFamily: "'Archivo', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.03em", lineHeight: 1,
            color: "#f3f1ec", textDecoration: "none",
          }}>
          {phone}
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a href={phoneHref}
            className="flex items-center justify-center gap-2.5 px-9 py-4 rounded-lg text-white text-base sm:text-lg transition-colors duration-200 hover:brightness-95"
            style={{
              fontFamily: "'Archivo', system-ui, sans-serif", fontWeight: 700,
              background: "#006FEF",
              boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
            }}>
            <PhoneIcon /> Jetzt anrufen
          </a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-white text-base sm:text-lg transition-colors hover:bg-white/10"
            style={{
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontWeight: 600,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.16)",
            }}>
            <WhatsAppIcon /> WhatsApp schreiben
          </a>
        </motion.div>

      </div>
    </section>
  );
}
