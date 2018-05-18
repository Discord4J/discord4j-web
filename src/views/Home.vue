<template lang="pug">
  .home
    hero
    section.section.container.about
      .columns
        .column
          .img
            i.fas.fa-sync-alt.fa-5x
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
          .img
            i.fas.fa-boxes.fa-5x
          h2.title Modular
          p Built from the ground up with a focus on modularity, Discord4J allows for extreme customizability and flexibility in how you use the library.
        .column
          .img
            i.fas.fa-rocket.fa-5x
          h2.title Performant
          p
            | Written in Java 8 and built on top of 
            a(href="https://github.com/netty/netty") Netty
            | , Discord4J offers a fast, functional, and completely non-blocking API with lazy processing included.
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Hero from "@/components/Hero.vue"

@Component({
  components: {
    Hero,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import "../style.scss";

.about {
  .column {
    .img {
      transition: color 0.15s ease, transform 0.15s ease;
    }
    &:hover {
      .img {
        transform: translateY(-2px);
        color: $blurple-light;
      }
    }
  }
  .img {
    width: 25%;
    margin: auto;
    color: $blurple;
  }
  .title {
    margin-top: 1.5rem;
  }
  p {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    padding: 0 2rem;
  }
}
</style>
