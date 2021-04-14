<template lang="pug">
  nav.navbar(role="navigation", aria-label="main navigation")
    .container
      .navbar-brand
        router-link(to="/").navbar-item.home
          img.nav-logo(src="/logo.svg", draggable="false", alt="Discord4J")
          logo-text.logo-text
        .navbar-burger(role="button", aria-label="menu", aria-expanded="false", @click="showNav = !showNav", :class="{'is-active': showNav}")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      .navbar-menu(:class="{'is-active': showNav}")
        .navbar-end
          a(href="https://docs.discord4j.com", target="_blank").navbar-item Documentation
          router-link(to="/blog").navbar-item Blog
          span.navbar-item
            a.button.is-outlined(href="https://github.com/Discord4J/Discord4J")
              span.icon
                font-awesome-icon(:icon="['fab', 'github']")
              span View Source
          span.navbar-item
            a.button.is-outlined(href="https://discord.gg/NxGAeCY")
              span.icon.blurple
                font-awesome-icon(:icon="['fab', 'discord']")
              span.blurple-dark Discord Server
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import LogoText from "@/components/logo/LogoText.vue"

@Component({
  components: {
    LogoText,
  },
})
export default class NavBar extends Vue {
  public showNav: boolean = false
}
</script>

<style lang="sass" scoped>
nav.navbar
  flex-shrink: 0
  box-shadow: 0 2px 2px 0 #eee

.navbar-menu.is-active
  position: absolute
  width: 100%

.navbar-burger
  width: 4rem
  height: 4rem

.navbar-item.home:hover
  .logo-text
    color: #36487f

img.nav-logo
  max-height: 3rem

.logo-text
  margin-left: 0.5rem
  max-height: 2.1rem
  width: auto
</style>
