<template>
    <header class="header-global">
        <base-nav class="navbar-main sticky" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/logo.png" alt="logo">
                <span class="nav-link-inner--menu">PixelsMeasure</span>
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                        <span class="nav-link-inner--menu">PixelsMeasure</span>
                    </router-link>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <!-- <a class="nav-link nav-link-icon" href="/privacy" rel="noopener" data-toggle="tooltip" title="Email">
                    </a> -->
                    <router-link to="/privacy" class="nav-link nav-link-icon"><span class="nav-link-inner--text">Privacy</span></router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="mailto:zddhub@gmail.com"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Email">
                        <span class="nav-link-inner--text">Contact us</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/zddhub/PixelsMeasure"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <span class="nav-link-inner--text">Github</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <primary-button></primary-button>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    PrimaryButton
  }
};
</script>
<style>
</style>
