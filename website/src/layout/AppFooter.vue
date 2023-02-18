<template>
    <footer class="footer has-cards">
        <div class="container">
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; 2022-{{year}} {{ footer.copyright }}
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item" v-for="menu in footer.menus">
                            <a :href="menu.url" class="nav-link" :target="menu.title === 'Privacy' ? '' : '_blank'" rel="noopener">{{ menu.title }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import data from "../data.json";

export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear(),
      footer: data.en.footer
    }
  }
};
</script>
<style>
</style>
