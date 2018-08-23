<template lang="pug">
  section.hero.is-large
    .hero-body
      .container
        .box
          h1.title Oops.
          p.subtitle This page doesn't exist!
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  metaInfo: {
    title: "Discord4J - Oops! You shouldn't be here.",
  },
})
export default class NotFound extends Vue {}
</script>

<style lang="sass" scoped>
.hero
  height: 100%
  background-color: #edf0f7

.hero-body
  background: url("/background.svg")

.box
  padding-top: 2.5rem
  padding-bottom: 2.5rem
</style>
