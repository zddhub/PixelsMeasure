<template>
  <header class="pm-header">
    <div class="pm-wrap pm-header-inner">
      <router-link class="pm-brand" to="/">
        <img :src="imageBase + 'app-icon.png'" alt="" width="32" height="32">
        <span>PixelsMeasure</span>
      </router-link>
      <nav class="pm-nav" :aria-label="copy.siteNav">
        <router-link v-for="(section, index) in sections" :key="section" :to="{ path: '/', hash: '#' + section }">
          {{ copy.nav[index] }}
        </router-link>
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
  data: () => ({ imageBase, siteLocales, sections: ["workflow", "tools", "download"] }),
  computed: {
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
  }
};
</script>
