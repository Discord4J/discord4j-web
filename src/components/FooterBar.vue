<template lang="pug">
  footer.footer
    .container
      .columns
        .column
          .title.is-5 Documentation
          ul
            li
              a(href="https://jitpack.io/com/github/Discord4J/Discord4j/2.10.1/javadoc/") Javadocs
        .column
          .title.is-5 Resources
          ul
            li
              a Lorem
            li
              a Ipsum
        .column
          .title.is-5 Community
          ul
            li
              a(href="https://github.com/Discord4J") GitHub
            li
              a(href="https://discord.gg/NxGAeCY") Discord
    .bottom Copyright © 2018 Discord4J is licensed under 
        span
          a(href="https://www.gnu.org/licenses/lgpl-3.0.en.html") LGPLv3
        span .
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss">
.footer {
  padding: 3rem 0 0;

  .bottom {
    margin-top: 1rem;
    background: #f4f4f4;
    padding: 1.5rem 0;
  }
}
</style>