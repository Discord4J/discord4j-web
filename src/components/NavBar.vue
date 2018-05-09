<template lang="pug">
  nav.navbar(role="navigation", aria-label="main navigation")
    .container
      .navbar-brand
        router-link(to="/").navbar-item
          img(src="https://bulma.io/images/bulma-logo.png", alt="Bulma: a modern CSS framework based on Flexbox", width="112", height="28")
        .navbar-burger(role="button", aria-label="menu", aria-expanded="false", @click="showNav = !showNav", :class="{'is-active': showNav}")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      .navbar-menu(:class="{'is-active': showNav}")
        .navbar-end
          router-link(to='/').navbar-item Home
          router-link(to='/about').navbar-item About
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class NavBar extends Vue {
  public showNav: boolean = false
}
</script>

<style lang="scss">
</style>