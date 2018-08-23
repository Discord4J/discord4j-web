<template lang="pug">
  #home
    hero-section
    summary-column
    getting-started
    affiliates
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import HeroSection from "@/components/home/HeroSection.vue"
import GettingStarted from "@/components/home/GettingStarted.vue"
import SummaryColumn from "@/components/home/SummaryColumn.vue"
import Affiliates from "@/components/home/Affiliates.vue"

@Component({
  components: {
    HeroSection,
    GettingStarted,
    SummaryColumn,
    Affiliates,
  },
})
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
section:nth-child(even)
  border-top: 2px solid #eee
  border-bottom: 2px solid #eee
  &:last-child
    border-bottom: none
</style>
