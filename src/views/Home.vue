<template lang="pug">
  .home
    section.hero.has-shadow
      .hero-body
        .logo
          img(src="/logo.png")
          .text Discord
            span.blurple 4J
        .container
          h1.subtitle.has-text-weight-bold A JVM-based REST/WS wrapper for the official Discord Bot API.
    section.section.container.about
      .columns
        .column
          .img
            i.fas.fa-boxes.fa-5x
          h2.title Modularity
          p Reactor is a fully non-blocking foundation with efficient demand management. It directly interacts with Java 8 functional API, Completable Future, Stream and Duration.
        .column
          .img
            i.fas.fa-cog.fa-5x
          h2.title Reactive
          p Reactor is a fully non-blocking foundation with efficient demand management. It directly interacts with Java 8 functional API, Completable Future, Stream and Duration.
        .column
          .img
            i.fas.fa-rocket.fa-5x
          h2.title Performant
          p Reactor is a fully non-blocking foundation with efficient demand management. It directly interacts with Java 8 functional API, Completable Future, Stream and Duration.
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Home extends Vue {}
</script>

<style lang="scss">
.hero {
  background: linear-gradient(#f7f9fc, #EBEFF7);
}

.logo {
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
}

.about {
  .img {
    width: 25%;
    margin: auto;
  }
  .title {
    margin-top: 1.5rem;
  }
  p {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
  }
}
</style>
