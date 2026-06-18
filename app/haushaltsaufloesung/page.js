import HaushaltsauflösungHero from "@/src/components/haushaltsaufloesung/HaushaltsauflösungHero.js";
import HaushaltsauflösungLeistungen from "@/src/components/haushaltsaufloesung/HaushaltsauflösungLeistungen.js";
import HaushaltsauflösungVersprechen from "@/src/components/haushaltsaufloesung/HaushaltsauflösungVersprechen.js";
import HomeKontakt from "@/src/components/home/HomeKontakt.js";
import Footer7 from "@/src/components/blocks/footer-7.jsx";
import HeroPreloader from "@/src/components/react-bits/HeroPreloader.jsx";

export const metadata = {
  title: "Haushaltsauflösung – ASR Entrümpelung Altmark",
  description: "Haushaltsauflösungen nach Todesfall, Umzug ins Pflegeheim oder Auszug – einfühlsam, diskret und vollständig. Mit Wertanrechnung und Festpreis.",
};

export default function HaushaltsauflösungPage() {
  return (
    <HeroPreloader videoSrc="/comparisonPictures/haushaltsauflösung_video.mp4" label="Haushaltsauflösung">
      <main className="flex flex-col overflow-x-hidden">
        <HaushaltsauflösungHero />
        <HaushaltsauflösungLeistungen />
        <HaushaltsauflösungVersprechen />
        <HomeKontakt />
        <Footer7 />
      </main>
    </HeroPreloader>
  );
}
