<template>
  <footer class="pm-footer">
    <div class="pm-wrap pm-footer-inner">
      <small>© 2022–{{ year }} ZDDHUB</small>
      <nav :aria-label="copy.footerNav">
        <router-link to="/privacy">{{ copy.footer[0] }}{{ legalLanguage }}</router-link>
        <router-link to="/terms-of-service">{{ copy.footer[1] }}{{ legalLanguage }}</router-link>
        <a href="mailto:pixelsmeasure@gmail.com">{{ copy.footer[2] }}</a>
        <a href="https://github.com/zddhub/PixelsMeasure">{{ copy.footer[3] }}</a>
        <a href="https://zddhub.com">{{ copy.footer[4] }}</a>
      </nav>
    </div>
  </footer>
</template>

<script>
import { copyFor } from "../landing-copy";

export default {
  data: () => ({ year: new Date().getFullYear() }),
  computed: {
    legalLanguage() {
      const locale = this.$i18n.locale;
      if (locale === "en-US") return "";
      return locale.startsWith("zh-") ? `（${this.copy.englishOnly}）` : ` (${this.copy.englishOnly})`;
    },
    copy() {
      return copyFor(this.$i18n.locale);
    }
  }
};
</script>
