<template lang="pug">
  section.section.affiliates
    h2.title.is-4 With love and support from
    .logos
      affiliate-link(src="https://www.jetbrains.com/", img="/jetbrains.svg").jetbrains
      affiliate-link(src="https://www.ej-technologies.com/products/jprofiler/overview.html", img="https://www.ej-technologies.com/images/product_banners/jprofiler_large.png")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import AffiliateLink from "@/components/home/AffiliateLink.vue"

@Component({
  components: {
    AffiliateLink,
  },
})
export default class Affiliates extends Vue {}
</script>

<style lang="sass">
.logos
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: center
  max-width: 700px
  margin: 0 auto

.jetbrains img
  width: 150px
  max-width: 150px
  height: 150px
</style>
