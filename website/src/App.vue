<template>
  <div id="app">
    <router-view name="header" :lang="$i18n.locale"/>
    <main>
      <router-view/>
    </main>
    <router-view name="footer" :lang="$i18n.locale"/>
  </div>
</template>

<script>
import { copyFor } from "./landing-copy";
import { defaultLocale } from "./site-locales";

const legalTitles = {
  privacy: "PixelsMeasure Privacy Policy",
  TermsOfService: "PixelsMeasure Terms of Service"
};

export default {
  computed: {
    pageMetadata() {
      const locale = this.$i18n.locale;
      const legalTitle = legalTitles[this.$route.name];
      const copy = copyFor(locale);
      return {
        language: legalTitle ? defaultLocale : locale,
        title: legalTitle || `PixelsMeasure — ${copy.pageTitle}`,
        description: legalTitle || copy.intro
      };
    }
  },
  watch: {
    pageMetadata: {
      immediate: true,
      handler({ language, title, description }) {
        document.documentElement.lang = language;
        document.title = title;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.content = description;
      }
    }
  }
};
</script>

<style src="./assets/pixelsmeasure.css"></style>
