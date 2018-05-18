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
          | .
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Hero extends Vue {}
</script>

<style lang="scss">
.hero {
  border-bottom: 2px solid #eeeeee;
  background: #edf0f7;

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
