export const defaultLocale = "en-US";

export const siteLocales = [
  { tag: defaultLocale, label: "English (US)" },
  { tag: "zh-Hans", label: "简体中文" },
  { tag: "zh-Hant", label: "繁體中文" },
  { tag: "fr-FR", label: "Français" },
  { tag: "de-DE", label: "Deutsch" },
  { tag: "it", label: "Italiano" },
  { tag: "ja", label: "日本語" },
  { tag: "ko", label: "한국어" },
  { tag: "ru", label: "Русский" },
  { tag: "es-MX", label: "Español (México)" }
];

export function matchLocale(language) {
  const code = String(language || "").toLowerCase();
  if (code === "cn") return "zh-Hans"; // Language preference from the previous site.
  if (code === "zh" || code.startsWith("zh-")) {
    if (/^zh-hans(?:-|$)/.test(code)) return "zh-Hans";
    return /^zh-(hant|tw|hk|mo)(?:-|$)/.test(code) ? "zh-Hant" : "zh-Hans";
  }
  const base = code.split("-")[0];
  const match = siteLocales.find(({ tag }) => tag.split("-")[0] === base);
  return match && match.tag;
}

export function initialLocale() {
  let saved;
  try {
    saved = matchLocale(window.localStorage.getItem("locale"));
  } catch {
    // Language switching still works when browser storage is disabled.
  }
  return saved || (navigator.languages || [navigator.language]).map(matchLocale).find(Boolean) || defaultLocale;
}

export function saveLocale(locale) {
  try {
    window.localStorage.setItem("locale", locale);
  } catch {
    // The selection still applies to the current page.
  }
}
