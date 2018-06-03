<template lang="pug">
  section.section.affiliates
    h2.title.is-4 In partnership with
    .logos
      affiliate-link(src="https://www.ej-technologies.com/products/jprofiler/overview.html", img="https://www.ej-technologies.com/images/product_banners/jprofiler_large.png")
      affiliate-link(src="https://buttercms.com/", img="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import AffiliateLink from "@/components/AffiliateLink.vue"

@Component({
  components: {
    AffiliateLink,
  },
})
export default class Affiliates extends Vue {}
</script>

<style lang="scss">
@import "../colours.scss";

.logos {
  max-width: 700px;
  margin: 0 auto;

  .link {
    display: inline-block;
  }
  a {
    display: block;
    max-width: 10rem;
    margin: 1.25rem 1rem;

    img {
      transition: all 0.3s ease;
      filter: grayscale(95%);
      opacity: 0.66;
      max-width: 10rem;
    }
    &:hover {
      img {
        filter: none;
        opacity: 1;
      }
    }
  }
}
</style>

