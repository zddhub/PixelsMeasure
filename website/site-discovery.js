const { readFileSync } = require("fs");
const { join } = require("path");
const markdown = require("markdown-it")();
const { landingCopy } = require("./src/landing-copy.js");
const { defaultLocale, localePath, siteLocales } = require("./src/site-locales.js");

const origin = "https://pixelsmeasure.com";
const homeURL = origin + "/";
const guidePath = "guide/";
const guideURL = new URL(guidePath, homeURL).href;
const storeURL = "https://apps.apple.com/app/pixelsmeasure/id1638740542";
const repositoryURL = "https://github.com/zddhub/PixelsMeasure";
const title = "PixelsMeasure — Pixel ruler for Mac, iPhone, and iPad";
const summary = "PixelsMeasure is a pixel ruler for Mac, iPhone, and iPad. Measure widths, heights, gaps, and alignment in screenshots, photos, and mockups, or directly on the Mac screen.";
const systems = ["macOS 14 or later", "iOS 17 or later", "iPadOS 17 or later"];
const download = "Free to download with optional PixelsMeasure Pro purchases.";
const image = "img/v5/workflow-workshop-annotated.png";
const policies = [
  { path: "privacy/", source: "Privacy.md", label: "Privacy policy" },
  { path: "terms-of-service/", source: "tos.md", label: "Terms of service" }
];
const languages = siteLocales.map(({ tag, label }) => ({
  tag, label, path: localePath(tag), url: homeURL + localePath(tag)
}));

const sections = [
  {
    id: "platforms",
    heading: "Which devices does PixelsMeasure support?",
    answer: "Use PixelsMeasure on Mac with macOS 14 or later, iPhone with iOS 17 or later, or iPad with iPadOS 17 or later. Open screenshots, photos, and mockups on all three. Live screen measurement is a Mac feature."
  },
  {
    id: "live-measure",
    heading: "How do I measure my Mac screen?",
    answer: "Open Live Measure from the menu bar and move the Probe between edges to read gaps in pixels. Use Cross to check alignment and coordinates, and pin any measurement you want to keep. Choose Open as Document to continue editing the capture. Live Measure requires macOS Screen Recording permission. Measuring an image file works without that permission."
  },
  {
    id: "image-measurement",
    heading: "How do I measure a screenshot or mockup?",
    answer: "Open the image, move Probe between two edges, and pin the result. Zoom to inspect individual pixels or adjust edge detection tolerance if shadows or low contrast affect the reading. Designers and developers can use these measurements to compare a shipped interface with a design. Pro adds object and area measurement and lets guides snap to edges."
  },
  {
    id: "export",
    heading: "What can I save or export?",
    answer: "Save an editable .pixelsmeasure document with the original image and measurement layers. Store it in iCloud Drive to reopen it on Mac, iPhone, or iPad. Export an annotated PNG for a design review or bug report, or copy measurement values as CSS, JSON, or plain text."
  },
  {
    id: "spacing",
    heading: "How do I preview spacing or duplicate a measurement?",
    answer: "These gestures require PixelsMeasure 5.1 or later. Check Version History in your App Store region to see if the update is available. In a document, select a measurement. On Mac, hold Option while hovering over another measurement or an image edge to preview the spacing. On iPhone and iPad, touch and hold the target instead. To duplicate a measurement with live gap readouts, Option-drag it on Mac, or touch and hold it and then drag on iPhone or iPad."
  },
  {
    id: "free-and-pro",
    heading: "What is included in Free and Pro?",
    answer: "Free includes Probe, Cross, document saving and sharing, and up to three pinned measurements per document or live session. Probe and Cross remain available after reaching the pin limit. Pro unlocks unlimited pins, object and area measurement, guide snapping, batch copying, cropping, and rotation. The App Store shows available purchases and prices for your region. Try Pro tools in the included sample document."
  },
  {
    id: "privacy",
    heading: "Where are images and measurements processed?",
    answer: "PixelsMeasure processes images and measurements on your device. Documents are saved to the location you choose. If that location is iCloud Drive, Apple handles the file sync. PixelsMeasure does not upload images or measurement documents to its own servers."
  }
];

const links = [
  { text: "Download PixelsMeasure on the App Store", url: storeURL },
  ...policies.map(({ path, label }) => ({ text: label, url: homeURL + path })),
  { text: "Report an issue", url: repositoryURL + "/issues" },
  { text: "Email support", url: "mailto:pixelsmeasure@gmail.com" }
];

const software = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": homeURL + "#pixelsmeasure",
  name: "PixelsMeasure",
  description: summary,
  url: homeURL,
  image: homeURL + image,
  applicationCategory: "DeveloperApplication",
  operatingSystem: systems,
  downloadUrl: storeURL,
  sameAs: [storeURL],
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "USD",
    url: storeURL,
    description: download
  },
  featureList: [
    "Live screen measurement on Mac",
    "Measure pixel dimensions, gaps, alignment, and coordinates in images",
    "Editable measurement layers and .pixelsmeasure documents",
    "Export annotated PNG and copy measurements as CSS, JSON, or plain text",
    "Object and area measurement and guide snapping with Pro"
  ]
};

const escapeHTML = value => value.replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);

function guideHTML(base) {
  const questionLinks = sections.map(({ id, heading }) =>
    `<li><a href="#${id}">${escapeHTML(heading)}</a></li>`
  ).join("\n");
  const answers = sections.map(({ id, heading, answer }) =>
    `<section aria-labelledby="${id}"><h2 id="${id}">${escapeHTML(heading)}</h2><p>${escapeHTML(answer)}</p></section>`
  ).join("\n");
  const resources = links.map(({ text, url }) =>
    `<li><a href="${escapeHTML(url.startsWith(homeURL) ? base + url.slice(homeURL.length) : url)}">${escapeHTML(text)}</a></li>`
  ).join("\n");
  return `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>PixelsMeasure Product Guide</title>
  <meta name="description" content="Learn how to measure your Mac screen, check pixel dimensions in screenshots, and save, export, or share your measurements with PixelsMeasure.">
  <link rel="canonical" href="${guideURL}">
  <link rel="alternate" type="text/markdown" href="${base}${guidePath}index.md">
  <link rel="describedby" href="${base}llms.txt">
  <link rel="icon" href="${base}favicon.ico">
  <link rel="stylesheet" href="${base}product-reference.css">
</head>
<body class="pm-reference">
  <header><a href="${base}">PixelsMeasure</a></header>
  <main>
    <h1>PixelsMeasure Product Guide</h1>
    <p>${escapeHTML(summary)}</p>
    <p><a href="${storeURL}">Download on the App Store</a>. ${escapeHTML(download)}</p>
    <nav aria-label="On this page"><ul>${questionLinks}</ul></nav>
    ${answers}
  </main>
  <footer>
    <nav aria-label="Downloads, policies, and support"><ul>${resources}</ul></nav>
  </footer>
</body>
</html>
`;
}

function guideMarkdown() {
  const answers = sections.map(({ heading, answer }) => `## ${heading}\n\n${answer}`);
  const resources = links.map(({ text, url }) => `- [${text}](${url})`);
  return [
    "# PixelsMeasure Product Guide",
    summary,
    `[Official product guide](${guideURL}) · [App Store](${storeURL}). ${download}`,
    ...answers,
    "## Download and support",
    resources.join("\n")
  ].join("\n\n") + "\n";
}

function policyHTML({ path, source }, base) {
  const content = readFileSync(join(__dirname, "..", source), "utf8");
  const title = content.match(/^# (.+)$/m)[1];
  return `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHTML(title)}</title>
  <link rel="canonical" href="${homeURL + path}">
  <link rel="icon" href="${base}favicon.ico">
  <link rel="stylesheet" href="${base}product-reference.css">
</head>
<body class="pm-reference">
  <header><a href="${base}">PixelsMeasure</a></header>
  <main>${markdown.render(content)}</main>
</body>
</html>
`;
}

function discoveryAssets(base) {
  const policyPages = policies.map(policy => [policy.path + "index.html", policyHTML(policy, base)]);
  const urls = [...languages.map(({ url }) => url), guideURL, ...policies.map(({ path }) => homeURL + path)];
  return {
    "robots.txt": `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
    "sitemap.xml": `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  ${urls.map(url => `<url><loc>${url}</loc></url>`).join("\n  ")}\n</urlset>\n`,
    "llms.txt": `# PixelsMeasure

> ${summary}

${download}

## Product

- [Product guide (Markdown)](${guideURL}index.md): Platforms, measurement workflows, exports, Free and Pro, and privacy.
- [Product guide (HTML)](${guideURL}): The same facts on a page with links to individual answers.
- [App Store](${storeURL}): Download, current release, and regional purchase options.

## Support

- [Privacy policy](${homeURL}privacy/): On-device processing, screen capture, and document storage.
- [Issue tracker](${repositoryURL}/issues): Public bug reports and feature requests.
`,
    [guidePath + "index.html"]: guideHTML(base),
    [guidePath + "index.md"]: guideMarkdown(),
    ...Object.fromEntries(policyPages),
    "Privacy.html": policyPages[0][1]
  };
}

class SiteDiscoveryPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("SiteDiscoveryPlugin", compilation => {
      const base = compilation.outputOptions.publicPath || "/";
      for (const [name, source] of Object.entries(discoveryAssets(base))) {
        compilation.assets[name] = {
          source: () => source,
          size: () => Buffer.byteLength(source)
        };
      }
    });
  }
}

function homepageDiscovery(locale) {
  const copy = landingCopy[locale];
  const english = locale === defaultLocale;
  const canonical = homeURL + localePath(locale);
  const features = english ? software.featureList : [copy.live.title, ...copy.measurements.map(tool => tool.title)];
  const description = english ? summary : `${copy.intro} ${copy.platformNote}`;
  return {
    locale, copy, canonical, languages, guidePath, storeURL, image, homeURL,
    title: english ? title : `PixelsMeasure — ${copy.pageTitle}`,
    summary: description,
    download: english ? download : copy.freeNote,
    features,
    jsonLD: JSON.stringify({
      ...software,
      inLanguage: locale,
      description,
      featureList: features
    }).replace(/</g, "\\u003c")
  };
}

module.exports = { SiteDiscoveryPlugin, homepageDiscovery, languages, defaultLocale };
