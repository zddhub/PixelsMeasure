<template>
  <div id="app">
    <app-header/>
    <main>
      <homepage/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "./layout/AppHeader.vue";
import AppFooter from "./layout/AppFooter.vue";
import Homepage from "./views/Homepage.vue";

export default {
  components: { AppHeader, AppFooter, Homepage }
};
</script>

<style src="./assets/pixelsmeasure.css"></style>
