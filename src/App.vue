<template lang="pug">
  #app
    nav-bar
    .main-content
      router-view
    footer-bar
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import NavBar from "@/components/NavBar.vue"
import FooterBar from "@/components/FooterBar.vue"

@Component({
  components: {
    NavBar,
    FooterBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all.sass"
@import "~bulma/sass/base/_all.sass"

@import "~bulma/sass/components/navbar.sass"
@import "~bulma/sass/components/tabs.sass"
@import "~bulma/sass/grid/columns.sass"
@import "~bulma/sass/elements/box.sass"
@import "~bulma/sass/elements/title.sass"
@import "~bulma/sass/elements/container.sass"
@import "~bulma/sass/elements/button.sass"
@import "~bulma/sass/elements/content.sass"
@import "~bulma/sass/layout/hero.sass"
@import "~bulma/sass/layout/section.sass"
@import "~bulma/sass/layout/footer.sass"

@import "sass/colours.sass"
@import "sass/prism.scss"

@font-face
  font-family: "Uni Sans"
  src: url("/fonts/Uni Sans Heavy.woff")

@import url('https://fonts.googleapis.com/css?family=Montserrat|Nunito')

@keyframes slideup
  0%
    transform: translateY(100%)
    opacity: 0
  100%
    transform: translateY(0)
    opacity: 1

@keyframes zoom-appear
  0%
    transform: scale(0.5)
    opacity: 0
  100%
    transform: scale(1)
    opacity: 1

@keyframes appear
  0%
    transform: scale(0.9)
    opacity: 0
  100%
    transform: scale(1)
    opacity: 1

html, body, #app
  height: 100%

#app
  font-family: "Montserrat", "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  display: flex
  position: relative
  flex-direction: column

.main-content
  flex: 1

.logo-text
  color: $discord-dark
  font-family: "Uni Sans"

.blurple
  color: $blurple

.blurple-dark
  color: $blurple-dark

code, code.inline
  color: #6db33f

code.inline
  border: 1px solid #c8e2b5
  &:hover
    text-decoration: underline
  a
    color: inherit

// blog posts
.blog .content
  p, ul, li
    font-family: "Nunito"
    line-height: 1.75em
    text-align: left
    @include desktop
      font-size: 18px
  h1, h2, h3, h4, h5, h6, p.subtitle
    text-align: center
  max-width: 780px
  margin: 0 auto
  a
    color: $blurple
    &:hover
      color: $blurple-dark

  .description
    font-style: italic
  
  .author
    margin-bottom: 0
    &:last-of-type
      margin-bottom: 1em
</style>
