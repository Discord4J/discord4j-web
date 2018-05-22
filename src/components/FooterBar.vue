<template lang="pug">
  footer.footer
    .top.container
      .columns
        .column
          .title.is-5 Documentation
          ul
            li
              a(href="http://discord4j.readthedocs.io/en/latest/") Discord4J Docs
            li
              a(href="https://jitpack.io/com/github/Discord4J/Discord4j/2.10.1/javadoc/") Javadocs
        .column
          .title.is-5 Resources
          ul
            li
              a(href="https://github.com/Discord4J/Discord4J/wiki") GitHub Wiki
            li
              a(href="https://projectreactor.io/docs/core/release/reference/") Reactor Guide
            li
              a(href="https://discordapp.com/developers/docs/intro") Discord API
        .column
          .title.is-5 Community
          ul
            li
              a(href="https://github.com/Discord4J") GitHub
            li
              a(href="https://discord.gg/NxGAeCY") Discord
    .bottom
      .container
        p Copyright © 2018 Discord4J - Licensed under 
          a(href="https://www.gnu.org/licenses/lgpl-3.0.en.html") LGPLv3
          | . Powered by 
          a(href="https://vuejs.org") Vue.js
          | .
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss">
@import "../colours.scss";

.footer {
  background-color: $footer-light;
  border-top: 1px solid whitesmoke;
  padding: 0;
  .top {
    padding: 2rem 0;
    .columns {
      margin: 0;
      .title {
        margin-bottom: 1rem;
      }
    }
  }

  .bottom {
    background-color: $footer-dark;
    padding: 1.5rem 1rem;
  }
}
</style>