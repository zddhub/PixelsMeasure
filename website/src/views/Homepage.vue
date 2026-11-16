<template>
  <div class="pm-landing">
    <section class="pm-hero" aria-labelledby="pm-title">
      <div class="pm-wrap pm-hero-layout">
        <div class="pm-hero-copy">
          <h1 id="pm-title">{{ copy.hero[0] }} <span>{{ copy.hero[1] }}</span></h1>
          <p>{{ copy.intro }}</p>
          <div class="pm-hero-actions">
            <a class="pm-store" :href="storeURL" :aria-label="copy.store">
              <img :src="storeBadge" alt="" width="155" height="52">
            </a>
            <button class="pm-preview-button" type="button" aria-haspopup="dialog" @click="openPreview">
              <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.4"/>
                <path d="M8.5 6.5 14 10l-5.5 3.5z" fill="currentColor"/>
              </svg>
              {{ copy.watchPreview }}
            </button>
          </div>
        </div>
        <div class="pm-hero-media">
          <measurement-artwork mode="spacing" :label="copy.spacingAlt" :paused="animationsPaused || previewOpen"/>
          <div class="pm-hero-media-footer">
            <span class="pm-probe-hint">{{ copy.probeHint }}</span>
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

    <section id="workflow" class="pm-wrap pm-section" aria-labelledby="pm-workflow-title">
      <h2 id="pm-workflow-title">{{ copy.workflow }}</h2>
      <article class="pm-story">
        <div class="pm-story-art pm-mac">
          <img :src="imageBase + 'mac-art.jpg'" :alt="copy.live.alt" width="1360" height="694" loading="lazy">
        </div>
        <div class="pm-story-copy">
          <h3>{{ copy.live.title }}</h3>
          <p>{{ copy.live.body }}</p>
          <p class="pm-note">{{ copy.live.permission }}</p>
        </div>
      </article>
      <article class="pm-story pm-story-image">
        <div class="pm-story-copy">
          <h3>{{ copy.image.title }}</h3>
          <p>{{ copy.image.body }}</p>
        </div>
        <div class="pm-story-art pm-iphone">
          <img :src="imageBase + 'iphone-art.jpg'" :alt="copy.image.alt" width="332" height="704" loading="lazy">
        </div>
      </article>
    </section>

    <section id="tools" class="pm-tools" aria-labelledby="pm-tools-title">
      <div class="pm-wrap pm-section">
        <h2 id="pm-tools-title">{{ copy.tools }}</h2>
        <p class="pm-section-summary">{{ copy.toolsIntro }}</p>
        <div class="pm-tools-grid">
          <article v-for="tool in copy.measurements" :key="tool.mode" class="pm-measurement" :class="'pm-measurement-' + tool.mode">
            <measurement-artwork :mode="tool.mode" :label="tool.alt" :tolerance-label="copy.tolerance" :paused="animationsPaused || previewOpen"/>
            <div>
              <h3>{{ tool.title }}</h3>
              <p>{{ tool.body }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="pm-handoff" aria-labelledby="pm-handoff-title">
      <div class="pm-wrap pm-section">
        <h2 id="pm-handoff-title">{{ copy.handoff.title }}</h2>
        <p class="pm-section-summary">{{ copy.handoff.intro }}</p>
        <div class="pm-handoff-grid">
          <article v-for="([title, body], index) in copy.handoff.features" :key="title">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor"
              stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path :d="handoffIcons[index]"/>
            </svg>
            <h3>{{ title }}</h3>
            <p>{{ body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="download" class="pm-wrap pm-download" aria-labelledby="pm-download-title">
      <div>
        <h2 id="pm-download-title">{{ copy.download }}</h2>
        <p>{{ copy.requirements }}</p>
        <a class="pm-store" :href="storeURL" :aria-label="copy.store">
          <img :src="storeBadge" alt="" width="155" height="52">
        </a>
      </div>
      <dl class="pm-plans">
        <div v-for="plan in copy.plans" :key="plan[0]">
          <dt>{{ plan[0] }}</dt>
          <dd>{{ plan[1] }}</dd>
        </div>
      </dl>
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
      <video v-if="previewOpen" :src="imageBase + 'app-store-preview.mp4'" :aria-label="copy.previewDescription"
        controls autoplay playsinline>
        <a :href="imageBase + 'app-store-preview.mp4'">{{ copy.watchPreview }}</a>
      </video>
    </dialog>
  </div>
</template>

<script>
import MeasurementArtwork from "../components/MeasurementArtwork.vue";
import { copyFor, imageBase, storeURL } from "../landing-copy";

export default {
  name: "Homepage",
  components: { MeasurementArtwork },
  data: () => ({
    animationsPaused: false,
    previewOpen: false,
    handoffIcons: [
      "m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5",
      "m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18",
      "M12 15V3m-4 4 4-4 4 4m-9 4H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2"
    ],
    imageBase,
    storeURL,
    storeBadge: process.env.BASE_URL + "img/download-on-app-store-badge.svg"
  }),
  computed: {
    copy() {
      return copyFor(this.$i18n.locale);
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
