import Footer7 from "@/src/components/blocks/footer-7.jsx";

export const metadata = {
  title: "Impressum – ASR Entrümpelung",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG.",
  robots: { index: false, follow: true },
};

const accent = "#007DF8";
const text = "#f3f1ec";
const muted = "rgba(243,241,236,0.62)";
const heading = { fontFamily: "'Archivo', system-ui, sans-serif", fontWeight: 800, letterSpacing: "-0.01em", color: text };
const body = { fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontSize: 16, lineHeight: 1.7, color: muted };

function Block({ title, children }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 style={{ ...heading, fontSize: "1.25rem" }}>{title}</h2>
      <div style={body} className="flex flex-col gap-2">
        {children}
      </div>
    </section>
  );
}

export default function ImpressumPage() {
  return (
    <main className="flex flex-col overflow-x-hidden" style={{ background: "#111318" }}>
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-[820px] mx-auto flex flex-col gap-10">

          <header className="flex flex-col gap-3">
            <span style={{
              color: accent,
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: 13, fontWeight: 600,
              letterSpacing: ".16em", textTransform: "uppercase",
            }}>
              Rechtliches
            </span>
            <h1 style={{ ...heading, fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
              Impressum
            </h1>
          </header>

          {/* TODO: Echte Daten nachtragen – aktuell Platzhalter (Max Mustermann). */}
          <Block title="Angaben gemäß § 5 DDG">
            <p>
              Max Mustermann{/* TODO: Name des Inhabers */}
              <br />
              ASR – Altmark Sanierung und Räumung{/* TODO: Geschäftsbezeichnung */}
              <br />
              Musterstraße 1{/* TODO: Straße & Hausnummer */}
              <br />
              39576 Stendal{/* TODO: PLZ & Ort */}
            </p>
            <p style={{ color: muted, fontSize: 14 }}>Einzelunternehmen</p>
          </Block>

          <Block title="Kontakt">
            <p>
              Telefon:{" "}
              <a href="tel:+493931218030" style={{ color: text }}>03931 · 21 80 30</a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@asr-altmark.de" style={{ color: text }}>info@asr-altmark.de</a>
              {/* TODO: Echte E-Mail-Adresse eintragen */}
            </p>
          </Block>

          <Block title="Umsatzsteuer-Identifikationsnummer">
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE123456789{/* TODO: Echte USt-IdNr. eintragen */}
            </p>
          </Block>

          {/* TODO: Nur beibehalten, falls eine Eintragung in der Handwerksrolle besteht – sonst diesen Block löschen. */}
          <Block title="Kammer & Berufsrechtliche Angaben (bitte prüfen)">
            <p>
              Sofern ein eintragungspflichtiges Handwerk ausgeübt wird, sind hier die
              zuständige Handwerkskammer, die gesetzliche Berufsbezeichnung sowie der
              Staat, in dem sie verliehen wurde, anzugeben. Bitte vor Veröffentlichung klären:
            </p>
            <p style={{ color: muted }}>
              Zuständige Kammer: <em>[noch zu prüfen]</em>
              <br />
              Gesetzliche Berufsbezeichnung: <em>[noch zu prüfen]</em>
              <br />
              Verliehen in: Bundesrepublik Deutschland
            </p>
          </Block>

          <Block title="Redaktionell verantwortlich (§ 18 Abs. 2 MStV)">
            <p>
              Max Mustermann{/* TODO */}
              <br />
              Anschrift wie oben
            </p>
          </Block>

          <Block title="Verbraucherstreitbeilegung">
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
            </p>
          </Block>

          <Block title="Haftung für Inhalte">
            <p>
              Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
              jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß den
              allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich.
              Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder
              Informationen besteht nach den gesetzlichen Vorgaben nicht.
            </p>
          </Block>

          <Block title="Haftung für Links">
            <p>
              Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter,
              auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte ist
              stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei
              Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
            </p>
          </Block>

          <Block title="Urheberrecht">
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
              gekennzeichnet. Vervielfältigung, Bearbeitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.
            </p>
          </Block>

        </div>
      </section>

      <Footer7 />
    </main>
  );
}
