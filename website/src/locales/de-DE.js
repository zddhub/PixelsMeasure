import { measurements, workflowSteps } from "./landing-sections";

export default {
  nav: ["So geht’s", "Werkzeuge", "Download"],
  language: "Sprache der Website", siteNav: "Hauptnavigation", footerNav: "Navigation in der Fußzeile", englishOnly: "auf Englisch",
  pageTitle: "Pixelgenau messen auf Mac, iPhone und iPad",
  store: "Im App Store laden", watchPreview: "Demo ansehen",
  previewTitle: "PixelsMeasure in Aktion", closePreview: "Vorschau schließen",
  previewDescription: "Die Demo zeigt, wie du Abstände und Objekte misst und Hilfslinien einrasten lässt.",
  hero: ["Dein Design im Detail.", "Pixelgenau vermessen."],
  intro: "Prüfe Maße, Abstände und Ausrichtung in Screenshots und Fotos.",
  platformNote: "Für Mac, iPhone und iPad", freeNote: "Kostenlos laden",
  proLink: "Gratisversion und Pro vergleichen", tryProbe: "Probier die Messsonde aus",
  spacingAlt: "Drei Farbkarten in Mintgrün, Rosa und Pfirsich. Zwischen den ersten beiden liegen 18 Pixel.",
  tools: "Auch kleine Abweichungen fallen auf", toolsIntro: "Prüfe Kanten und Ausrichtung und entdecke Details, die bei geringem Kontrast leicht untergehen.",
  tolerance: "Toleranz", probeHint: "Bewege den Zeiger, um zu messen", probeTouchHint: "Tippe zum Messen auf eine Farbkarte oder einen Zwischenraum",
  pauseMotion: "Demos anhalten", resumeMotion: "Demos abspielen",
  measurements: measurements([
    ["Objekterkennung", "Zieh einen Rahmen um ein Symbol oder Bedienelement, um seine sichtbaren Außenmaße zu bestimmen.", "Ein roter Rahmen zeigt die Maße eines Papierfliegers: 156 × 110 Pixel."],
    ["Einrastende Hilfslinien", "Lass die Hilfslinien an den Kanten deines Entwurfs einrasten und lies den Abstand zwischen ihnen ab.", "Zwei blaue Hilfslinien rasten an den Kanten des Covers ein. Ihr Abstand beträgt 216 Pixel."],
    ["Fadenkreuz", "Prüfe beide Achsen zugleich. An den Zeigerkoordinaten erkennst du, ob ein Bedienelement um ein paar Pixel verrutscht ist.", "Das Fadenkreuz trifft die Option Card und zeigt einen Versatz von 5 Pixeln bei benachbarten Elementen."],
    ["Toleranz der Kantenerkennung", "Passe die Empfindlichkeit an, damit Schatten und schwach sichtbare Trennlinien die Messung nicht unterbrechen.", "Bei Toleranz 32 statt 8 misst die Sonde bis zur Außenkante bei 480 statt bis zur Trennlinie bei 336 Pixeln."]
  ]),
  workflow: "Vom Screenshot zum PNG mit Maßangaben",
  workflowSteps: workflowSteps([
    ["Öffne ein Bild", "Öffne einen Screenshot, ein Foto oder einen Entwurf auf deinem Mac, iPhone oder iPad.", "Entwurf einer Anmeldeseite für einen Typografie-Workshop, noch ohne Maßangaben."],
    ["Hefte Messwerte an", "Markiere Maße und Abstände im Bild. Speichere ein bearbeitbares Dokument, um später weiterzumessen.", "Eine Stecknadel kennzeichnet zwei gespeicherte Messungen im Entwurf."],
    ["Teile ein PNG mit Maßangaben", "Exportiere das Bild mitsamt den Messwerten. Hier ist der Anmeldebutton 240 × 56 px groß. Über dem Schriftmuster liegen 26 px Abstand.", "Vorschau des PNG mit beiden Maßangaben."]
  ]),
  workflowExtra: ["Speichere deine Arbeit mit Ebenen als ", "-Datei oder kopiere Messwerte als CSS, JSON oder Klartext."],
  live: {
    title: "Direkt auf dem Mac-Bildschirm messen",
    body: "Starte die Messung in der Menüleiste und hefte die benötigten Werte an. Mit „Als Dokument öffnen“ arbeitest du am erfassten Bild und den Messungen weiter.",
    permission: "Dafür benötigt PixelsMeasure die macOS-Berechtigung zur Bildschirmaufnahme.",
    alt: "PixelsMeasure in der Mac-Menüleiste. Der Befehl zum Starten der Messung ist hervorgehoben."
  },
  planScope: "Pro Dokument oder Bildschirmmessung",
  plans: [
    { name: "Kostenlos", limit: "Bis zu 3 Messwerte anheften", features: ["Nach Erreichen des Limits mit Messsonde und Fadenkreuz weitermessen", "Dokumente speichern und teilen"] },
    { name: "Pro", limit: "Beliebig viele Messwerte anheften", features: ["Objekterkennung und einrastende Hilfslinien", "Mehrere Messwerte auf einmal kopieren, zuschneiden und drehen"], note: "Teste die Pro-Werkzeuge im Beispieldokument." }
  ],
  download: "PixelsMeasure laden",
  requirements: "Erfordert macOS 14, iOS 17, iPadOS 17 oder neuer.",
  footer: ["Datenschutz", "Nutzungsbedingungen", "Kontakt", "GitHub", "Blog"]
};
