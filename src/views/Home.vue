<template lang="pug">
  .home
    section.hero
      .hero-body
        .container
          .logo
            img(src="/logo.png", draggable="false", alt="Discord4J")
            .text Discord
              span.blurple 4J
          h1.subtitle.has-text-weight-bold A JVM-based REST/WS wrapper for the official 
            a(href="https://discordapp.com/developers/docs/intro") Discord Bot API
            | .
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
          p Rebuilt from the ground up with a focus on modularity, Discord4J allows for extreme customizability and flexibility in how you use the library.
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

@Component
export default class Home extends Vue {}
</script>

<style lang="scss">
@import "../style.scss";

.hero {
  border-bottom: 2px solid #eeeeee;
  background:  #edf0f7;

  h1 {
    a {
      color: #495eab;
      &:hover {
        color: #363636;
      }
    }

    animation: fadein 0.6s 1;
    animation-fill-mode: forwards;
  }
}

.hero-body {
  background: url("/background.svg");
}

.logo {
  user-select: none;
  color: #2C2F33;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    vertical-align: middle;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
  }

  .text {
    margin-left: 1.5rem;
    position: relative;
    top: 0.8rem;
    font-family: "Uni Sans";
    font-size: 5rem;
  }

  padding-bottom: 3rem;
  animation: appear 0.5s 1;
  animation-fill-mode: forwards;
}

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

@keyframes fadein {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes appear {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
