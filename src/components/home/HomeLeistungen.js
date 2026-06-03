"use client";

import { motion } from "motion/react";
import DepthCard from "@/src/components/react-bits/depth-card";

const leistungen = [
  {
    title: "Entrümpelung von Wohnungen",
    description:
      "Keller, Dachboden, Garage oder ganze Wohnung – schnell, gründlich und zu fairen Preisen. Inklusive fachgerechter Entsorgung.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
  },
  {
    title: "Entrümpelung + Sanierung",
    description:
      "Räumen und direkt sanieren – Bodenbeläge, Reinigung und kleine Renovierungsarbeiten aus einer Hand.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85",
  },
  {
    title: "Haushaltsauflösung",
    description:
      "Einfühlsam und diskret – auch nach Todesfall. Inkl. Wertanrechnung verwertbarer Gegenstände.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=85",
  },
];

export default function HomeLeistungen() {
  return (
    <section
      id="leistungen"
      className="w-full py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#111318" }}>
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col gap-3">
          <span
            style={{
              color: "#ee6a2c",
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: ".16em",
              textTransform: "uppercase",
            }}>
            Unsere Leistungen
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
            Was wir für Sie tun
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
            Hover über die Karten für mehr Details.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {leistungen.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}>
              <DepthCard
                title={item.title}
                description={item.description}
                image={item.image}
                width={400}
                height={500}
                maxRotation={10}
                maxTranslation={10}
                borderRadius="8px"
                spotlightColor="rgba(238,106,44,0.22)"
                disableOnMobile
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
