<template>
    <div>
        <hero></hero>
        <landing></landing>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import Landing from "./Landing.vue";


export default {
  name: "homepage",
  components: {
    Hero,
    Landing
  }
};
</script>
