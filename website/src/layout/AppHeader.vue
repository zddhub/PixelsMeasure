<template>
    <header class="header-global">
        <base-nav class="navbar-main sticky" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/logo.png" alt="logo">
                <span class="nav-link-inner--menu">{{ header.title }}</span>
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                        <span class="nav-link-inner--menu">{{ header.title }}</span>
                    </router-link>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item" v-for="menu in header.menus" :key="menu.title">
                    <a class="nav-link nav-link-icon" :href="menu.url"
                       :target="menu.url === '/#/privacy' ? '' : '_blank'" rel="noopener" data-toggle="tooltip" title="">
                        <span class="nav-link-inner--text">{{ menu.title }}</span>
                    </a>
                </li>

                <li class="nav-item dropdown">
                    <base-dropdown :title="langs[this.$i18n.locale]">
                        <a class="dropdown-item" v-for="language in this.languages()" :key="language.locale" @click="selectOption(language)">{{ language.title }}</a>
                    </base-dropdown>
                </li>

                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <primary-button :text="header.download.title" :url="header.download.url"></primary-button>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import PrimaryButton from "@/components/PrimaryButton";
import data from "../data.json";

export default {
  components: {
    BaseNav,
    BaseDropdown,
    CloseButton,
    PrimaryButton
  },
  data() {
    return {
      langs: {
        "en": "English",
        "cn": "简体中文"
      }
    }
  },
  computed: {
    header()  {
        return data[this.$root.$i18n.locale].header
    }
  },
  methods: {
    selectOption(language) {
        this.$root.$i18n.locale = language.locale
        localStorage.setItem('locale', language.locale)
    },
    languages() {
        return [
            {
                "locale": "en",
                "title": "English"
            },
            {
                "locale": "cn",
                "title": "简体中文"
            }
        ]
    }
  }
};
</script>
<style>
</style>
