<template lang="pug">
  section.hero
    .hero-body
      .container
        .logo
          img(src="/logo.svg", draggable="false", alt="Discord4J")
          .logo-text Discord
            span.blurple 4J
        h1.subtitle A JVM-based REST/WS wrapper for the official 
          a(href="https://discordapp.com/developers/docs/intro") Discord Bot API
        a.button.is-success.is-large(v-scroll-to="'#getting-started'")
          span.icon
            font-awesome-icon(icon="chevron-down")
          span Get Started    
</template>

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

  img
    vertical-align: middle
    width: 5rem
    height: 5rem

  .logo-text
    position: relative
    margin-left: 0.5rem
    top: 0.35rem
    font-size: 2.1rem
  @include tablet
    img
      width: 7.2rem
      height: 7.2rem
    .logo-text
      margin-left: 1rem
      top: 0.4rem
      font-size: 3rem
  @include desktop
    img
      width: 12rem
      height: 12rem
    .logo-text
      margin-left: 1.5rem
      top: 0.8rem
      font-size: 5rem
</style>
