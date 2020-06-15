<template lang="pug">
  a(:href="src", target="_blank")
    img(:src="img")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component
export default class AffiliateLink extends Vue {
  @Prop() private src!: string
  @Prop() private img!: string
}
</script>

<style lang="sass" scoped>
a
  transition: all 0.15s ease, transform 0.15s ease
  display: inline-block
  margin: 1.25rem 1rem

  &:hover
    transform: translateY(-3px)
</style>
