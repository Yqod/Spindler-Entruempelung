import HomeHero from "@/src/components/home/HomeHero.js";
import HomeLeistungen from "@/src/components/home/HomeLeistungen.js";
import HomeComparisonSlider from "@/src/components/home/HomeComparisonSlider.js";
import HomeProzess from "@/src/components/home/HomeProzess.js";
import HomeFeature from "@/src/components/home/HomeFeature.js";
import HomeTrust from "@/src/components/home/HomeTrust.js";
import HomeKontakt from "@/src/components/home/HomeKontakt.js";
import Footer7 from "@/src/components/blocks/footer-7.jsx";
import HeroPreloader from "@/src/components/react-bits/HeroPreloader.jsx";

export default function Home() {
  return (
    <HeroPreloader videoSrc="/comparisonPictures/apartment_renovation_hero.mp4" label="Entrümpelung & Sanierung">
      <main className="flex flex-col overflow-x-hidden">
        <HomeHero />
        <HomeLeistungen />
        <HomeComparisonSlider />
        <HomeProzess />
        <HomeFeature />
        <HomeTrust />
        <HomeKontakt />
        <Footer7 />
      </main>
    </HeroPreloader>
  );
}
