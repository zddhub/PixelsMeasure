<template>
  <header class="pm-header">
    <div class="pm-wrap pm-header-inner">
      <a class="pm-brand" :href="homeURL">
        <img :src="imageBase + 'app-icon.png'" alt="" width="32" height="32">
        <span>PixelsMeasure</span>
      </a>
      <nav class="pm-nav" :aria-label="copy.siteNav">
        <a v-for="(section, index) in sections" :key="section" :href="'#' + section"
          :aria-current="currentSection === section ? 'location' : null">
          {{ copy.nav[index] }}
        </a>
      </nav>
      <select class="pm-language" v-model="locale" :aria-label="copy.language">
        <option v-for="{ tag, label } in siteLocales" :key="tag" :value="tag" :lang="tag">{{ label }}</option>
      </select>
    </div>
  </header>
</template>

<script>
import { copyFor, imageBase } from "../landing-copy";
import { localePath, siteLocales } from "../site-locales";

export default {
  data: () => ({
    imageBase,
    siteLocales,
    sections: ["workflow", "tools", "download"],
    currentSection: window.location.hash.slice(1)
  }),
  computed: {
    homeURL() {
      return process.env.BASE_URL + localePath(this.locale);
    },
    copy() {
      return copyFor(this.locale);
    },
    locale: {
      get() {
        return this.$i18n.locale;
      },
      set(locale) {
        if (locale === this.$i18n.locale) return;
        window.location.assign(process.env.BASE_URL + localePath(locale) + window.location.search + window.location.hash);
      }
    }
  },
  mounted() {
    window.addEventListener("hashchange", this.updateCurrentSection);
  },
  beforeDestroy() {
    window.removeEventListener("hashchange", this.updateCurrentSection);
  },
  methods: {
    updateCurrentSection() {
      this.currentSection = window.location.hash.slice(1);
    }
  }
};
</script>
