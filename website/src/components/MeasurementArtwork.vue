<template>
  <svg class="pm-demo-canvas"
    :class="{ 'pm-demo-running': running && !paused && !pointer, 'pm-demo-live': pointer }"
    :viewBox="mode === 'spacing' ? '0 0 640 264' : '156 0 328 240'"
    role="img" :aria-label="label" @pointerenter="moveProbe" @pointermove="moveProbe"
    @pointerleave="pointer = null" @pointercancel="pointer = null">
    <g v-if="mode === 'spacing'">
      <g v-for="swatch in swatches" :key="swatch.name"
        :transform="'translate(' + swatch.x + ' ' + swatch.y + ')'">
        <rect x="-6" y="-6" width="174" height="150" rx="16" fill="#fff" stroke="#e5e9f2"/>
        <rect :width="swatch.width" :height="swatch.height" :rx="swatch.radius" :fill="swatch.color"/>
        <text x="3" y="121" class="pm-canvas-name">{{ swatch.name }}</text>
        <text x="3" y="136" class="pm-canvas-meta">{{ swatch.color }}</text>
      </g>
      <g v-if="!pointer">
        <g v-if="showPin(2050)" class="pm-pin-size">
          <path class="pm-red-line" d="M47 63H209m-162-8v16m162-16v16M109 26v94m-8-94h16m-16 94h16"
            fill="none"/>
          <g class="pm-red-tag" transform="translate(121 71)">
            <rect width="86" height="21" rx="10.5"/>
            <text x="43" y="10.5">162 × 94 px</text>
          </g>
        </g>
        <g v-if="showPin(3900)" class="pm-pin-gap">
          <path class="pm-red-line"
            :d="gapMarker.path" fill="none"/>
          <g class="pm-red-tag" :transform="gapMarker.transform">
            <rect width="46" height="22" rx="11"/>
            <text x="23" y="11">{{ gapMarker.width }} px</text>
          </g>
        </g>
        <g v-if="showPin(5900)" class="pm-pin-bottom">
          <path class="pm-red-line" d="M447 170v80m-8-80h16m-16 80h16" fill="none"/>
          <g class="pm-red-tag" transform="translate(457 199)">
            <rect width="46" height="22" rx="11"/>
            <text x="23" y="11">80 px</text>
          </g>
        </g>
      </g>
      <path d="M41 250h558" stroke="#dedede"/>
      <g v-if="liveReading" class="pm-active-probe" aria-hidden="true">
        <path class="pm-red-line" :d="liveReading.lines" fill="none"/>
        <image :href="cursorImage" :x="probePoint.x - 11" :y="probePoint.y - 11" width="24" height="24"/>
        <g class="pm-red-tag" :transform="'translate(' + liveReading.labelX + ' ' + liveReading.labelY + ')'">
          <rect :width="liveReading.labelWidth" height="21" rx="10.5"/>
          <text :x="liveReading.labelWidth / 2" y="10.5">{{ liveReading.label }}</text>
        </g>
      </g>
    </g>

    <g v-else-if="mode === 'object'">
      <rect x="183" y="17" width="274" height="206" rx="18" fill="#ecf3ff" stroke="#dee8f9"/>
      <!-- The original smart-object storyboard uses a 156 × 110 paper plane. -->
      <g transform="translate(242 58)">
        <path d="M0 53 156 0 117 110 84 81 61 100 47 70Z" fill="#5284df"/>
        <path d="M47 70 137 15 84 81 61 100Z" fill="#3565ba"/>
      </g>
      <rect class="pm-object-draft" x="218" y="38" width="204" height="152"
        fill="#ff3b3010" stroke="var(--pm-probe-color)" stroke-dasharray="5 4"/>
      <g class="pm-object-result">
        <rect x="242" y="58" width="156" height="110" fill="#ff3b3010" class="pm-red-line"/>
        <g class="pm-red-tag" transform="translate(268 104)">
          <rect width="104" height="24" rx="12"/>
          <text x="52" y="12">156 × 110 px</text>
        </g>
      </g>
    </g>

    <g v-else-if="mode === 'guides'">
      <rect x="169" y="15" width="302" height="200" rx="17" fill="#fff" stroke="#d4e5df"/>
      <g transform="translate(212 30)">
        <rect width="216" height="124" rx="5" fill="#e2eee6"/>
        <circle cx="162" cy="30" r="21" fill="#fff4cf"/>
        <path d="M0 97 77 54l46 27 93-43v86H0Z" fill="#a8c8b6"/>
        <path d="M0 99 65 78l65 46H0Z" fill="#74a28e"/>
        <text x="14" y="107" class="pm-cover-title">Along the coast</text>
        <rect y="135" width="213" height="35" rx="5" fill="#f1f7f3" stroke="#d4e5df"/>
        <text x="10" y="157" class="pm-canvas-meta">The weekend itinerary</text>
      </g>
      <path d="M212 8v215" class="pm-blue-line pm-guide-left" fill="none"/>
      <path d="M428 8v215" class="pm-blue-line pm-guide-right" fill="none"/>
      <g class="pm-guide-readout">
        <g class="pm-blue-tag" transform="translate(288 206)">
          <rect width="64" height="23" rx="11.5"/>
          <text x="32" y="11.5">216 px</text>
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
          <rect width="94" height="23" rx="11.5"/>
          <text x="47" y="11.5">296, 136 px</text>
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
        <g class="pm-red-tag" transform="translate(325 151)"><rect width="62" height="22" rx="11"/><text x="31" y="11">336 px</text></g>
        <text x="200" y="221" class="pm-canvas-meta">{{ toleranceLabel }}: 8</text>
      </g>
      <g class="pm-tolerance-high">
        <path class="pm-red-line" d="M200 144H440m-240-6v12m240-12v12"/>
        <g class="pm-red-tag" transform="translate(289 151)"><rect width="62" height="22" rx="11"/><text x="31" y="11">480 px</text></g>
        <text x="200" y="221" class="pm-canvas-meta">{{ toleranceLabel }}: 32</text>
      </g>
    </g>
  </svg>
</template>

<script>
import { formatLabel, probeAt } from "../measurement-probe";

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
  path: `M${gapLeft} 100H${gapRight}M${gapLeft} 92v16M${gapRight} 92v16`,
  transform: `translate(${gapCenter - 23} 108)`
};
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// Follow the distance storyboard: size, horizontal gap, then space below the card.
const spacingStops = [
  { time: 0, x: 35, y: 18 },
  { time: 1450, x: 109, y: 63 },
  { time: 2050, x: 109, y: 63 },
  { time: 2750, x: gapCenter, y: 63 },
  { time: 3350, x: gapCenter, y: 100 },
  { time: 3900, x: gapCenter, y: 100 },
  { time: 4500, x: gapCenter, y: 212 },
  { time: 5300, x: 447, y: 212 },
  { time: 5900, x: 447, y: 212 }
];
const spacingDuration = 7000;

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
    cursorImage: process.env.BASE_URL + "img/v5/probe-crosshair.png",
    swatches,
    gapMarker,
    paymentOptions: [
      { name: "Card", position: "translate(193 64)" },
      { name: "PayPal", position: "translate(328 64)" },
      { name: "Apple Pay", position: "translate(193 141)" },
      { name: "Debit", position: "translate(328 141)" }
    ]
  }),
  computed: {
    autoplaySpacing() {
      return this.mode === "spacing" && this.running && !this.paused && !this.pointer && !this.reduceMotion;
    },
    probePoint() {
      if (this.pointer) return this.pointer;
      if (!this.autoplaySpacing || this.demoTime >= spacingStops[spacingStops.length - 1].time) return null;

      const nextIndex = spacingStops.findIndex(stop => stop.time > this.demoTime);
      const from = spacingStops[nextIndex - 1];
      const to = spacingStops[nextIndex];
      const fraction = (this.demoTime - from.time) / (to.time - from.time);
      const eased = (1 - Math.cos(fraction * Math.PI)) / 2;
      return {
        x: from.x + (to.x - from.x) * eased,
        y: from.y + (to.y - from.y) * eased
      };
    },
    liveReading() {
      if (!this.probePoint) return null;

      const { x, y } = this.probePoint;
      const axis = this.pointer || this.demoTime < 2050 ? "both"
        : this.demoTime < 3900 ? "horizontal" : "vertical";
      const contains = shape => x >= shape.x && x <= shape.x + shape.width
        && y >= shape.y && y <= shape.y + shape.height;
      const swatch = axis === "both" && swatches.find(contains);
      const inside = swatch || cards.find(contains);
      const edges = inside ? probeAt(this.probePoint, [], inside) : probeAt(this.probePoint, cards, canvas);
      const { left, right, top, bottom } = edges;
      const horizontal = axis !== "vertical"
        ? `M${left} ${y}H${right}M${left} ${y - 8}v16M${right} ${y - 8}v16` : "";
      const vertical = axis !== "horizontal"
        ? `M${x} ${top}V${bottom}M${x - 8} ${top}h16M${x - 8} ${bottom}h16` : "";

      const label = formatLabel(edges, axis);
      const labelWidth = label.length * 7 + 14;
      const labelX = x + labelWidth + 16 > canvas.width ? x - labelWidth - 16 : x + 16;
      const labelY = y > 213 ? y - 37 : y + 16;

      return {
        lines: horizontal + vertical,
        labelX: clamp(labelX, 4, canvas.width - labelWidth - 4),
        labelY: clamp(labelY, 4, 239),
        labelWidth,
        label
      };
    }
  },
  watch: {
    autoplaySpacing(playing) {
      if (!playing) {
        cancelAnimationFrame(this.spacingFrame);
        this.demoTime = 0;
        return;
      }

      let start;
      const animate = timestamp => {
        if (start === undefined) start = timestamp;
        this.demoTime = (timestamp - start) % spacingDuration;
        this.spacingFrame = requestAnimationFrame(animate);
      };
      this.spacingFrame = requestAnimationFrame(animate);
    }
  },
  methods: {
    showPin(time) {
      return !this.autoplaySpacing || this.demoTime >= time;
    },
    updateMotionPreference(event) {
      this.reduceMotion = event.matches;
    },
    moveProbe(event) {
      if (this.mode !== "spacing" || event.pointerType !== "mouse") return;
      const matrix = this.$el.getScreenCTM();
      if (!matrix) return;

      const point = this.$el.createSVGPoint();
      point.x = event.clientX;
      point.y = event.clientY;
      const { x, y } = point.matrixTransform(matrix.inverse());
      this.pointer = { x: clamp(x, 0, canvas.width), y: clamp(y, 0, canvas.height) };
    }
  },
  mounted() {
    if (this.mode === "spacing") {
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
    if (this.motionPreference) {
      this.motionPreference.removeEventListener("change", this.updateMotionPreference);
      cancelAnimationFrame(this.spacingFrame);
    }
  }
};
</script>

<style src="../assets/measurement-motion.css"></style>
