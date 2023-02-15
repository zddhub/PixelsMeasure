import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Homepage from "./views/Homepage.vue";
import Privacy from "./views/Privacy.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "homepage",
      components: {
        header: AppHeader,
        default: Homepage,
        footer: AppFooter
      }
    },
    {
      path: "/privacy",
      name: "privacy",
      components: {
        header: AppHeader,
        default: Privacy,
        footer: AppFooter
      }
    },
    {
      path: "*",
      name: "homepage",
      components: {
        header: AppHeader,
        default: Homepage,
        footer: AppFooter
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
