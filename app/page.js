import HomeHero from "@/src/components/home/HomeHero.js";
import HomeLeistungen from "@/src/components/home/HomeLeistungen.js";
import HomeComparisonSlider from "@/src/components/home/HomeComparisonSlider.js";
import HomeProzess from "@/src/components/home/HomeProzess.js";
import HomeFeature from "@/src/components/home/HomeFeature.js";
import HomeTrust from "@/src/components/home/HomeTrust.js";
import HomeKontakt from "@/src/components/home/HomeKontakt.js";
import Footer2 from "@/src/components/blocks/footer-2.jsx";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <HomeHero />
      <HomeLeistungen />
      <HomeComparisonSlider />
      <HomeProzess />
      <HomeFeature />
      <HomeTrust />
      <HomeKontakt />
      <Footer2 />
    </main>
  );
}
