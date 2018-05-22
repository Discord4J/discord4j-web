<template lang="pug">
  nav.navbar.has-shadow(role="navigation", aria-label="main navigation")
    .container
      .navbar-brand
        router-link(to="/").navbar-item
          img.nav-logo(src="/logo.png", draggable="false", alt="Discord4J")
          .nav-text Discord
            span.blurple 4J
        .navbar-burger(role="button", aria-label="menu", aria-expanded="false", @click="showNav = !showNav", :class="{'is-active': showNav}")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      .navbar-menu(:class="{'is-active': showNav}")
        .navbar-end
          router-link(to="/").navbar-item Documentation
          router-link(to="/blog").navbar-item Blog
          span.navbar-item
            a.button.is-outlined(href="https://github.com/Discord4J/Discord4J")
              span.icon
                i.fab.fa-github
              span View Source
          span.navbar-item
            a.button.is-outlined(href="https://discord.gg/NxGAeCY")
              span.icon.blurple
                i.fab.fa-discord
              span.blurple.dark Discord Server
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class NavBar extends Vue {
  public showNav: boolean = false
}
</script>

<style lang="scss">
@import "../colours.scss";

span.navbar-item {
  padding-right: 0;
}

.navbar {
  flex-shrink: 0;
  background-color: #ffffff;
  &.has-shadow {
    box-shadow: 0px 2px 2px 0 #eeeeee;
  }
}

.navbar-item {
  user-select: none;
}

.navbar-brand {
  a {
    color: $discord-dark;
    &:hover {
      color: #36487f;
    }
  }
}

.navbar-item .nav-logo {
  max-height: 3rem;
}

.navbar-burger {
  height: 4rem;
  width: 4rem;
}

.nav-text {
  margin-left: 0.5rem;
  font-family: "Uni Sans";
  height: 2.5rem;
  font-size: 1.75rem;
  line-height: 3rem;
}
</style>