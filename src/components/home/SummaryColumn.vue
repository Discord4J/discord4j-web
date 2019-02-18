<template lang="pug">
  section.section#summary
    .container
      .columns
        .column
          .icons
            reactor-logo
          h2.title Reactive
          p
            | Discord4J is a reactive interface for the official 
            a(href="https://discordapp.com/") Discord
            |  API designed using 
            a(href="https://www.reactivemanifesto.org/") reactive principles
            |  using the 
            a(href="https://projectreactor.io/") Reactor framework
            |  for an asynchronous and non-blocking API.
        .column
          .icons
            font-awesome-icon(icon="boxes", size="5x")
          h2.title Modular
          p Built from the ground up with a focus on modularity, Discord4J allows for extreme customizability and flexibility in how you use the library.
        .column
          .icons
            font-awesome-icon(icon="rocket", size="5x")
          h2.title Performant
          p
            | Written in Java 8 and built on top of 
            a(href="https://github.com/netty/netty") Netty
            | , Discord4J offers a fast, functional, and completely non-blocking API with lazy processing included.
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import ReactorLogo from "@/components/logo/ReactorLogo.vue"

@Component({
  components: {
    ReactorLogo,
  },
})
export default class SummaryColumn extends Vue{}
</script>

<style lang="sass" scoped>
@import "@/sass/colours.sass"

h2
  margin-top: 1.5rem

.column
  padding: 0.75rem 2.75rem
  .icons
    height: 5rem
    color: $blurple
    transition: all 0.15s ease, transform 0.15s ease
  &:hover
    .icons
      transform: translateY(-2px)
      color: $blurple-light
</style>
