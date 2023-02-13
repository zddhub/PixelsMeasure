<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/logo.png" alt="logo">
                <span class="nav-link-inner--menu">PixelsMeasure</span>
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="#">
                        <span class="nav-link-inner--menu">PixelsMeasure</span>
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="/privacy"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Email">
                        <span class="nav-link-inner--text">Privacy</span>
                    </a>
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
                    <a href="https://apps.apple.com/app/pixelsmeasure/id1638740542" target="_blank" rel="noopener"
                       class="btn btn-1 btn-primary">
                        <span class="btn-inner--icon">
                        <i class="fa fa-cloud-download mr-2"></i>
                        </span>
                        <span class="nav-link-inner--text">Download</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton
  }
};
</script>
<style>
</style>
