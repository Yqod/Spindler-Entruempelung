import SanierungHero from "@/src/components/sanierung/SanierungHero.js";
import SanierungLeistungen from "@/src/components/sanierung/SanierungLeistungen.js";
import SanierungVersprechen from "@/src/components/sanierung/SanierungVersprechen.js";
import HomeKontakt from "@/src/components/home/HomeKontakt.js";
import Footer2 from "@/src/components/blocks/footer-2.jsx";

export const metadata = {
  title: "Sanierung – Spindler Entrümpelung Altmark",
  description: "Böden, Wände, Bad, Trockenbau und mehr – wir sanieren nach der Entrümpelung direkt weiter. Festpreis, bezugsfertig, aus einer Hand.",
};

export default function SanierungPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <SanierungHero />
      <SanierungLeistungen />
      <SanierungVersprechen />
      <HomeKontakt />
      <Footer2 />
    </main>
  );
}
