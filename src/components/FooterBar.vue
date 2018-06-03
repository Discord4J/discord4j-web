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
          | .
        p Powered by 
          a.affiliate.smaller(href="https://vuejs.org")
            img(src="https://vuejs.org/images/logo.png", height="1")
          |  and 
          a.affiliate(href="https://buttercms.com")
            img(src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH")
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
  border-top: 1px solid #eeeeee;
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
    border-top: 1px solid #eeeeee;
    background-color: $footer-dark;
    padding: 1.5rem 1rem;
  }

  .affiliate {
    img {
      vertical-align: middle;
      display: inline-block;
      max-height: 2rem;
    }
    &.smaller {
      img {
        max-height: 1.25rem;
      }
    }
  }
}
</style>