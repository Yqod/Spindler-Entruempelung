import { Hero9 } from "@/src/components/blocks/hero-9";

export default function HomeHero() {
  return (
    <Hero9
      videoSrc="/comparisonPictures/apartment_renovation_hero.mp4"
      poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
      titleLine1="Entrümpelung und"
      titleLine2="Sanierung"
      description="Altmark und Umgebung"
      
      buttons={[
        { href: "#kontakt", label: "Jetzt Anfragen", primary: true },
      ]}
    />
  );
}
