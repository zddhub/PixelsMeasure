<template>
    <div>
        <hero :hero=data.hero></hero>
        <download-code :downloadCode=data.downloadCode></download-code>
        <features :features=data.features></features>
        <platform :platform=data.platform></platform>
        <explore :explore=data.explore></explore>
        <promote :promote=data.promote :downloadCode=data.downloadCode></promote>
    </div>
</template>

<script>
import Hero from "./Hero.vue";
import Features from "./Features.vue";
import Explore from "./Explore.vue";
import Platform from "./Platform.vue";
import Promote from "./Promote.vue";
import DownloadCode from "./DownloadCode.vue";
import data from "../data.json";

export default {
  name: "homepage",
  components: {
    Hero,
    Features,
    Explore,
    Promote,
    Platform,
    DownloadCode,
  },
  computed: {
    data()  {
        return data[this.$root.$i18n.locale]
    }
  }
};
</script>
