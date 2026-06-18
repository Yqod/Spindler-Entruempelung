"use client";

import Image from "next/image";
import { motion } from "motion/react";

function BlurText({ text, delay = 0 }) {
  const words = text.split(" ");

  return (
    <span className="inline-flex flex-wrap">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex mr-[0.25em]">
          {word.split("").map((char, charIndex) => {
            const totalIndex =
              words.slice(0, wordIndex).join("").length + charIndex + wordIndex;
            return (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, filter: "blur(12px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.4,
                  delay: delay + totalIndex * 0.03,
                  ease: "easeOut",
                }}
                className="inline-block">
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

const GooglePlayIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

const ICONS = { google: GooglePlayIcon };

export function Hero9({
  videoSrc = "https://videos.pexels.com/video-files/1409899/1409899-uhd_2560_1440_25fps.mp4",
  poster = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  eyebrow = "",
  titleLine1 = "Entrümpelung &",
  titleLine2 = "Sanierung",
  description = "",
  tagline = "",
  buttons = [],
}) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={poster}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      {/* Verlauf statt flachem Overlay – mehr Tiefe, bessere Lesbarkeit unten */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(8,10,14,0.88) 0%, rgba(8,10,14,0.45) 38%, rgba(8,10,14,0.12) 70%, rgba(8,10,14,0.25) 100%)",
        }}
      />

      <div className="relative z-10 min-h-screen flex items-end px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 lg:pb-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="max-w-4xl flex flex-col items-start text-left gap-5 sm:gap-6">

            

            {/* Headline */}
            <h1
              className="text-[2rem] min-[420px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white"
              style={{
                fontFamily: "'Archivo', system-ui, sans-serif",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
              }}>
              <span className="block" style={{ fontWeight: 200 }}>
                <BlurText text={titleLine1} delay={0.15} />
              </span>
              <span className="block" style={{ color: "#007DF8" }}>
                <BlurText text={titleLine2} delay={0.5} />
              </span>
            </h1>

            {/* Info-Zeile: Standort + Tagline */}
            {(description || tagline) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1"
                style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>
                {description && (
                  <span className="flex items-center gap-2 text-base sm:text-lg text-white/90">
                    <svg
                      className="w-[18px] h-[18px] shrink-0"
                      style={{ color: "#007DF8" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {description}
                  </span>
                )}
                {description && tagline && (
                  <span className="hidden sm:block h-4 w-px bg-white/25" />
                )}
                {tagline && (
                  <span className="text-base sm:text-lg text-white/65">
                    {tagline}
                  </span>
                )}
              </motion.div>
            )}

            {buttons.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="flex flex-row flex-wrap gap-3 pt-2">
                {buttons.map(({ href, icon, imgSrc, sublabel, label, primary }, i) => {
                  const Icon = ICONS[icon];
                  const orangeStyle = {
                    background: "#007DF8",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
                  };
                  return (
                    <a
                      key={i}
                      href={href}
                      className={primary
                        ? "flex items-center justify-center gap-2 px-9 py-4 rounded-lg text-white text-base sm:text-lg transition-colors duration-200 hover:brightness-95 cursor-pointer"
                        : "flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-white text-base transition-colors hover:bg-white/15 cursor-pointer"
                      }
                      style={primary
                        ? { ...orangeStyle, fontFamily: "'Archivo', system-ui, sans-serif", fontWeight: 700 }
                        : { background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }
                      }>
                      {imgSrc ? (
                        <Image src={imgSrc} alt={label} width={96} height={32} className="h-8 w-auto object-contain" />
                      ) : (
                        <>
                          {Icon && <Icon />}
                          {!Icon && label}
                          {Icon && (
                            <div className="flex flex-col items-start">
                              <span className="text-[10px] opacity-70 leading-none">{sublabel}</span>
                              <span className="text-sm font-semibold leading-tight">{label}</span>
                            </div>
                          )}
                        </>
                      )}
                    </a>
                  );
                })}
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
