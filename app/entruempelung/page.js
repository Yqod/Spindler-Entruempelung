import EntruempelungHero from "@/src/components/entruempelung/EntruempelungHero.js";
import EntruempelungServices from "@/src/components/entruempelung/EntruempelungServices.js";
import EntruempelungVersprechen from "@/src/components/entruempelung/EntruempelungVersprechen.js";
import HomeKontakt from "@/src/components/home/HomeKontakt.js";
import Footer7 from "@/src/components/blocks/footer-7.jsx";

export const metadata = {
  title: "Entrümpelung – Spindler Entrümpelung Altmark",
  description: "Wohnungen, Häuser, Büros, Schulen, Keller, Dachböden – wir entrümpeln alles. Festpreis, schnell und diskret in der Altmark.",
};

export default function EntruempelungPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <EntruempelungHero />
      <EntruempelungServices />
      <EntruempelungVersprechen />
      <HomeKontakt />
      <Footer7 />
    </main>
  );
}
