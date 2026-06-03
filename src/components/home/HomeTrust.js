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
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
      </svg>
    ),
    text: "Kostenlose Besichtigung vor Ort",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
      </svg>
    ),
    text: "Festpreisgarantie – keine versteckten Kosten",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
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
      className="w-full py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#111318" }}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 items-center text-center">

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
                  color: "#ee6a2c",
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

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

        {/* USPs */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full"
              style={{
                background: "rgba(20,23,29,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
              }}>
              <span style={{ color: "#ee6a2c" }}>{usp.icon}</span>
              <span
                style={{
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "rgba(243,241,236,0.85)",
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
