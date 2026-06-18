import Footer7 from "@/src/components/blocks/footer-7.jsx";

export const metadata = {
  title: "Datenschutzerklärung – ASR Entrümpelung",
  description: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  robots: { index: false, follow: true },
};

const accent = "#007DF8";
const text = "#f3f1ec";
const muted = "rgba(243,241,236,0.62)";
const heading = { fontFamily: "'Archivo', system-ui, sans-serif", fontWeight: 800, letterSpacing: "-0.01em", color: text };
const body = { fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontSize: 16, lineHeight: 1.7, color: muted };
const linkStyle = { color: text };

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

export default function DatenschutzPage() {
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
              Datenschutzerklärung
            </h1>
            <p style={{ ...body, fontSize: 15 }}>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend
              informieren wir Sie gemäß der Datenschutz-Grundverordnung (DSGVO) darüber,
              welche Daten beim Besuch dieser Website verarbeitet werden.
            </p>
          </header>

          {/* TODO: Echte Daten nachtragen – aktuell Platzhalter (Max Mustermann). */}
          <Block title="1. Verantwortlicher">
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Max Mustermann{/* TODO: Name */}
              <br />
              ASR – Altmark Sanierung und Räumung{/* TODO: Geschäftsbezeichnung */}
              <br />
              Musterstraße 1, 39576 Stendal{/* TODO: Anschrift */}
              <br />
              Telefon: <a href="tel:+493931218030" style={linkStyle}>03931 · 21 80 30</a>
              <br />
              E-Mail: <a href="mailto:info@asr-altmark.de" style={linkStyle}>info@asr-altmark.de</a>
              {/* TODO: Echte E-Mail */}
            </p>
          </Block>

          <Block title="2. Ihre Rechte als betroffene Person">
            <p>Ihnen stehen hinsichtlich Ihrer personenbezogenen Daten folgende Rechte zu:</p>
            <ul className="flex flex-col gap-1 pl-5" style={{ listStyle: "disc" }}>
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p>
              Haben Sie eine Einwilligung erteilt, können Sie diese jederzeit mit Wirkung
              für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Verarbeitung bleibt unberührt.
            </p>
          </Block>

          <Block title="3. Beschwerderecht bei der Aufsichtsbehörde">
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
              Die für uns zuständige Aufsichtsbehörde ist:
            </p>
            <p style={{ color: muted }}>
              Landesbeauftragter für den Datenschutz Sachsen-Anhalt
              <br />
              Leiterstraße 9, 39104 Magdeburg
              {/* TODO: Zuständigkeit bei tatsächlichem Unternehmenssitz prüfen */}
            </p>
          </Block>

          <Block title="4. Hosting & Server-Logfiles">
            <p>
              Diese Website wird bei der Vercel Inc. (340 S Lemon Ave #4133, Walnut,
              CA 91789, USA) gehostet. Beim Aufruf der Website erhebt der Hoster
              automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser
              automatisch übermittelt. Dies sind insbesondere:
            </p>
            <ul className="flex flex-col gap-1 pl-5" style={{ listStyle: "disc" }}>
              <li>IP-Adresse des zugreifenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>verwendeter Browser und ggf. das Betriebssystem</li>
              <li>Referrer-URL (die zuvor besuchte Seite)</li>
            </ul>
            <p>
              Die Verarbeitung erfolgt zur Gewährleistung eines reibungslosen
              Verbindungsaufbaus, einer komfortablen Nutzung sowie zur Auswertung der
              Systemsicherheit und -stabilität. Rechtsgrundlage ist unser berechtigtes
              Interesse an einer sicheren und effizienten Bereitstellung der Website
              gemäß Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p>
              Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung gemäß
              Art. 28 DSGVO. Eine etwaige Übermittlung von Daten in die USA wird auf
              Grundlage geeigneter Garantien (EU-Standardvertragsklauseln bzw. EU-U.S.
              Data Privacy Framework) abgesichert.
            </p>
          </Block>

          <Block title="5. SSL-/TLS-Verschlüsselung">
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
              Browsers von „http://" auf „https://" wechselt. Dadurch können die Daten, die
              Sie an uns übermitteln, nicht ohne Weiteres von Dritten mitgelesen werden.
            </p>
          </Block>

          <Block title="6. Schriftarten (lokal gehostet)">
            <p>
              Zur einheitlichen Darstellung von Schriftarten verwendet diese Website
              ausschließlich lokal eingebundene Schriftdateien. Es werden keine Schriften
              von externen Servern (z. B. Google Fonts) geladen. Beim Aufruf der Seite wird
              daher keine Verbindung zu Servern Dritter hergestellt und keine IP-Adresse an
              einen Schriftarten-Anbieter übermittelt.
            </p>
          </Block>

          <Block title="7. Kontaktaufnahme per Telefon oder E-Mail">
            <p>
              Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden Ihre Angaben
              (z. B. Name, Telefonnummer, E-Mail-Adresse sowie der Inhalt Ihrer Anfrage)
              zum Zweck der Bearbeitung Ihres Anliegens verarbeitet.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage der
              Anbahnung oder Durchführung eines Vertrags dient, andernfalls unser
              berechtigtes Interesse an der Beantwortung Ihrer Anfrage gemäß Art. 6 Abs. 1
              lit. f DSGVO. Die Daten werden gelöscht, sobald sie für die Erreichung des
              Zwecks nicht mehr erforderlich sind und keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </Block>

          <Block title="8. Kontaktaufnahme über WhatsApp">
            <p>
              Auf dieser Website bieten wir die Möglichkeit, über WhatsApp Kontakt mit uns
              aufzunehmen. Anbieter ist die Meta Platforms Ireland Ltd., 4 Grand Canal
              Square, Grand Canal Harbour, Dublin 2, Irland.
            </p>
            <p>
              Wenn Sie uns über WhatsApp kontaktieren, werden die von Ihnen übermittelten
              Daten (insbesondere Ihre Telefonnummer und der Nachrichteninhalt) sowie
              Metadaten der Kommunikation verarbeitet. Bitte beachten Sie, dass WhatsApp
              Daten auch in Drittländer (insbesondere in die USA) übermitteln kann.
              Rechtsgrundlage ist Ihre Einwilligung, die Sie konkludent durch die
              Kontaktaufnahme erteilen (Art. 6 Abs. 1 lit. a DSGVO), bzw. Art. 6 Abs. 1
              lit. b und f DSGVO.
            </p>
            <p>
              Wir empfehlen, keine sensiblen Daten (z. B. Gesundheitsdaten) über WhatsApp
              zu übermitteln. Details zur Datenverarbeitung durch WhatsApp finden Sie in der
              Datenschutzrichtlinie von Meta unter{" "}
              <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                whatsapp.com/legal/privacy-policy-eea
              </a>.
            </p>
          </Block>

          <Block title="9. Cookies & Tracking">
            <p>
              Diese Website setzt keine Tracking-, Analyse- oder Marketing-Cookies ein und
              verwendet keine Dienste zur Reichweitenmessung. Es werden lediglich technisch
              notwendige Daten verarbeitet, die für den Betrieb der Website erforderlich
              sind. Ein Einwilligungsbanner ist daher nicht erforderlich.
            </p>
          </Block>

          <Block title="10. Speicherdauer">
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
              genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck
              für die Datenverarbeitung entfällt. Gesetzliche Aufbewahrungsfristen
              (z. B. handels- oder steuerrechtlicher Art) bleiben unberührt.
            </p>
          </Block>

          <Block title="11. Änderung dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets
              den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer
              Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die jeweils
              aktuelle Fassung.
            </p>
          </Block>

          <p style={{ ...body, fontSize: 14, color: "rgba(243,241,236,0.4)" }}>
            Stand: Juni 2026
          </p>

        </div>
      </section>

      <Footer7 />
    </main>
  );
}
