<template>
  <div class="pm-landing">
    <section class="pm-hero" aria-labelledby="pm-title">
      <div class="pm-wrap pm-hero-layout">
        <div class="pm-hero-copy">
          <h1 id="pm-title">{{ copy.hero[0] }} <br>{{ copy.hero[1] }}</h1>
          <p>{{ copy.intro }}</p>
          <p class="pm-platform-note">{{ copy.platformNote }}</p>
          <div class="pm-hero-actions">
            <a class="pm-store" :href="storeURL">
              <img :src="storeBadge" :alt="copy.store">
            </a>
            <button class="pm-preview-button" type="button" aria-haspopup="dialog" @click="openPreview">
              <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.4"/>
                <path d="M8.5 6.5 14 10l-5.5 3.5z" fill="currentColor"/>
              </svg>
              {{ copy.watchPreview }}
            </button>
          </div>
          <p class="pm-free-note">{{ copy.freeNote }} · <a href="#download">{{ copy.proLink }}</a></p>
        </div>
        <div class="pm-probe">
          <div class="pm-probe-heading">
            <h2>{{ copy.tryProbe }}</h2>
            <span class="pm-probe-hint">{{ copy.probeHint }}</span>
            <span class="pm-probe-touch-hint">{{ copy.probeTouchHint }}</span>
          </div>
          <div class="pm-probe-stage" aria-hidden="true"></div>
          <measurement-artwork mode="spacing" :label="copy.spacingAlt" :paused="animationsPaused || previewOpen"/>
          <div class="pm-probe-footer">
            <button type="button" class="pm-motion-toggle" @click="animationsPaused = !animationsPaused">
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path :d="animationsPaused ? 'M5 3l8 5-8 5z' : 'M4 3h3v10H4zM9 3h3v10H9z'" fill="currentColor"/>
              </svg>
              {{ animationsPaused ? copy.resumeMotion : copy.pauseMotion }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="spacing" class="pm-spacing" aria-labelledby="pm-spacing-title">
      <div class="pm-wrap pm-section pm-spacing-inner">
        <div class="pm-spacing-copy">
          <p class="pm-release">PixelsMeasure 5.1+</p>
          <h2 id="pm-spacing-title">{{ creative.spacingTitle }}</h2>
          <dl class="pm-spacing-platforms">
            <div>
              <dt>Mac</dt>
              <dd>{{ creative.mac }}</dd>
            </div>
            <div>
              <dt>iPhone &amp; iPad</dt>
              <dd>{{ creative.touch }}</dd>
            </div>
          </dl>
        </div>
        <img class="pm-spacing-image" :src="creativeBase + 'spacing-preview.jpg'"
          :alt="creative.spacingAlt" width="1260" height="548" loading="lazy">
      </div>
    </section>

    <section id="workflow" class="pm-wrap pm-section" aria-labelledby="pm-workflow-title">
      <h2 id="pm-workflow-title">{{ copy.workflow }}</h2>
      <ol class="pm-workflow-grid">
        <li v-for="(step, index) in copy.workflowSteps" :key="step.title">
          <div class="pm-workflow-art">
            <img :src="imageBase + step.image" :alt="step.alt" :width="step.width" :height="step.height" loading="lazy">
          </div>
          <div class="pm-step">
            <span class="pm-step-number" aria-hidden="true">{{ index + 1 }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.body }}</p>
            </div>
          </div>
        </li>
      </ol>
      <p class="pm-workflow-extra">{{ copy.workflowExtra[0] }}<code>.pixelsmeasure</code>{{ copy.workflowExtra[1] }}</p>
      <article class="pm-live-workflow">
        <div>
          <h3>{{ copy.live.title }}</h3>
          <p>{{ copy.live.body }}</p>
          <p class="pm-note">{{ copy.live.permission }}</p>
        </div>
        <img :src="imageBase + 'live-menu.jpg'" :alt="copy.live.alt" width="310" height="166" loading="lazy">
      </article>
    </section>

    <section id="tools" class="pm-tools" aria-labelledby="pm-tools-title">
      <div class="pm-wrap pm-section">
        <h2 id="pm-tools-title">{{ copy.tools }}</h2>
        <p class="pm-section-summary">{{ copy.toolsIntro }}</p>
        <div class="pm-tools-grid">
          <article v-for="tool in copy.measurements" :key="tool.mode" class="pm-measurement">
            <measurement-artwork :mode="tool.mode" :label="tool.alt" :tolerance-label="copy.tolerance" :paused="animationsPaused || previewOpen"/>
            <div>
              <h3>{{ tool.title }}</h3>
              <p>{{ tool.body }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="download" class="pm-download" aria-labelledby="pm-download-title">
      <div class="pm-wrap pm-download-inner">
        <div class="pm-download-copy">
          <h2 id="pm-download-title">{{ copy.download }}</h2>
          <p>{{ copy.requirements }}</p>
        </div>
        <a class="pm-store pm-download-store" :href="storeURL">
          <img :src="storeBadge" :alt="copy.store">
        </a>
        <dl class="pm-plans">
          <div v-for="plan in copy.plans" :key="plan.name">
            <dt>{{ plan.name }}</dt>
            <dd>
              <strong class="pm-plan-limit">{{ plan.limit }}</strong>
              <span class="pm-plan-scope">{{ copy.planScope }}</span>
              <ul>
                <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
              </ul>
              <span v-if="plan.note" class="pm-plan-note">{{ plan.note }}</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <dialog ref="preview" class="pm-preview" aria-labelledby="pm-preview-title" @close="previewOpen = false">
      <div class="pm-preview-bar">
        <h2 id="pm-preview-title">{{ copy.previewTitle }}</h2>
        <button type="button" :aria-label="copy.closePreview" autofocus @click="$refs.preview.close()">
          <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
            <path d="m5 5 10 10M15 5 5 15" fill="none" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </button>
      </div>
      <video v-if="previewOpen" :src="imageBase + 'site-demo.mp4'" :aria-label="copy.previewDescription"
        controls autoplay playsinline>
        <a :href="imageBase + 'site-demo.mp4'">{{ copy.watchPreview }}</a>
      </video>
    </dialog>
  </div>
</template>

<script>
import MeasurementArtwork from "../components/MeasurementArtwork.vue";
import { copyFor, imageBase, storeURL } from "../landing-copy";
import creativeCopy from "../locales/creative";
import { defaultLocale } from "../site-locales";

export default {
  name: "Homepage",
  components: { MeasurementArtwork },
  data: () => ({
    animationsPaused: false,
    previewOpen: false,
    imageBase,
    creativeBase: process.env.BASE_URL + "img/v5.1/",
    storeURL
  }),
  computed: {
    copy() {
      return copyFor(this.$i18n.locale);
    },
    creative() {
      return creativeCopy[this.$i18n.locale] || creativeCopy[defaultLocale];
    },
    storeBadge() {
      return process.env.BASE_URL + "img/app-store/" + this.$i18n.locale + ".svg";
    }
  },
  methods: {
    openPreview() {
      this.$refs.preview.showModal();
      this.previewOpen = true;
    }
  }
};
</script>
