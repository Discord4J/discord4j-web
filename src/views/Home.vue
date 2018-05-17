<template lang="pug">
  .home
    section.hero.has-shadow
      .hero-body
        .logo
          img(src="/logo.png")
          .text Discord
            span.blurple 4J
        .container
          h1.subtitle A REST/WS wrapper for the official Discord Bot API.
    section.section.container
      h1.title Overview
      p
      | Discord4J is a wrapper for Discord's websocket and REST API. It provides an easy-to-use implementation which has features suitable for both the most experienced and inexperienced Java programmers.
      hr
      h1.title Why use Discord4J?
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar dolor quam, quis tristique nulla sodales quis. Quisque pulvinar interdum ullamcorper. Vestibulum arcu lacus, dictum eget convallis at, sodales vitae dolor. Nullam cursus a urna sed malesuada. Donec sit amet erat fringilla, semper dui et, laoreet lectus. Mauris mattis, metus ac blandit commodo, ipsum neque dictum diam, ac tempor lacus lorem luctus tellus. Vestibulum eu cursus est, et malesuada lorem. Donec maximus tempor est nec blandit. Aliquam quis risus eget nisl fermentum tempor eu nec lorem. Sed a eleifend purus. Proin finibus condimentum nisi. Fusce commodo ex nisi, a aliquet nisl lacinia ac. Donec eget ullamcorper odio.
    section.container
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Home extends Vue {}
</script>

<style lang="scss">
.hero {
  background: linear-gradient(#FCFDFE, #F3F5F4);
}

.logo {
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
    color: #2C2F33;
    margin-left: 1.5rem;
    position: relative;
    top: 0.8rem;
    font-family: "Uni Sans";
    font-size: 5rem;
  }

  padding-bottom: 3rem;
}
</style>
