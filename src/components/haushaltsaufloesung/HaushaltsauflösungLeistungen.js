"use client";

import { motion } from "motion/react";

const services = [
  {
    title: "Nach einem Todesfall",
    description:
      "Wir gehen mit dem Nachlass eines Verstorbenen behutsam und respektvoll um. Persönliche Gegenstände werden nach Ihren Wünschen behandelt – nichts geht verloren ohne Ihre Zustimmung.",
    image: "/haushaltsaufloesung/haushaltsaufloesung-tod.png",
    span: "col-span-1 sm:col-span-2 md:col-span-3",
    aspect: "sm:aspect-[2/1] md:aspect-[3/1]",
  },
  {
    title: "Umzug ins Pflegeheim",
    description: "Wenn ein Angehöriger in eine Pflegeeinrichtung zieht, übernehmen wir die gesamte Wohnungsauflösung – schnell und ohne zusätzliche Last für die Familie.",
    image: "/haushaltsaufloesung/haushaltsaufloesung-umzug-pflegeheim.png",
    span: "col-span-1",
    aspect: "sm:aspect-square",
  },
  {
    title: "Wertanrechnung",
    description: "Verwertbare Möbel, Antiquitäten und Gegenstände werden bewertet und vom Auftragspreis abgezogen. Sie profitieren direkt.",
    image: "/haushaltsaufloesung/haushaltsaufloesung-wertanrechnung.png",
    span: "col-span-1",
    aspect: "sm:aspect-square",
  },
  {
    title: "Möbel & Inventar",
    description: "Schwere Möbel, Küchen, Elektrogeräte – wir demontieren, tragen aus und entsorgen oder verwerten alles fachgerecht.",
    image: "/haushaltsaufloesung/haushaltsaufloesung-moebel.png",
    span: "col-span-1",
    aspect: "sm:aspect-square",
  },
  {
    title: "Wohnungsauflösung",
    description: "Komplette Auflösung bei Auszug, Zwangsräumung oder Eigentümerwechsel – besenrein und termingerecht übergeben.",
    image: "/haushaltsaufloesung/haushaltsaufloesung-wohnung.png",
    span: "col-span-1 md:col-span-2",
    aspect: "sm:aspect-square md:aspect-[2/1]",
  },
  {
    title: "Nachlassverwaltung",
    description: "Wir unterstützen bei der Sichtung und Sortierung des Nachlasses – was bleibt, was geht, was gespendet wird.",
    image: "/haushaltsaufloesung/haushaltsaufloesung-nachlass.png",
    span: "col-span-1",
    aspect: "sm:aspect-square",
  },
  {
    title: "Besenreine Übergabe",
    description: "Nach der Auflösung reinigen wir die Räume auf Wunsch vollständig – bereit für Vermieter, Käufer oder Erben.",
    image: "/haushaltsaufloesung/haushaltsaufloesung-besenrein.png",
    span: "col-span-1",
    aspect: "sm:aspect-square",
  },
  {
    title: "Alles aus einer Hand",
    description: "Von der ersten Besichtigung bis zur Schlüsselübergabe – wir koordinieren alles, Sie müssen sich um nichts kümmern.",
    image: "/haushaltsaufloesung/haushaltsaufloesung-alles.png",
    span: "col-span-1 md:col-span-2",
    aspect: "sm:aspect-square md:aspect-[2/1]",
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className={`relative overflow-hidden rounded-lg group ${service.span} aspect-[4/3] ${service.aspect}`}
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
          className="transition-all duration-300 opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0"
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

export default function HaushaltsauflösungLeistungen() {
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
            Unsere Leistungen
          </span>
          <h2 style={{
            fontFamily: "'Archivo', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "-0.02em", lineHeight: 1.04,
            color: "#f3f1ec",
          }}>
            Für jeden Schritt<br />an Ihrer Seite
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: 17, lineHeight: 1.6,
            color: "rgba(243,241,236,0.55)",
            maxWidth: 520,
          }}>
            Jede Haushaltsauflösung ist anders. Wir passen uns Ihrer Situation an –
            diskret, respektvoll und ohne Zeitdruck.
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
