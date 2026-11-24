import { measurements, workflowSteps } from "./landing-sections.js";

export default {
  nav: ["Come funziona", "Strumenti", "Scarica"],
  language: "Lingua del sito", siteNav: "Navigazione principale", footerNav: "Link a piè di pagina", englishOnly: "in inglese",
  pageTitle: "Misure al pixel su Mac, iPhone e iPad",
  store: "Scarica dall’App Store", watchPreview: "Guarda il video",
  previewTitle: "PixelsMeasure", closePreview: "Chiudi l’anteprima",
  previewDescription: "Video di presentazione di PixelsMeasure",
  hero: ["Tutto quello che vedi,", "misurato al pixel."],
  intro: "Controlla dimensioni, spaziature e allineamenti in screenshot e foto.",
  platformNote: "Per Mac, iPhone e iPad", freeNote: "Download gratuito",
  proLink: "Confronta la versione gratuita e Pro", tryProbe: "Prova la sonda",
  spacingAlt: "Tre campioni color menta, rosa e pesca. I primi due distano 18 pixel.",
  tools: "I dettagli fanno la differenza", toolsIntro: "Controlla gli allineamenti e individua bordi e separazioni che a occhio si notano appena.",
  tolerance: "Tolleranza", probeHint: "Sposta il puntatore per misurare", probeTouchHint: "Tocca un campione o uno spazio per misurarlo",
  pauseMotion: "Metti in pausa le demo", resumeMotion: "Riprendi le demo",
  measurements: measurements([
    ["Rilevamento degli oggetti", "Traccia un riquadro attorno a un’icona o a un elemento per misurarne l’ingombro visibile.", "Un riquadro rosso mostra le dimensioni di un aeroplanino di carta: 156 × 110 pixel."],
    ["Guide magnetiche", "Aggancia le guide ai bordi del progetto e leggi subito la distanza tra le due.", "Due guide blu si agganciano ai bordi della copertina a 216 pixel di distanza."],
    ["Mirino", "Verifica l’allineamento su entrambi gli assi e usa le coordinate del puntatore per trovare scostamenti di pochi pixel.", "Il mirino passa per l’opzione Card e mostra uno scostamento di 5 pixel negli elementi vicini."],
    ["Tolleranza di rilevamento", "Regola la sensibilità per ignorare ombre e separazioni appena visibili.", "Con la tolleranza a 32 anziché 8, la sonda supera la separazione a 336 pixel e arriva al bordo esterno a 480 pixel."]
  ]),
  workflow: "Dallo screenshot al PNG con le misure",
  workflowSteps: workflowSteps([
    ["Apri un’immagine", "Apri uno screenshot, una foto o un mockup su Mac, iPhone o iPad.", "Bozza della pagina di iscrizione a un laboratorio di tipografia, senza misure."],
    ["Fissa le misure", "Segna dimensioni e distanze sull’immagine. Salva un documento modificabile per riprendere il lavoro quando vuoi.", "Una puntina indica che due misure sono state salvate sulla bozza."],
    ["Condividi un PNG con le misure", "Esporta l’immagine con le annotazioni. Qui il pulsante di iscrizione misura 240 × 56 px e sopra il campione tipografico ci sono 26 px.", "Anteprima del PNG da condividere con entrambe le misure."]
  ]),
  workflowExtra: ["Salva il lavoro con tutti i livelli in un file ", " oppure copia i valori come CSS, JSON o testo semplice."],
  live: {
    title: "Misura direttamente sullo schermo del Mac",
    body: "Avvia la misurazione dalla barra dei menu e fissa i valori che ti servono. Scegli «Apri come documento» per continuare a lavorare sull’immagine acquisita e sulle misure.",
    permission: "Per misurare sullo schermo serve il permesso di registrazione dello schermo di macOS.",
    alt: "Menu di PixelsMeasure nella barra dei menu del Mac, con il comando per avviare la misurazione evidenziato."
  },
  planScope: "Per documento o sessione a schermo",
  plans: [
    { name: "Gratis", limit: "Fino a 3 misure fissate", features: ["Continua a misurare con sonda e mirino anche dopo aver raggiunto il limite", "Salva e condividi i documenti"] },
    { name: "Pro", limit: "Fissa tutte le misure che vuoi", features: ["Rilevamento degli oggetti e guide magnetiche", "Copia multipla, ritaglio e rotazione"], note: "Prova gli strumenti Pro nel documento di esempio." }
  ],
  download: "Scarica PixelsMeasure",
  requirements: "Richiede macOS 14, iOS 17, iPadOS 17 o versioni successive.",
  guide: "Guida al prodotto",
  footer: ["Informativa sulla privacy", "Termini di servizio", "Contatti", "GitHub", "Blog"]
};
