"use client";

import { motion } from "motion/react";

const services = [
  {
    title: "Bodenbeläge",
    description: "Fliesen, Laminat, Parkett, Vinyl und Estrich – wir verlegen fachgerecht und sauber.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
    span: "col-span-1 md:col-span-2",
    aspect: "aspect-[2/1]",
  },
  {
    title: "Malerarbeiten",
    description: "Wände und Decken streichen, tapezieren oder spachteln – für einen frischen Anfang.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Fliesenarbeiten",
    description: "Bad, Küche, Flur – wir fliesen präzise und dauerhaft, auch in schwierigen Bereichen.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Trockenbau",
    description: "Wände ziehen, Decken abhängen, Raumaufteilungen verändern – schnell und sauber.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Bad & Sanitär",
    description: "Badezimmer komplett oder teilweise sanieren – vom Austausch einzelner Elemente bis zur Kernsanierung.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Komplettsanierung",
    description: "Entrümpeln, sanieren, übergeben – wir machen Ihre Immobilie aus einer Hand bezugsfertig.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
    span: "col-span-1 md:col-span-2",
    aspect: "aspect-[2/1]",
  },
  {
    title: "Fenster & Türen",
    description: "Einbau, Tausch und Abdichtung von Fenstern, Innen- und Außentüren.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Kleinreparaturen",
    description: "Löcher schließen, Schäden ausbessern, Schimmel entfernen – keine Aufgabe ist zu klein.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Renovierung nach Auszug",
    description: "Wohnung nach Mietende schnell auf Vordermann bringen – pünktlich zur Neuvermietung.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80",
    span: "col-span-1 md:col-span-2",
    aspect: "aspect-[2/1]",
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className={`relative overflow-hidden rounded-lg group ${service.span} ${service.aspect}`}
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}>

      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(17,19,24,0.95) 0%, rgba(17,19,24,0.4) 50%, rgba(17,19,24,0.15) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
        <h3
          className="font-bold mb-2"
          style={{
            fontFamily: "'Archivo', system-ui, sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            letterSpacing: "-0.01em", lineHeight: 1.2,
            color: "#f3f1ec",
          }}>
          {service.title}
        </h3>
        <p
          className="transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 14, lineHeight: 1.55,
            color: "rgba(243,241,236,0.7)",
          }}>
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function SanierungLeistungen() {
  return (
    <section
      id="leistungen"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#1d2128" }}>
      <div className="max-w-[1400px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14 flex flex-col gap-3">
          <span style={{
            color: "#006FEF",
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 13, fontWeight: 600,
            letterSpacing: ".16em", textTransform: "uppercase",
          }}>
            Was wir sanieren
          </span>
          <h2 style={{
            fontFamily: "'Archivo', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "-0.02em", lineHeight: 1.04,
            color: "#f3f1ec",
          }}>
            Alles aus einer Hand
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 17, lineHeight: 1.6,
            color: "rgba(243,241,236,0.55)",
            maxWidth: 520,
          }}>
            Hover über die Kacheln für mehr Details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
