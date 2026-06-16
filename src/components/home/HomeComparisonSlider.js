"use client";

import { motion } from "motion/react";
import ComparisonSlider from "@/src/components/react-bits/comparison-slider";

export default function HomeComparisonSlider({
  beforeImage = "/comparisonPictures/altbau_vermüllt.webp",
  afterImage = "/comparisonPictures/altbau_neu.webp",
  eyebrow = "Vorher & Nachher",
  headline = "Schnell. Zuverlässig. Diskret.",
  subtext = "Sehen Sie selbst – wir hinterlassen keine Spuren außer einer sauberen, leeren Fläche.",
}) {
  return (
    <section
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#1d2128" }}>
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col items-center text-center gap-3">
          <span
            style={{
              color: "#ee6a2c",
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: ".16em",
              textTransform: "uppercase",
            }}>
            {eyebrow}
          </span>
          <h2
            style={{
              fontFamily: "'Archivo', system-ui, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.04,
              color: "#f3f1ec",
            }}>
            {headline}
          </h2>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(243,241,236,0.55)",
              maxWidth: 480,
              marginTop: 4,
            }}>
            {subtext}
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="w-full rounded-lg overflow-hidden"
          style={{
            aspectRatio: "16/9",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}>
          <ComparisonSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeAlt="Vor der Entrümpelung"
            afterAlt="Nach der Entrümpelung"
            initialPosition={50}
            showLabels={true}
            labelText={{ before: "Vorher", after: "Nachher" }}
            labelPosition="top-left"
            dividerColor="#ee6a2c"
            handleColor="#ee6a2c"
            handleSize={44}
            enableInertia={true}
            className="rounded-none"
            autoAnimate={true}
          />
        </motion.div>

      </div>
    </section>
  );
}
