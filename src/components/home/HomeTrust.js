"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";

const stats = [
  { value: 340, suffix: "+", label: "Aufträge", sub: "erfolgreich abgeschlossen" },
  { value: 15,  suffix: "+",  label: "Jahre",    sub: "Erfahrung in der Altmark" },
  { value: 24,  suffix: "h", label: "Reaktionszeit", sub: "ab Ihrer Anfrage" },
];

const usps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: "Kostenlose Besichtigung vor Ort",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2 4 5v6c0 5 3.4 7.7 8 9 4.6-1.3 8-4 8-9V5l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    text: "Festpreisgarantie – keine versteckten Kosten",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    text: "Diskret, respektvoll und zuverlässig",
  },
];

function Counter({ to, suffix = "", duration = 2 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(count, to, { duration, ease: "easeOut" });
    return ctrl.stop;
  }, [inView, to, duration, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function HomeTrust() {
  return (
    <section
      id="vertrauen"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#111318" }}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 items-center text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3">
          <span style={{
            color: "#007DF8",
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 13, fontWeight: 600,
            letterSpacing: ".16em", textTransform: "uppercase",
          }}>
            Vertrauen & Qualität
          </span>
          <h2 style={{
            fontFamily: "'Archivo', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            letterSpacing: "-0.02em", lineHeight: 1.04,
            color: "#f3f1ec",
          }}>
            Zahlen die für uns sprechen
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 w-full">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col items-center gap-2">
              <span
                className="font-black tabular-nums"
                style={{
                  fontFamily: "'Archivo', system-ui, sans-serif",
                  fontSize: "clamp(3.5rem, 7vw, 6rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "#f3f1ec",
                }}>
                <Counter to={s.value} suffix={s.suffix} />
              </span>
              <span
                className="font-bold text-xl"
                style={{
                  fontFamily: "'Archivo', system-ui, sans-serif",
                  color: "#007DF8",
                  letterSpacing: "-0.01em",
                }}>
                {s.label}
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  fontSize: 15,
                  color: "rgba(243,241,236,0.45)",
                  lineHeight: 1.5,
                }}>
                {s.sub}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg relative"
          style={{
            height: "clamp(220px, 35vw, 480px)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}>
          <img
            src="/pictures/firmenbild.png"
            alt="ASR Entrümpelung – Team"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

        {/* USPs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px w-full max-w-4xl rounded-lg overflow-hidden"
          style={{ background: "rgba(255,255,255,0.07)" }}>
          {usps.map((usp, i) => (
            <motion.div
              key={usp.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 px-6 py-8"
              style={{ background: "#111318" }}>
              <span style={{ color: "#007DF8" }}>{usp.icon}</span>
              <span
                style={{
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: "#f3f1ec",
                }}>
                {usp.text}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
