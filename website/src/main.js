/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import { followLegacyLink, scrollToSection } from "./legacy-links";
import Argon from "./plugins/argon-kit";
import VueI18n from 'vue-i18n'
import './registerServiceWorker'
import { initialLocale } from './site-locales'

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueI18n);

if (!followLegacyLink()) {
  window.addEventListener("hashchange", followLegacyLink);

  const i18n = new VueI18n({ locale: initialLocale() });
  new Vue({
    i18n,
    render: h => h(App),
    mounted() {
      // The Vue mount replaces the static anchor targets in the initial HTML.
      this.$nextTick(scrollToSection);
    }
  }).$mount("#app");
}
