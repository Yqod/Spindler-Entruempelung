# Spindler Entrümpelung – Design-Sprache

Diese Datei hält die **Design-Sprache** fest, die wir projektweit verwenden:
**Farben** und **Schrift** sind gesetzt und sollen so übernommen werden.
Das Layout ist bewusst **offen** – neue Designs dürfen frei gestaltet werden,
solange sie diese Farb- und Typo-Grundlage nutzen.

> Wirkung: **seriös · bodenständig · handwerklich · regional (Altmark)**

---

## 1. Farben

Anthrazit als Basis, Blau als einziger Akzent. Warme, leicht entsättigte
Schwarz-/Weißtöne (keine reinen `#000` / `#fff` als Flächen).

### Anthrazit (Basis & dunkle Flächen)
| Token | HEX | Einsatz |
|---|---|---|
| `--anthra-950` | `#111318` | tiefste Flächen, Footer |
| `--anthra-900` | `#171a20` | Hero, dunkle Sektionen, Header |
| `--anthra-850` | `#1d2128` | dunkle Karten, Trust-Leiste |
| `--anthra-800` | `#242932` | erhöhte Elemente |
| `--anthra-700` | `#363d49` | Borders / inaktive Akzente |
| `--anthra-600` | `#4a525f` | gedämpfte Details |

### Blau (Akzent – sparsam einsetzen)
| Token | HEX | Einsatz |
|---|---|---|
| `--blau` | `#007DF8` | Primär-Buttons, Highlights, Kicker |
| `--blau-600` | `#0059c4` | Hover Primär |
| `--blau-700` | `#0047a3` | Text auf Hell, kräftige Akzente |
| `--blau-300` | `#66a8f6` | Akzent auf dunklem Grund |
| `--blau-tint` | `#dbeafe` | zarte Flächen / Icon-Hintergründe |

### Papier & Text
| Token | HEX | Einsatz |
|---|---|---|
| `--paper` | `#f5f2ec` | Haupt-Hintergrund (warmes Off-White) |
| `--paper-2` | `#ebe5da` | abgesetzte helle Sektionen |
| `--card` | `#ffffff` | Karten auf hellem Grund |
| `--ink` | `#1b1f26` | Haupttext auf Hell |
| `--ink-soft` | `#3a414c` | Sekundärtext |
| `--muted` | `#6b727c` | gedämpfter Text |
| `--on-dark` | `#f3f1ec` | Text auf Anthrazit |
| `--on-dark-soft` | `rgba(243,241,236,.68)` | Sekundärtext auf dunkel |
| `--line` | `#e2dcd1` | Trennlinien hell |
| `--line-dark` | `rgba(255,255,255,.10)` | Trennlinien dunkel |

**Regeln**
- Blau ist der **einzige** Akzent – nicht mit weiteren Buntönen mischen.
- Blau immer punktuell (CTAs, ein Highlight-Wort, Icons), nie als große Fläche.
- Grün `#25d366` ausschließlich für **WhatsApp**-Buttons (Funktionsfarbe, kein Designakzent).

---

## 2. Schrift

Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

| Rolle | Font | Gewichte | Einsatz |
|---|---|---|---|
| Display / Headlines | **Archivo** | 700–900 | Überschriften, Buttons, große Zahlen |
| Fließtext | **IBM Plex Sans** | 400–600 | Absätze, Labels, UI |
| Mono (Akzent) | **IBM Plex Mono** | 400–500 | technische Labels, Platzhalter |

```css
--font-display: 'Archivo', system-ui, sans-serif;
--font-body:    'IBM Plex Sans', system-ui, sans-serif;
```

**Regeln**
- Headlines: `font-weight: 800–900`, `letter-spacing: -0.02em`, `line-height: 1.04`.
- Fließtext: `line-height: 1.6`, Basisgröße **17px** (Desktop).
- Buttons: Archivo `700`.
- „Kicker"/Eyebrow: IBM Plex Sans `600`, `13px`, `letter-spacing: .16em`, `UPPERCASE`, in Blau.
- Headlines dürfen groß und selbstbewusst sein (`clamp()` bis ~78px im Hero).

---

## 3. Form & Ton (Mini-Konventionen)

- Radien dezent: `--radius: 4px`, größer `--radius-lg: 8px` (handwerklich, nicht verspielt).
  Ausnahme: **Glas-Elemente** dürfen runder sein (Pills `100px`, Cards `14–18px`).
- Akzentkante: 4px Blau-Balken links an Karten statt bunter Flächen.
- Platzhalterbilder: gestreifte SVG-Flächen mit Mono-Label statt erfundener Grafiken.
- **Keine** Verläufe als Deko, keine Emoji, kein „abgerundete Box mit linkem Farbstreifen"-Slop.
- **Tonalität:** diskret und einfühlsam – besonders bei Messie-Wohnungen
  und Wohnungsauflösung nach Todesfall respektvoll formulieren.

---

## 4. Glasmorphismus (Glas-Cards & -Buttons)

Halbtransparente, dunkle Flächen mit **Hintergrund-Unschärfe**, feiner heller
Lichtkante oben und weichem Schatten – schweben über einem Foto.
**Wichtig:** Glas funktioniert nur über einem **Foto/Bild-Hintergrund** (sonst ist
keine Unschärfe sichtbar). Auf reinen Flächen stattdessen normale Cards verwenden.

### Tokens
```css
--glass-bg:        rgba(20,23,29,.42);   /* Standard-Glasfläche */
--glass-bg-strong: rgba(20,23,29,.58);   /* Hover / kräftiger */
--glass-border:    rgba(255,255,255,.16);
--glass-hi:        rgba(255,255,255,.22); /* obere Lichtkante */
--glass-blur:      blur(20px) saturate(135%);
--glass-shadow:    0 8px 32px rgba(0,0,0,.38), inset 0 1px 0 var(--glass-hi);
```

### Basis-Klasse
```css
.glass {
  background: var(--glass-bg);
  -webkit-backdrop-filter: var(--glass-blur);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}
```

### Varianten
| Element | Look | Einsatz |
|---|---|---|
| **Glas-Pill** | `border-radius:100px`, Blau-Punkt | Scroll-/Filter-/Tag-Buttons |
| **Glas-Card** | `border-radius:14–18px`, Icon oben | Trust-/Info-Karten über Foto |
| **Glas-Button (neutral)** | `.glass`, `radius:14px` | sekundäre Aktionen |
| **Glas-Button Blau** | `linear-gradient(180deg, rgba(0,125,248,.92), rgba(0,89,196,.92))` + helle Kante | **Primär-CTA** (Anrufen) |
| **Glas-Button WhatsApp** | `linear-gradient(180deg, rgba(37,211,102,.9), rgba(31,190,90,.9))` | WhatsApp |

**Regeln**
- Hover: auf `--glass-bg-strong` wechseln + `translateY(-2px)`, Kante heller.
- Akzent bleibt Blau – Blau-Glas ist der einzige farbige CTA, Grün nur WhatsApp.
- Sparsam: Glas ist für Hero/Foto-Sektionen. Helle Inhalts-Sektionen bleiben Papier + normale Cards.
- Performance/Fallback: ältere Browser ohne `backdrop-filter` zeigen die halbtransparente
  Fläche ohne Unschärfe – bleibt lesbar.

---

## 5. Kontaktdaten (Platzhalter – bitte ersetzen)

- Telefon: `03931 · 21 80 30` *(Platzhalter)*
- WhatsApp: `+49 151 1000 0000` *(Platzhalter)*
- E-Mail: `info@spindler-entruempelung.de` *(Platzhalter)*
- Region: **Altmark** (Stendal, Salzwedel, Gardelegen, Tangermünde, Osterburg, Klötze, Havelberg …)
