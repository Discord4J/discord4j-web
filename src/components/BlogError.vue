<template lang="pug">
  .error
    h2.title Uh oh...
    p There was an error in fetching our blog posts from ButterCMS
    p
      strong {{ error.status }} {{ error.statusText }}
      |  - {{ error.detail }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import {
  Error,
} from "@/buttercms"

@Component
export default class BlogError extends Vue {
    @Prop() private error!: Error | null
}
</script>

<style lang="scss">
</style>
