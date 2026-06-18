"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HomeFeature() {
  return (
    <section
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#1d2128" }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-5">
            <span style={{
              color: "#007DF8",
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: 13, fontWeight: 600,
              letterSpacing: ".16em", textTransform: "uppercase",
            }}>
              Schnell und Zuverlässig
            </span>
            <h2 style={{
              fontFamily: "'Archivo', system-ui, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              letterSpacing: "-0.02em", lineHeight: 1.04,
              color: "#f3f1ec",
            }}>
              Wir bringen<br />Ordnung rein
            </h2>
            <p style={{
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: 17, lineHeight: 1.7,
              color: "rgba(243,241,236,0.6)",
              maxWidth: 420,
            }}>
              Ob Keller, Dachboden oder ganze Wohnung – unser Team arbeitet sauber, schnell und zuverlässig. Sie müssen nur anrufen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="tel:+493931218030"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-white transition-colors hover:brightness-95 w-fit"
                style={{
                  fontFamily: "'Archivo', system-ui, sans-serif",
                  fontSize: 15,
                  background: "#007DF8",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
                }}>
                Kostenlos anfragen
              </a>
            </div>
          </motion.div>

          {/* Bild */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full rounded-lg overflow-hidden"
            style={{
              aspectRatio: "4/3",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
            <Image
              src="/comparisonPictures/messiwohnung-nachher.webp"
              alt="Sauber entrümperter Raum"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* subtiler Gradient-Overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(17,19,24,0.3) 0%, transparent 60%)" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
