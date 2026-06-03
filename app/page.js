import HomeHero from "@/src/components/home/HomeHero.js";
import HomeLeistungen from "@/src/components/home/HomeLeistungen.js";
import HomeComparisonSlider from "@/src/components/home/HomeComparisonSlider.js";
import HomeModelScatter from "@/src/components/home/HomeModelScatter.js";
import HomeTrust from "@/src/components/home/HomeTrust.js";
import HomeProzess from "@/src/components/home/HomeProzess.js";
import Footer2 from "@/src/components/blocks/footer-2.jsx";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HomeHero />
      <HomeLeistungen />
      <HomeComparisonSlider />
      <HomeProzess />
      <HomeModelScatter />
      <HomeTrust />
      <Footer2 />
    </main>
  );
}
