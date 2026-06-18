import "./globals.css";
import { Navigation7 } from "@/src/components/blocks/navigation-7";

export const metadata = {
  title: "ASR Entrümpelung – Altmark",
  description: "Professionelle Entrümpelung und Haushaltsauflösung in der Altmark. Schnell, diskret und zuverlässig.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navigation7 />
        {children}
      </body>
    </html>
  );
}
