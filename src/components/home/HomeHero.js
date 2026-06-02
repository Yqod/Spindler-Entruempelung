import { Hero9 } from "@/src/components/blocks/hero-9";

export default function HomeHero() {
  return (
    <Hero9
      videoSrc="https://videos.pexels.com/video-files/1409899/1409899-uhd_2560_1440_25fps.mp4"
      poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
      titleLine1="Ihr Experte für"
      titleLine2="Entrümpelung"
      description="Altmark und Umgebung"
      
      buttons={[
        { href: "#kontakt", label: "Jetzt Anfragen", primary: true },
      ]}
    />
  );
}
