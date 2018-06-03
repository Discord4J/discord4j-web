<template lang="pug">
  .post-body
    hr
    .post-contents(v-html="post")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component
export default class BlogPost extends Vue {
  @Prop() public post!: string
}
</script>

<style lang="scss">
.post-contents {
  p {
    margin-bottom: 1.25rem;
  }
  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #363636;
    line-height: 1.125;
  }
  figcaption {
    margin-bottom: 1.25rem;
  }
}
</style>
