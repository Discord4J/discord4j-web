<template lang="pug">
  section.section.affiliates
    h2.title.is-4 With love and support from
    .logos(:class="{ active: sponsorActive }")
      affiliate-link(src="https://www.jetbrains.com/", img="/jetbrains.svg").jetbrains
      affiliate-link(src="https://www.ej-technologies.com/products/jprofiler/overview.html", img="https://www.ej-technologies.com/images/product_banners/jprofiler_large.png")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import AffiliateLink from "@/components/AffiliateLink.vue"

@Component({
  components: {
    AffiliateLink,
  },
})
export default class Affiliates extends Vue {
  private sponsorActive: boolean = false
  private sponsorTop: number = 0

  public mounted(): void {
    this.sponsorTop = this.$el.offsetTop

    window.addEventListener("resize", () => {
      this.sponsorTop = this.$el.offsetTop
    })

    window.addEventListener("scroll", () => {
      if (this.inView()) {
        if (!this.sponsorActive) {
          this.sponsorActive = true
        }
      } else {
        if (this.sponsorActive) {
          this.sponsorActive = false
        }
      }
    })
  }

  private inView(): boolean {
    return (
      window.pageYOffset > this.sponsorTop - 200 ||
      this.$el.getBoundingClientRect().bottom <
        (window.innerHeight || document.documentElement.clientHeight)
    )
  }
}
</script>

<style lang="scss">
@import "../colours.scss";

.logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;

  .link {
    display: inline-block;
  }

  .jetbrains {
    img {
      width: 150px;
      max-width: 150px;
      height: 150px;
    }
  }

  a {
    display: inline-block;
    margin: 1.25rem 1rem;

    img {
      transition: all 0.3s ease;
      filter: grayscale(95%);
      opacity: 0.66;
      max-width: 15rem;
    }
    &:hover {
      img {
        filter: none;
        opacity: 1;
      }
    }
  }
  &.active {
    a img {
      filter: none;
      opacity: 1;
    }
  }
}
</style>

