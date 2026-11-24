## Website for PixelsMeasure

### How to run it

```shell
export NODE_OPTIONS=--openssl-legacy-provider
yarn serve
```

### Product discovery

The same `npm run build` used by GitHub Pages renders the homepage’s initial product summary and generates `/guide/`, `/guide/index.md`, `/robots.txt`, `/sitemap.xml`, and `/llms.txt`. Update the product facts and guide answers in [site-discovery.js](site-discovery.js). The guide’s HTML and Markdown use the same answers. The build also publishes a crawlable homepage for each locale and static policy pages generated from the root policy Markdown files. Build with Node 22 or later.
