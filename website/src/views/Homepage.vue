<template>
    <div>
        <hero :hero=data.hero></hero>
        <features :features=data.features></features>
        <explore :explore=data.explore></explore>
        <promote :promote=data.promote></promote>
    </div>
</template>

<script>
import Hero from "./Hero.vue";
import Features from "./Features.vue";
import Explore from "./Explore.vue";
import Promote from "./Promote.vue";
import data from "../data.json";

export default {
  name: "homepage",
  components: {
    Hero,
    Features,
    Explore,
    Promote
  },
  data() {
    return {
      data: data.en
    }
  }
};
</script>
