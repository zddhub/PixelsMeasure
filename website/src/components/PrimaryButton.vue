<template>
    <base-button tag="a" type="primary" :href=url class="btn btn-1 btn-primary">
        <i class="fa fa-cloud-download mr-2"></i>
        {{ text }}
    </base-button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    text: {
      type: String,
      default: "",
      description: "Button text"
    },
    url: {
      type: String,
      default: "",
      description: "href url"
    }
  }
}
</script>