<template lang="pug">
  .home
    section.hero.has-shadow
      .hero-body
        .top
          .circle
            img(src="https://discord4j.com/static/img/avatar.png")
        .container
          h1.title Discord4J
          h2.subtitle
          | A REST/WS wrapper for the official Discord Bot API.
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
  padding: 2.2em 0 3em;
}

.top {
  .circle {
    display: inline-block;
    width: 11em;
    height: 11rem;
    border-radius: 50%;
    background: #215454;
    img {
      position: relative;
      left: 0.2rem;
      top: 1rem;
    }
  }
  padding-bottom: 1rem;
}
</style>
