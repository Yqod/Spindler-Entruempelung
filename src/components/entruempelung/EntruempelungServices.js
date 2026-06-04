"use client";

import { motion } from "motion/react";

const services = [
  {
    title: "Wohnungen & Wohnanlagen",
    description: "Einzel- und Mehrfamilienhäuser, Mietwohnungen, WGs – komplett oder teilweise, auf Wunsch besenrein.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    span: "col-span-1 sm:col-span-2 md:col-span-3",
    aspect: "aspect-[3/1]",
  },
  {
    title: "Keller",
    description: "Jahrzehnte angesammeltes Material – wir schaffen Platz schnell und gründlich.",
    image: "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Büros & Praxen",
    description: "Gewerbliche Räume, Arztpraxen, Kanzleien – diskret und termingerecht.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Dachböden",
    description: "Möbel, Kisten, alte Elektrogeräte – alles wird fachgerecht entsorgt oder verwertet.",
    image: "https://images.unsplash.com/photo-1558618047-3b34bfdb4bec?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Messie-Wohnungen",
    description: "Einfühlsam, diskret und ohne Wertung – wir gehen respektvoll mit jeder Situation um.",
    image: "https://images.unsplash.com/photo-1530555554800-fd2a6cc30d97?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Schulen & Bildungseinrichtungen",
    description: "Klassen-, Lager- und Technikräume – auch während der Ferien schnell und zuverlässig.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80",
    span: "col-span-1 md:col-span-2",
    aspect: "aspect-[2/1]",
  },
  {
    title: "Garagen & Stellplätze",
    description: "Öl, Altreifen, Werkzeug, alte Fahrzeugteile – wir kümmern uns um die fachgerechte Entsorgung.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Lager & Hallen",
    description: "Industrie- und Gewerbelagerflächen, Produktionsstätten – auch großvolumige Aufträge.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Haushaltsauflösung",
    description: "Vollständige Auflösung nach Todesfall oder Umzug – mit Wertanrechnung verwertbarer Gegenstände.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
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
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            color: "#f3f1ec",
          }}>
          {service.title}
        </h3>
        <p
          className="transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 14,
            lineHeight: 1.55,
            color: "rgba(243,241,236,0.7)",
          }}>
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function EntruempelungServices() {
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
            color: "#ee6a2c",
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 13, fontWeight: 600,
            letterSpacing: ".16em", textTransform: "uppercase",
          }}>
            Was wir entrümpeln
          </span>
          <h2 style={{
            fontFamily: "'Archivo', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "-0.02em", lineHeight: 1.04,
            color: "#f3f1ec",
          }}>
            Für jeden Auftrag<br />das richtige Team
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 17, lineHeight: 1.6,
            color: "rgba(243,241,236,0.55)",
            maxWidth: 520,
          }}>
            Hover über die Kacheln für mehr Details zu jedem Bereich.
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
