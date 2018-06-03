<template lang="pug">
  section.hero
    .hero-body
      .container
        .logo
          img(src="/logo.png", draggable="false", alt="Discord4J")
          .text Discord
            span.blurple 4J
        h1.subtitle.has-text-weight-bold A JVM-based REST/WS wrapper for the official 
          a(href="https://discordapp.com/developers/docs/intro") Discord Bot API
        a.button.is-success.is-large
          span.icon
            i.fas.fa-chevron-down
          span Get Started
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Hero extends Vue {}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";
@import "../colours.scss";

.hero {
  border-bottom: 2px solid #efefef;
  background: #edf0f7;

  h1 {
    a {
      color: $blurple-dark;
      &:hover {
        color: #363636;
      }
    }

    animation: slideup 0.75s ease;
    animation-fill-mode: backwards;
    animation-delay: 0.5s;
  }
}

.hero-body {
  background: url("/background.svg");
}

.logo {
  user-select: none;
  color: $discord-dark;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    vertical-align: middle;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  .text {
    margin-left: 0.5rem;
    position: relative;
    top: 0.35rem;
    font-family: "Uni Sans";
    font-size: 2.1rem;
  }

  @include tablet {
    img {
      width: 7.2rem;
      height: 7.2rem;
    }
    .text {
      margin-left: 1rem;
      top: 0.4rem;
      font-size: 3rem;
    }
  }

  @include desktop {
    img {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
    }

    .text {
      font-size: 5rem;
      margin-left: 1.5rem;
      top: 0.8rem;
    }
  }

  padding-bottom: 3rem;
  animation: appear 0.5s ease;
}

@keyframes slideup {
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
