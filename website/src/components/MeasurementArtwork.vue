<template>
  <svg class="pm-demo-canvas"
    :class="{ 'pm-demo-running': running && !paused && !pointer, 'pm-demo-live': pointer }"
    :viewBox="artworkViewBox"
    role="img" :aria-label="label">
    <g v-if="mode === 'spacing'">
      <g v-for="swatch in swatches" :key="swatch.name" ref="swatchCards"
        :transform="'translate(' + swatch.x + ' ' + swatch.y + ')'">
        <rect x="-6" y="-6" width="174" height="150" rx="16" fill="#fff" stroke="#e5e9f2"/>
        <rect :width="swatch.width" :height="swatch.height" :rx="swatch.radius" :fill="swatch.color"/>
        <text x="3" :y="swatchNameBaseline" :style="{ fontSize: swatchNameSize + 'px' }" class="pm-canvas-name">{{ swatch.name }}</text>
        <text x="3" :y="swatchHexBaseline" :style="{ fontSize: swatchHexSize + 'px' }" class="pm-canvas-meta">{{ swatch.color }}</text>
      </g>
      <g v-if="!probePoint">
        <path class="pm-red-line" :d="gapMarker.path" fill="none"/>
        <g class="pm-red-tag" :transform="gapLabelTransform">
          <rect width="46" height="20" rx="10"/>
          <text x="23" y="10">{{ gapMarker.width }} px</text>
        </g>
      </g>
      <g v-if="liveReading" class="pm-active-probe" aria-hidden="true">
        <path class="pm-red-line" :d="liveReading.lines" fill="none"/>
        <g class="pm-red-tag" :transform="liveReading.labelTransform">
          <rect :width="liveReading.labelWidth" height="20" rx="10"/>
          <text :x="liveReading.labelWidth / 2" y="10">{{ liveReading.label }}</text>
        </g>
        <image :href="cursorImage" :x="probePoint.x - 11" :y="probePoint.y - 11" width="24" height="24"/>
      </g>
    </g>

    <g v-else-if="mode === 'object'">
      <rect x="183" y="17" width="274" height="206" rx="18" fill="#ecf3ff" stroke="#dee8f9"/>
      <defs>
        <!-- The Creative paper-plane silhouette, normalized to the cropped photo. -->
        <clipPath id="pm-paper-plane-outline" clipPathUnits="objectBoundingBox">
          <polygon points="0,.1991 1,0 .3988,1 .2321,.7367 .0779,.7854 .1355,.5022"/>
        </clipPath>
      </defs>
      <image :href="paperPlaneImage" x="242" y="58" width="156" height="110"
        preserveAspectRatio="none" clip-path="url(#pm-paper-plane-outline)"/>
      <rect class="pm-object-draft" x="218" y="38" width="204" height="152"
        fill="#ff3b3010" stroke="var(--pm-probe-color)" stroke-dasharray="5 4"/>
      <g class="pm-object-result">
        <rect x="242" y="58" width="156" height="110" fill="#ff3b3010" class="pm-red-line"/>
        <g class="pm-red-tag" transform="translate(268 104)">
          <g class="pm-tool-readout">
            <rect width="104" height="24" rx="12"/>
            <text x="52" y="12">156 × 110 px</text>
          </g>
        </g>
      </g>
    </g>

    <g v-else-if="mode === 'guides'">
      <rect x="169" y="15" width="302" height="200" rx="17" fill="#fff" stroke="#d4e5df"/>
      <defs>
        <linearGradient id="pm-cover-shade" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="42%" stop-color="#071a28" stop-opacity="0"/>
          <stop offset="100%" stop-color="#071a28" stop-opacity=".9"/>
        </linearGradient>
      </defs>
      <g transform="translate(212 30)">
        <image :href="namtsoCoverImage" width="216" height="124" preserveAspectRatio="xMidYMid slice"/>
        <rect width="216" height="124" fill="url(#pm-cover-shade)"/>
        <text x="14" y="107" class="pm-cover-title">Along the coast</text>
        <rect y="135" width="213" height="35" rx="5" fill="#f1f7f3" stroke="#d4e5df"/>
        <text x="10" y="157" class="pm-canvas-meta">The weekend itinerary</text>
      </g>
      <path d="M212 8v215" class="pm-blue-line pm-guide-left" fill="none"/>
      <path d="M428 8v215" class="pm-blue-line pm-guide-right" fill="none"/>
      <g class="pm-guide-readout">
        <g class="pm-blue-tag" transform="translate(288 206)">
          <g class="pm-tool-readout">
            <rect width="64" height="23" rx="11.5"/>
            <text x="32" y="11.5">216 px</text>
          </g>
        </g>
      </g>
    </g>

    <g v-else-if="mode === 'cross'">
      <rect x="171" y="15" width="298" height="210" rx="14" fill="#fff" stroke="#d9e1ed"/>
      <path d="M171 48h298" stroke="#d9e1ed"/>
      <circle cx="189" cy="31" r="3" fill="#95a2b4"/>
      <circle cx="200" cy="31" r="3" fill="#95a2b4"/>
      <circle cx="211" cy="31" r="3" fill="#95a2b4"/>
      <g v-for="(option, index) in paymentOptions" :key="option.name" :transform="option.position">
        <rect width="119" height="61" rx="7" fill="#f8faff" stroke="#dee6f2"/>
        <circle :cx="index === 2 ? 20 : 15" :cy="index === 1 ? 26 : 21" r="5" fill="white" stroke="#8b9cb3"/>
        <text x="32" :y="index === 1 ? 30 : 25" class="pm-canvas-meta">{{ option.name }}</text>
        <path d="M15 43h61" stroke="#d5deeb" stroke-width="4" stroke-linecap="round"/>
      </g>
      <path class="pm-red-line pm-cross-x" d="M208 10v220"/>
      <path class="pm-red-line pm-cross-y" d="M162 85h316"/>
      <g class="pm-cross-readout">
        <g class="pm-red-tag" transform="translate(220 91)">
          <g class="pm-tool-readout">
            <rect width="94" height="23" rx="11.5"/>
            <text x="47" y="11.5">296, 136 px</text>
          </g>
        </g>
      </g>
    </g>

    <g v-else>
      <!-- A half-scale layout represents the storyboard's 480-pixel dialog. -->
      <rect x="200" y="28" width="240" height="172" rx="12" fill="#fff" stroke="#bfcbd9"/>
      <path d="M200 61h240" stroke="#dce3ed"/>
      <path d="M272 61v139h-60a12 12 0 0 1-12-12V61z" fill="#edf1f6"/>
      <path d="M272 61v139" stroke="#e3e9f1"/>
      <text x="214" y="49" class="pm-canvas-name">Export</text>
      <text x="288" y="86" class="pm-canvas-meta">Format</text>
      <rect x="288" y="94" width="135" height="25" rx="5" fill="#f3f6fb" stroke="#dce3ed"/>
      <text x="296" y="111" class="pm-canvas-meta">PNG</text>
      <g class="pm-tolerance-low">
        <path class="pm-red-line" d="M272 144H440m-168-6v12m168-12v12"/>
        <g class="pm-red-tag" transform="translate(325 151)">
          <g class="pm-tool-readout">
            <rect width="62" height="22" rx="11"/>
            <text x="31" y="11">336 px</text>
          </g>
        </g>
        <text x="200" y="221" class="pm-canvas-meta">{{ toleranceLabel }}: 8</text>
      </g>
      <g class="pm-tolerance-high">
        <path class="pm-red-line" d="M200 144H440m-240-6v12m240-12v12"/>
        <g class="pm-red-tag" transform="translate(289 151)">
          <g class="pm-tool-readout">
            <rect width="62" height="22" rx="11"/>
            <text x="31" y="11">480 px</text>
          </g>
        </g>
        <text x="200" y="221" class="pm-canvas-meta">{{ toleranceLabel }}: 32</text>
      </g>
    </g>
  </svg>
</template>

<script>
import { formatLabel, probeAt, roundedBoundsAt } from "../measurement-probe";
import paperPlaneImage from "../assets/creative-paper-plane.jpg";
import namtsoCoverImage from "../assets/namtso-cover.jpg";

const canvas = { x: 0, y: 0, width: 640, height: 250 };
const swatches = [
  { name: "Mint", color: "#BFF0DE" },
  { name: "Bubblegum", color: "#FFC7E1" },
  { name: "Peach", color: "#FFDCA3" }
].map((swatch, index) => ({
  ...swatch,
  x: 47 + index * 192,
  y: 26,
  width: 162,
  height: 94,
  radius: 10
}));
const cards = swatches.map(({ x, y }) => ({ x: x - 6, y: y - 6, width: 174, height: 150, radius: 16 }));
const gapLeft = cards[0].x + cards[0].width;
const gapRight = cards[1].x;
const gapCenter = (gapLeft + gapRight) / 2;
const gapMarker = {
  width: gapRight - gapLeft,
  path: `M${gapLeft} 100H${gapRight}M${gapLeft} 92v16M${gapRight} 92v16`
};
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const demoStops = [
  { time: 300, x: gapCenter, y: 100 },
  { time: 1050, x: 110, y: 72 },
  { time: 2750, x: 110, y: 72 },
  { time: 3650, x: 335, y: 80 },
  { time: 4500, x: 335, y: 80 },
  { time: 4850, x: 335, y: 131 },
  { time: 5850, x: 335, y: 131 },
  { time: 6800, x: 515, y: 68 },
  { time: 7900, x: 515, y: 68 },
  { time: 8700, x: 515, y: 210 },
  { time: 9850, x: 515, y: 210 },
  { time: 11000, x: gapCenter, y: 100 }
];
const demoDuration = 11800;

export default {
  props: {
    mode: { type: String, required: true },
    label: { type: String, required: true },
    paused: Boolean,
    toleranceLabel: { type: String, default: "" }
  },
  data: () => ({
    running: false,
    pointer: null,
    demoTime: 0,
    reduceMotion: false,
    labelScale: 1,
    spacingBounds: canvas,
    panelBounds: canvas,
    chromeBounds: [],
    swatchTextBounds: [],
    cursorImage: process.env.BASE_URL + "img/v5/probe-crosshair.png",
    swatches,
    gapMarker,
    paperPlaneImage,
    namtsoCoverImage,
    paymentOptions: [
      { name: "Card", position: "translate(193 64)" },
      { name: "PayPal", position: "translate(328 64)" },
      { name: "Apple Pay", position: "translate(193 141)" },
      { name: "Debit", position: "translate(328 141)" }
    ]
  }),
  computed: {
    artworkViewBox() {
      if (this.mode !== "spacing") return "156 0 328 240";

      const { x, y, width, height } = this.spacingBounds;
      return `${x} ${y} ${width} ${height}`;
    },
    swatchNameSize() {
      return Math.min(26, Math.max(15, 11 * this.labelScale));
    },
    swatchHexSize() {
      return Math.min(24, Math.max(12, 10 * this.labelScale));
    },
    swatchNameBaseline() {
      return Math.min(121, 136 - this.swatchHexSize);
    },
    swatchHexBaseline() {
      return this.swatchHexSize > 12 ? 141 : 136;
    },
    swatchLabelBand() {
      const labels = this.swatchTextBounds.flat();
      return {
        top: Math.min(140, ...labels.map(bounds => bounds.y)),
        bottom: Math.max(170, ...labels.map(bounds => bounds.y + bounds.height))
      };
    },
    gapLabelTransform() {
      return `translate(${gapCenter - 23 * this.labelScale} ${91 - 20 * this.labelScale}) scale(${this.labelScale})`;
    },
    autoplaySpacing() {
      return this.mode === "spacing" && this.running && !this.paused && !this.pointer && !this.reduceMotion;
    },
    probePoint() {
      if (this.pointer) return this.pointer;
      if (!this.autoplaySpacing || this.demoTime < demoStops[0].time) return null;

      const nextIndex = demoStops.findIndex(stop => stop.time > this.demoTime);
      if (nextIndex < 0) return null;
      const from = demoStops[nextIndex - 1];
      const to = demoStops[nextIndex];
      const progress = (this.demoTime - from.time) / (to.time - from.time);
      const eased = (1 - Math.cos(progress * Math.PI)) / 2;
      return {
        x: from.x + (to.x - from.x) * eased,
        y: from.y + (to.y - from.y) * eased
      };
    },
    liveReading() {
      const point = this.probePoint;
      if (!point) return null;

      const { x, y } = point;
      const inGap = y >= cards[0].y && y <= cards[0].y + cards[0].height
        && cards.slice(0, -1).some((card, index) => x > card.x + card.width && x < cards[index + 1].x);
      const inBottomSpace = !this.pointer && y > cards[0].y + cards[0].height && y < canvas.height;
      const axis = inGap ? "horizontal" : inBottomSpace ? "vertical" : "both";
      const cardIndex = cards.findIndex(card => roundedBoundsAt(point, card));
      let edges;
      if (cardIndex < 0) {
        const chrome = this.chromeBounds.find(bounds => roundedBoundsAt(point, bounds));
        edges = chrome ? roundedBoundsAt(point, chrome)
          : probeAt(point, [...cards, ...this.chromeBounds], this.panelBounds);
      } else {
        const swatch = swatches[cardIndex];
        const card = roundedBoundsAt(point, cards[cardIndex]);
        const whiteArea = { x: card.left, y: card.top, width: card.right - card.left, height: card.bottom - card.top };
        const textBounds = this.swatchTextBounds[cardIndex] || [];
        const text = textBounds.find(bounds => roundedBoundsAt(point, bounds));
        edges = roundedBoundsAt(point, swatch) || (text
          ? roundedBoundsAt(point, text)
          : probeAt(point, [swatch, ...textBounds], whiteArea));
      }
      if (!edges) return null;

      const { left, right, top, bottom } = edges;
      const horizontal = axis !== "vertical"
        ? `M${left} ${y}H${right}M${left} ${y - 8}v16M${right} ${y - 8}v16` : "";
      const vertical = axis !== "horizontal"
        ? `M${x} ${top}V${bottom}M${x - 8} ${top}h16M${x - 8} ${bottom}h16` : "";

      const label = formatLabel(edges, axis);
      const labelWidth = label.length * 7 + 14;
      const width = labelWidth * this.labelScale;
      const height = 20 * this.labelScale;
      const minMargin = 4;
      const labelX = inGap ? (left + right - width) / 2
        : x + width + 16 > canvas.width ? x - width - 16 : x + 16;
      const above = y - height - (inGap ? 9 : 12);
      const below = y + 12;
      // Keep the capsule away from the names and hex codes under the swatches.
      const { top: labelsTop, bottom: labelsBottom } = this.swatchLabelBand;
      const clearsNames = origin => origin + height <= labelsTop || origin >= labelsBottom;
      const minY = this.spacingBounds.y + minMargin;
      const maxY = this.spacingBounds.y + this.spacingBounds.height - minMargin;
      const fits = origin => origin >= minY && origin + height <= maxY;
      const leftEdge = clamp(labelX, minMargin, canvas.width - width - minMargin);
      const clearsChrome = origin => this.chromeBounds.every(bounds =>
        leftEdge + width <= bounds.x || leftEdge >= bounds.x + bounds.width
        || origin + height <= bounds.y || origin >= bounds.y + bounds.height
      );
      const preferred = inGap ? [above, below] : [below, above];
      const labelY = preferred.find(origin => fits(origin) && clearsNames(origin) && clearsChrome(origin));
      const topEdge = labelY === undefined ? labelsTop - height : labelY;

      return {
        lines: horizontal + vertical,
        labelTransform: `translate(${leftEdge} ${topEdge}) scale(${this.labelScale})`,
        labelWidth,
        label
      };
    }
  },
  watch: {
    label() {
      if (this.spacingPanel) this.$nextTick(this.updateSpacingLayout);
    },
    paused() {
      if (this.spacingPanel) this.$nextTick(this.updateChromeBounds);
    },
    autoplaySpacing(playing) {
      cancelAnimationFrame(this.spacingFrame);
      this.demoTime = 0;
      if (!playing) return;

      let start;
      const animate = timestamp => {
        if (start === undefined) start = timestamp;
        this.demoTime = (timestamp - start) % demoDuration;
        this.spacingFrame = requestAnimationFrame(animate);
      };
      this.spacingFrame = requestAnimationFrame(animate);
    }
  },
  methods: {
    updateTextBounds() {
      this.swatchTextBounds = this.$refs.swatchCards.map((card, index) => {
        const swatch = this.swatches[index];
        return Array.from(card.querySelectorAll("text"), text => {
          const bounds = text.getBBox();
          return {
            x: swatch.x + bounds.x,
            y: swatch.y + bounds.y,
            width: bounds.width,
            height: bounds.height,
            radius: 0
          };
        });
      });
    },
    updateSpacingLayout() {
      const { left, top, width, height } = this.$el.getBoundingClientRect();
      if (width <= 0) return;

      this.labelScale = canvas.width / width;
      this.spacingBounds = {
        ...canvas,
        y: -this.spacingStage.offsetTop * this.labelScale,
        height: height * this.labelScale
      };
      const panel = this.spacingPanel.getBoundingClientRect();
      const style = getComputedStyle(this.spacingPanel);
      this.panelBounds = {
        x: (panel.left - left) * this.labelScale,
        y: this.spacingBounds.y + (panel.top - top) * this.labelScale,
        width: panel.width * this.labelScale,
        height: panel.height * this.labelScale,
        radius: parseFloat(style.borderTopLeftRadius) * this.labelScale
      };
      this.$nextTick(() => {
        if (!this.$el.isConnected) return;
        this.updateTextBounds();
        this.updateChromeBounds();
      });
    },
    updateChromeBounds() {
      if (!this.$el.isConnected) return;
      const matrix = this.$el.getScreenCTM();
      if (!matrix) return;

      const inverse = matrix.inverse();
      const range = document.createRange();
      const nodes = this.spacingPanel.querySelectorAll(".pm-probe-heading h2, .pm-probe-heading span, .pm-motion-toggle");
      const textAndControls = Array.from(nodes).flatMap(node => {
        range.selectNodeContents(node);
        const rects = node.tagName === "BUTTON" ? node.getClientRects() : range.getClientRects();
        return Array.from(rects, rect => {
          const { x, y } = new DOMPoint(rect.left, rect.top).matrixTransform(inverse);
          return { x, y, width: rect.width * this.labelScale, height: rect.height * this.labelScale, radius: 0 };
        }).filter(rect => rect.width > 0 && rect.height > 0);
      });
      const dividerHeight = parseFloat(getComputedStyle(this.spacingPanel.querySelector(".pm-probe-footer")).borderTopWidth);
      this.chromeBounds = dividerHeight > 0
        ? [...textAndControls, { x: 0, y: canvas.height, width: canvas.width, height: dividerHeight * this.labelScale, radius: 0 }]
        : textAndControls;
    },
    clearProbe() {
      this.pointer = null;
    },
    updateMotionPreference(event) {
      this.reduceMotion = event.matches;
    },
    moveProbe(event) {
      if (event.pointerType === "mouse") this.updateProbe(event);
    },
    tapProbe(event) {
      if (event.pointerType !== "mouse") this.updateProbe(event);
    },
    leaveProbe(event) {
      if (event.pointerType === "mouse") this.pointer = null;
    },
    updateProbe(event) {
      if (this.mode !== "spacing") return;

      const matrix = this.$el.getScreenCTM();
      if (!matrix) return;

      const point = this.$el.createSVGPoint();
      point.x = event.clientX;
      point.y = event.clientY;
      const { x, y } = point.matrixTransform(matrix.inverse());
      this.pointer = roundedBoundsAt({ x, y }, this.panelBounds) ? { x, y } : null;
    }
  },
  mounted() {
    if (this.mode === "spacing") {
      this.spacingPanel = this.$el.parentElement;
      this.spacingStage = this.spacingPanel.querySelector(".pm-probe-stage");
      this.pointerHandlers = {
        pointerenter: this.moveProbe,
        pointermove: this.moveProbe,
        pointerup: this.tapProbe,
        pointerleave: this.leaveProbe,
        pointercancel: this.clearProbe
      };
      Object.entries(this.pointerHandlers).forEach(([event, handler]) => this.spacingPanel.addEventListener(event, handler));
      this.updateSpacingLayout();
      if (document.fonts) {
        document.fonts.ready.then(() => {
          if (this.$el.isConnected) this.updateSpacingLayout();
        });
      }
      if (window.ResizeObserver) {
        this.labelObserver = new ResizeObserver(this.updateSpacingLayout);
        this.labelObserver.observe(this.spacingPanel);
        this.labelObserver.observe(this.spacingStage);
      }
      this.motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
      this.updateMotionPreference(this.motionPreference);
      this.motionPreference.addEventListener("change", this.updateMotionPreference);
    }

    if (!window.IntersectionObserver) {
      this.running = true;
      return;
    }

    this.observer = new IntersectionObserver(([entry]) => {
      this.running = entry.isIntersecting && entry.intersectionRatio >= 0.35;
    }, { threshold: 0.35 });
    this.observer.observe(this.$el);
  },
  beforeDestroy() {
    if (this.observer) this.observer.disconnect();
    if (this.labelObserver) this.labelObserver.disconnect();
    if (this.spacingPanel) {
      Object.entries(this.pointerHandlers).forEach(([event, handler]) => this.spacingPanel.removeEventListener(event, handler));
    }
    if (this.motionPreference) {
      this.motionPreference.removeEventListener("change", this.updateMotionPreference);
      cancelAnimationFrame(this.spacingFrame);
    }
  }
};
</script>

<style src="../assets/measurement-motion.css"></style>
