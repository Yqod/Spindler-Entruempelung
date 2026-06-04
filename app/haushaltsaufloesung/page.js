import HaushaltsauflösungHero from "@/src/components/haushaltsaufloesung/HaushaltsauflösungHero.js";
import HaushaltsauflösungLeistungen from "@/src/components/haushaltsaufloesung/HaushaltsauflösungLeistungen.js";
import HaushaltsauflösungVersprechen from "@/src/components/haushaltsaufloesung/HaushaltsauflösungVersprechen.js";
import HomeKontakt from "@/src/components/home/HomeKontakt.js";
import Footer2 from "@/src/components/blocks/footer-2.jsx";

export const metadata = {
  title: "Haushaltsauflösung – Spindler Entrümpelung Altmark",
  description: "Haushaltsauflösungen nach Todesfall, Umzug ins Pflegeheim oder Auszug – einfühlsam, diskret und vollständig. Mit Wertanrechnung und Festpreis.",
};

export default function HaushaltsauflösungPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <HaushaltsauflösungHero />
      <HaushaltsauflösungLeistungen />
      <HaushaltsauflösungVersprechen />
      <HomeKontakt />
      <Footer2 />
    </main>
  );
}
