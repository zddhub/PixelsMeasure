<template>
    <base-button tag="a" type="primary" href="https://apps.apple.com/app/pixelsmeasure/id1638740542" class="btn btn-1 btn-primary">
        <i class="fa fa-cloud-download mr-2"></i>
        {{ text }}
    </base-button>
</template>

<script>
export default {
  name: "primary button",
  props: {
    text: {
      type: String,
      default: "Download now",
      description: "Button text"
    }
  }
}
</script>