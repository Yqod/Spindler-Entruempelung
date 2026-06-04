"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const steps = [
  {
    number: "1",
    title: "Kostenlose Anfrage",
    description:
      "Rufen Sie uns an oder schreiben Sie uns – wir melden uns innerhalb von 24 Stunden und besprechen Ihr Anliegen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Vor-Ort-Besichtigung",
    description:
      "Wir kommen zu Ihnen und schauen uns alles in Ruhe an. Sie erhalten sofort ein verbindliches Festpreisangebot – ohne versteckte Kosten.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Professionelle Entrümpelung",
    description:
      "Unser Team räumt alles pünktlich und sorgfältig aus – inklusive fachgerechter Entsorgung. Sie müssen nichts weiter tun.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

function Step({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative flex flex-col items-center text-center flex-1">

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.55, delay: index * 0.18, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-col items-center gap-5 relative z-10 px-4">

        {/* Icon circle */}
        <div
          className="flex items-center justify-center w-14 h-14 rounded-full"
          style={{
            background: "rgba(238,106,44,0.12)",
            border: "1px solid rgba(238,106,44,0.3)",
            color: "#ee6a2c",
          }}>
          {step.icon}
        </div>

        {/* Number */}
        <span
          className="font-black leading-none"
          style={{
            fontFamily: "'Archivo', system-ui, sans-serif",
            fontSize: "clamp(3rem, 5vw, 4.5rem)",
            letterSpacing: "-0.03em",
            color: "rgba(243,241,236,0.08)",
            marginTop: -8,
            marginBottom: -12,
          }}>
          {step.number}
        </span>

        {/* Title */}
        <h3
          className="font-bold text-xl"
          style={{
            fontFamily: "'Archivo', system-ui, sans-serif",
            letterSpacing: "-0.02em",
            color: "#f3f1ec",
          }}>
          {step.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 15,
            lineHeight: 1.65,
            color: "rgba(243,241,236,0.55)",
            maxWidth: 280,
          }}>
          {step.description}
        </p>

      </motion.div>
    </div>
  );
}

export default function HomeProzess() {
  const stepsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#111318" }}
      id="prozess">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-3">
          <span
            style={{
              color: "#ee6a2c",
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: ".16em",
              textTransform: "uppercase",
            }}>
            In 3 Schritten
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
            Einfach, schnell &amp; unkompliziert
          </h2>
        </motion.div>

        {/* Steps */}
        <div ref={stepsRef} className="relative flex flex-col md:flex-row gap-12 md:gap-0">

          {/* Scroll-getriebene Verbindungslinie (nur Desktop) */}
          <div
            className="hidden md:block absolute h-px"
            style={{
              top: 28,
              left: "16.67%",
              right: "16.67%",
              background: "rgba(255,255,255,0.07)",
            }}>
            <motion.div
              className="h-full origin-left"
              style={{
                width: lineWidth,
                background: "linear-gradient(90deg, #ee6a2c, rgba(238,106,44,0.25))",
              }}
            />
          </div>
          {steps.map((step, index) => (
            <Step
              key={step.number}
              step={step}
              index={index}
            />
          ))}
        </div> {/* end scroll line wrapper */}


      </div>
    </section>
  );
}
