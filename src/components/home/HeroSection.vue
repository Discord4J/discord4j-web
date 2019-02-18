<template lang="pug">
  section.hero
    .hero-body
      .container
        .logo
          img(src="/logo.svg", draggable="false", alt="Discord4J Logo")
          logo-text.logo-text
        h1.subtitle A JVM-based REST/WS wrapper for the official 
          a(href="https://discordapp.com/developers/docs/intro") Discord Bot API
        a.button.is-success.is-large(v-scroll-to="'#getting-started'")
          span.icon
            font-awesome-icon(icon="chevron-down")
          span Get Started    
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import LogoText from "@/components/logo/LogoText.vue"

@Component({
  components: {
    LogoText,
  },
})
export default class HeroSection extends Vue {}
</script>


<style lang="sass" scoped>
@import "~bulma/sass/utilities/initial-variables.sass"
@import "~bulma/sass/utilities/derived-variables.sass"
@import "~bulma/sass/utilities/mixins.sass"

h1
  margin-top: 3rem
  animation: slideup 0.75s ease
  animation-fill-mode: backwards
  animation-delay: 0.5s
  &.subtitle
    font-weight: 600

.hero
  background-color: #edf0f7

.hero-body
  background: url("/background.svg")

.logo
  user-select: none
  display: flex
  align-items: center
  justify-content: center
  animation: appear 0.5s ease

.logo, img
  height: 5rem

.logo-text
  height: 51.9230769%
  width: auto
  margin-left: 0.5rem

@include tablet
  .logo, img
    height: 7.2rem
  .logo-text
    margin-left: 1rem

@include desktop
  .logo, img
    height: 12rem
  .logo-text
    margin-left: 1.5rem
</style>
