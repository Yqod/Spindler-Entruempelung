import { Hero9 } from "@/src/components/blocks/hero-9";

export default function HomeHero() {
  return (
    <Hero9
      videoSrc="/comparisonPictures/apartment_renovation_hero.mp4"
      poster="/comparisonPictures/altbau_neu.webp"
      eyebrow="Ihr Partner in der Region"
      titleLine1="Entrümpelung und"
      titleLine2="Sanierung"
      description="Von der Entrümpelung bis zur fertigen Sanierung – alles aus einer Hand in der Altmark und Umgebung. Schnell, diskret und zum Festpreis."
      buttons={[
        { href: "#kontakt", label: "Jetzt Anfragen", primary: true },
      ]}
    />
  );
}
