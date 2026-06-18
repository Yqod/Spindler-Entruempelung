import EntruempelungHero from "@/src/components/entruempelung/EntruempelungHero.js";
import EntruempelungServices from "@/src/components/entruempelung/EntruempelungServices.js";
import EntruempelungVersprechen from "@/src/components/entruempelung/EntruempelungVersprechen.js";
import HomeKontakt from "@/src/components/home/HomeKontakt.js";
import Footer7 from "@/src/components/blocks/footer-7.jsx";
import HeroPreloader from "@/src/components/react-bits/HeroPreloader.jsx";

export const metadata = {
  title: "Entrümpelung – ASR Entrümpelung Altmark",
  description: "Wohnungen, Häuser, Büros, Schulen, Keller, Dachböden – wir entrümpeln alles. Festpreis, schnell und diskret in der Altmark.",
};

export default function EntruempelungPage() {
  return (
    <HeroPreloader videoSrc="/comparisonPictures/Furniture_and_trash_disappear_202606141640.mp4" label="Entrümpelung">
      <main className="flex flex-col overflow-x-hidden">
        <EntruempelungHero />
        <EntruempelungServices />
        <EntruempelungVersprechen />
        <HomeKontakt />
        <Footer7 />
      </main>
    </HeroPreloader>
  );
}
