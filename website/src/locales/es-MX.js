import { measurements, workflowSteps } from "./landing-sections";

export default {
  nav: ["Cómo funciona", "Herramientas", "Descargar"],
  language: "Idioma del sitio", siteNav: "Navegación principal", footerNav: "Enlaces al pie de página", englishOnly: "en inglés",
  pageTitle: "Mide en píxeles en Mac, iPhone y iPad",
  store: "Descargar en App Store", watchPreview: "Ver video",
  previewTitle: "PixelsMeasure", closePreview: "Cerrar vista previa",
  previewDescription: "Video de presentación de PixelsMeasure",
  intro: "Revisa medidas, espacios y alineaciones en tus capturas de pantalla y fotos.",
  platformNote: "Para Mac, iPhone y iPad", freeNote: "Descarga gratuita",
  proLink: "Compara la versión gratis con Pro", tryProbe: "Prueba la sonda",
  spacingAlt: "Tres muestras de color: verde menta, rosa y durazno. Entre las dos primeras hay 18 píxeles.",
  tools: "Encuentra hasta el menor desfase", toolsIntro: "Revisa si todo está alineado y localiza bordes que apenas se distinguen a simple vista.",
  tolerance: "Tolerancia", probeHint: "Mueve el puntero para medir", probeTouchHint: "Toca una muestra o un espacio para medirlo",
  pauseMotion: "Pausar demostraciones", resumeMotion: "Reanudar demostraciones",
  measurements: measurements([
    ["Detección de objetos", "Dibuja un recuadro alrededor de un ícono o elemento para medir el área que ocupa a simple vista.", "Un recuadro rojo marca el tamaño de un avión de papel: 156 × 110 píxeles."],
    ["Guías que se ajustan a los bordes", "Acerca las guías a los bordes de tu diseño para que se ajusten y lee la distancia entre ellas.", "Dos guías azules se ajustan a los bordes de la portada. Las separan 216 píxeles."],
    ["Cruz", "Revisa la alineación en ambos ejes. Usa las coordenadas del puntero para encontrar elementos desfasados por unos cuantos píxeles.", "La cruz pasa por la opción Card y revela un desfase de 5 píxeles en los controles cercanos."],
    ["Tolerancia de detección", "Ajusta la sensibilidad para que una sombra o una separación con poco contraste no corte la medición.", "Al subir la tolerancia de 8 a 32, la sonda pasa de la división a 336 píxeles al borde exterior a 480 píxeles."]
  ]),
  workflow: "De una captura a un PNG con medidas",
  workflowSteps: workflowSteps([
    ["Abre una imagen", "Abre una captura, una foto o un diseño en tu Mac, iPhone o iPad.", "Diseño sin anotaciones de la página de registro de un taller de tipografía."],
    ["Fija las medidas que quieras conservar", "Marca las dimensiones y los espacios en la imagen. Guarda el documento editable para retomar el trabajo después.", "Un alfiler indica que hay dos mediciones fijadas en el diseño."],
    ["Comparte un PNG con anotaciones", "Exporta la imagen con tus medidas. Aquí, el botón de registro mide 240 × 56 px y hay 26 px de espacio arriba de la muestra tipográfica.", "Vista previa del PNG para compartir con las dos medidas visibles."]
  ]),
  workflowExtra: ["Guarda el documento con sus capas en formato ", " o copia los valores como CSS, JSON o texto sin formato."],
  live: {
    title: "Mide directamente en la pantalla de tu Mac",
    body: "Empieza en la barra de menús y fija los valores que te interesen. Elige «Abrir como documento» para seguir trabajando con la imagen capturada y sus medidas.",
    permission: "Para medir en pantalla, necesitas dar permiso de grabación de pantalla en macOS.",
    alt: "Menú de PixelsMeasure en la barra de menús de la Mac, con la opción para empezar a medir resaltada."
  },
  planScope: "Por documento o sesión en pantalla",
  plans: [
    { name: "Gratis", limit: "Fija hasta 3 mediciones", features: ["Sigue midiendo con la sonda y la cruz al llegar al límite", "Guarda y comparte documentos"] },
    { name: "Pro", limit: "Fija todas las mediciones que necesites", features: ["Detección de objetos y guías que se ajustan a los bordes", "Copia de varias medidas a la vez, recorte y rotación"], note: "Prueba las herramientas Pro en el documento de ejemplo." }
  ],
  download: "Descarga PixelsMeasure",
  requirements: "Requiere macOS 14, iOS 17, iPadOS 17 o una versión posterior.",
  guide: "Guía del producto",
  footer: ["Aviso de privacidad", "Términos del servicio", "Contacto", "GitHub", "Blog"]
};
