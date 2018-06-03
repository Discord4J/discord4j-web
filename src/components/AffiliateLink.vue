<template lang="pug">
  .link
    a(:href="src", target="_blank")
      img(:src="img")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component
export default class AffiliateLink extends Vue {
  @Prop()
  private src!: string
  @Prop()
  private img!: string
}
</script>

<style lang="scss">
</style>
