import { measurements, workflowSteps } from "./landing-sections.js";

export default {
  nav: ["Mode d’emploi", "Outils", "Télécharger"],
  language: "Langue du site", siteNav: "Navigation principale", footerNav: "Navigation de pied de page", englishOnly: "en anglais",
  pageTitle: "Mesurez au pixel près sur Mac, iPhone et iPad",
  store: "Télécharger sur l’App Store", watchPreview: "Voir la vidéo",
  previewTitle: "PixelsMeasure", closePreview: "Fermer l’aperçu",
  previewDescription: "Vidéo de présentation de PixelsMeasure",
  intro: "Vérifiez les dimensions, les espacements et les alignements dans vos captures d’écran et vos photos.",
  platformNote: "Sur Mac, iPhone et iPad", freeNote: "Téléchargement gratuit",
  proLink: "Comparer les versions gratuite et Pro", tryProbe: "Essayez la sonde",
  spacingAlt: "Trois cartes, vert menthe, rose et pêche. Les deux premières sont espacées de 18 pixels.",
  tools: "Le souci du détail", toolsIntro: "Vérifiez les alignements et retrouvez les bords et séparations que l’œil distingue à peine.",
  tolerance: "Tolérance", probeHint: "Déplacez le pointeur pour mesurer", probeTouchHint: "Touchez une carte ou un espace pour le mesurer",
  pauseMotion: "Mettre les démos en pause", resumeMotion: "Relancer les démos",
  measurements: measurements([
    ["Détection d’objets", "Tracez un cadre autour d’une icône ou d’un élément pour en mesurer les contours visibles.", "Un cadre rouge indique les dimensions d’un avion en papier : 156 × 110 pixels."],
    ["Guides magnétiques", "Les guides se calent sur les bords de la maquette. Lisez directement la distance qui les sépare.", "Deux guides bleus se calent sur les bords de la couverture, à 216 pixels l’un de l’autre."],
    ["Réticule", "Vérifiez l’alignement sur les deux axes et lisez les coordonnées du pointeur pour repérer les décalages de quelques pixels.", "Le réticule traverse l’option Card et révèle un décalage de 5 pixels entre les éléments voisins."],
    ["Tolérance de détection", "Réglez la sensibilité pour passer outre les ombres ou les séparations peu contrastées.", "En passant de 8 à 32, la sonde quitte la séparation à 336 pixels et atteint le bord extérieur à 480 pixels."]
  ]),
  workflow: "De la capture d’écran au PNG annoté",
  workflowSteps: workflowSteps([
    ["Ouvrez une image", "Importez une capture d’écran, une photo ou une maquette sur Mac, iPhone ou iPad.", "Maquette sans annotations de la page d’inscription à un atelier de typographie."],
    ["Épinglez les mesures utiles", "Indiquez les dimensions et les espacements sur l’image. Enregistrez un document modifiable pour reprendre vos mesures plus tard.", "Une punaise indique que deux mesures ont été conservées sur la maquette."],
    ["Partagez un PNG annoté", "Exportez l’image avec vos mesures. Ici, le bouton d’inscription fait 240 × 56 px et l’espace au-dessus du spécimen typographique mesure 26 px.", "Aperçu du PNG à partager avec les deux mesures visibles."]
  ]),
  workflowExtra: ["Gardez un document ", " avec ses calques pour y revenir, ou copiez vos mesures au format CSS, JSON ou texte brut."],
  live: {
    title: "Mesurez directement sur l’écran du Mac",
    body: "Lancez une mesure depuis la barre des menus et épinglez les valeurs utiles. Choisissez « Ouvrir comme document » pour reprendre le travail sur l’image capturée.",
    permission: "La mesure à l’écran nécessite l’autorisation d’enregistrement de l’écran de macOS.",
    alt: "Menu PixelsMeasure dans la barre des menus du Mac, avec la commande de lancement de la mesure en surbrillance."
  },
  planScope: "Par document ou session à l’écran",
  plans: [
    { name: "Gratuit", limit: "Jusqu’à 3 mesures épinglées", features: ["Sonde et réticule utilisables même après avoir atteint la limite", "Enregistrement et partage de documents"] },
    { name: "Pro", limit: "Mesures épinglées sans limite", features: ["Détection d’objets et guides magnétiques", "Copie groupée, recadrage et rotation"], note: "Essayez les outils Pro dans le document d’exemple." }
  ],
  download: "Télécharger PixelsMeasure",
  requirements: "Nécessite macOS 14, iOS 17, iPadOS 17 ou une version ultérieure.",
  guide: "Guide du produit",
  footer: ["Confidentialité", "Conditions d’utilisation", "Contact", "GitHub", "Blog"]
};
