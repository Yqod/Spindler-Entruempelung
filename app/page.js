import HomeHero from "@/src/components/home/HomeHero.js";
import HomeLeistungen from "@/src/components/home/HomeLeistungen.js";
import HomeModelScatter from "@/src/components/home/HomeModelScatter.js";
import HomeComparisonSlider from "@/src/components/home/HomeComparisonSlider.js";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HomeHero />
      <HomeComparisonSlider />
      <HomeLeistungen />
      <HomeModelScatter />
    </main>
  );
}
