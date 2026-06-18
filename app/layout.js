import "./globals.css";

// Self-hosted Schriftarten (Fontsource) – keine Verbindung zu Google-Servern (DSGVO)
import "@fontsource/archivo/200.css";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/600.css";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
import "@fontsource/archivo/900.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";

import { Navigation7 } from "@/src/components/blocks/navigation-7";

export const metadata = {
  title: "ASR Entrümpelung – Altmark",
  description: "Professionelle Entrümpelung und Haushaltsauflösung in der Altmark. Schnell, diskret und zuverlässig.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navigation7 />
        {children}
      </body>
    </html>
  );
}
