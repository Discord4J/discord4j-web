<template lang="pug">
    section.section.get-started
      .container
        .columns
          .column
            h2.title Getting Started
            p Discord4J is split up into different modules for maximum flexibility. You may pick and use only what you need from the 
              a(href="https://github.com/Discord4J/Discord4J/tree/v3#modules") modules list
              | . To interact with all facets of the Discord API built on top of all the other modules, import the 
              code core
              |  module into your favourite dependency manager.
          .column
            h2.title Configuration
            .box Test 2
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class GetStarted extends Vue {}
</script>

<style lang="scss">
@import "../style.scss";

.get-started {
  background: #f2f3f7;
  p {
    text-align: left;
    padding: 0 2rem;
  }
}
</style>
