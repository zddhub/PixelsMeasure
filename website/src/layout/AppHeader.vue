<template>
  <header class="pm-header">
    <div class="pm-wrap pm-header-inner">
      <router-link class="pm-brand" to="/">
        <img :src="imageBase + 'app-icon.png'" alt="" width="32" height="32">
        <span>PixelsMeasure</span>
      </router-link>
      <nav class="pm-nav" :aria-label="locale === 'cn' ? '网站导航' : 'Site navigation'">
        <router-link v-for="(section, index) in sections" :key="section" :to="{ path: '/', hash: '#' + section }">
          {{ copy.nav[index] }}
        </router-link>
      </nav>
      <select class="pm-language" v-model="locale" :aria-label="copy.language">
        <option value="en" lang="en">English</option>
        <option value="cn" lang="zh-Hans">简体中文</option>
      </select>
    </div>
  </header>
</template>

<script>
import { copyFor, imageBase } from "../landing-copy";

export default {
  data: () => ({ imageBase, sections: ["workflow", "tools", "download"] }),
  computed: {
    copy() {
      return copyFor(this.locale);
    },
    locale: {
      get() {
        return this.$i18n.locale === "cn" ? "cn" : "en";
      },
      set(locale) {
        this.$i18n.locale = locale;
        localStorage.setItem("locale", locale);
      }
    }
  },
  watch: {
    locale: {
      immediate: true,
      handler(locale) {
        document.documentElement.lang = locale === "cn" ? "zh-Hans" : "en";
      }
    }
  }
};
</script>
