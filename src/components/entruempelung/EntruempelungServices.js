"use client";

import { motion } from "motion/react";

const services = [
  {
    title: "Wohnungen & Wohnanlagen",
    description: "Einzel- und Mehrfamilienhäuser, Mietwohnungen, WGs – komplett oder teilweise, auf Wunsch besenrein.",
    image: "/entruempelung/entruempelung-wohnung.webp",
    span: "col-span-1 sm:col-span-2 md:col-span-3",
    aspect: "aspect-[3/1]",
  },
  {
    title: "Keller",
    description: "Jahrzehnte angesammeltes Material – wir schaffen Platz schnell und gründlich.",
    image: "/entruempelung/entruempelung-keller.webp",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Büros & Praxen",
    description: "Gewerbliche Räume, Arztpraxen, Kanzleien – diskret und termingerecht.",
    image: "/entruempelung/entruempelung-rest.webp",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Dachböden",
    description: "Möbel, Kisten, alte Elektrogeräte – alles wird fachgerecht entsorgt oder verwertet.",
    image: "/entruempelung/entruempelung-dachboden.webp",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Messie-Wohnungen",
    description: "Einfühlsam, diskret und ohne Wertung – wir gehen respektvoll mit jeder Situation um.",
    image: "/entruempelung/entruempelung-messi.webp",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Schulen & Bildungseinrichtungen",
    description: "Klassen-, Lager- und Technikräume – auch während der Ferien schnell und zuverlässig.",
    image: "/entruempelung/entruempelung-schulen.webp",
    span: "col-span-1 md:col-span-2",
    aspect: "aspect-[2/1]",
  },
  {
    title: "Garagen & Stellplätze",
    description: "Öl, Altreifen, Werkzeug, alte Fahrzeugteile – wir kümmern uns um die fachgerechte Entsorgung.",
    image: "/entruempelung/entruempelung-garagen.webp",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Lager & Hallen",
    description: "Industrie- und Gewerbelagerflächen, Produktionsstätten – auch großvolumige Aufträge.",
    image: "/entruempelung/entruempelung-lager.webp",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Haushaltsauflösung",
    description: "Vollständige Auflösung nach Todesfall oder Umzug – mit Wertanrechnung verwertbarer Gegenstände.",
    image: "/entruempelung/entruempelung-haushalt.webp",
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
            color: "#007DF8",
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
            Ihr Partner in Altmark und Umgebung – wir entrümpeln Wohnungen, Keller, Büros, Dachböden, Garagen und mehr.
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
