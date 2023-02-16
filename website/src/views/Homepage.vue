<template>
    <div>
        <hero></hero>
        <features></features>
        <explore></explore>
        <promote></promote>
    </div>
</template>
<script>
import Hero from "./Hero.vue";
import Features from "./Features.vue";
import Explore from "./Explore.vue";
import Promote from "./Promote.vue";


export default {
  name: "homepage",
  components: {
    Hero,
    Features,
    Explore,
    Promote
  }
};
</script>
