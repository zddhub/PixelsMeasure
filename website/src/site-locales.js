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

export function localePath(locale) {
  return locale === defaultLocale ? "" : locale + "/";
}

export function initialLocale() {
  const path = window.location.pathname.slice(process.env.BASE_URL.length).replace(/index\.html$/, "");
  const page = siteLocales.find(({ tag }) => localePath(tag) === path);
  return page ? page.tag : defaultLocale;
}
