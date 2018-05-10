<template lang="pug">
  nav.navbar.has-shadow(role="navigation", aria-label="main navigation")
    .container
      .navbar-brand
        router-link(to="/").navbar-item
          .logo
            .circle
              img(src="https://discord4j.com/static/img/avatar.png", alt="Discord4J")
            span  Discord4J
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
              span.icon.discord
                i.fab.fa-discord
              span.discord-dark Discord Server
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class NavBar extends Vue {
  public showNav: boolean = false
}
</script>

<style lang="scss">
.discord {
  color: #7289DA;
}

.discord-dark {
  color: #495eab;
}

.logo {
  font-family: "Uni Sans";
  font-weight: 900;
  font-size: 1.75rem;
  left: 20px;
}

.navbar {
  background: #ffffff;
  .circle {
    display: inline-block;
    width: 2.75rem;
    height: 2.75rem;
    line-height: 3.25rem;
    border-radius: 50%;
    background: #215454;
    img {
      position: relative;
      left: 2px;
      top: 1px;
    }
  }
}
</style>