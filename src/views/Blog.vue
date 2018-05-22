<template lang="pug">
  section.section.blog
    .container
      h1.title The Blog
      p.subtitle Your source of Discord4J updates.
      .container
        .posts
          a.post
            p.post-date May 21, 2018
            h2.post-title Website redesign launched!
            p.subtitle A brand new look
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Blog extends Vue {}
</script>

<style lang="scss">
.blog {
  font-family: "Montserrat", sans-serif;

  a {
    color: inherit;
  }

  .post {
    padding: 1rem;
    margin: auto;
    text-align: left;
    .subtitle {
      font-size: 1.5rem;
    }
    max-width: 50rem;
    display: block;
  }

  .post-date {
    float: right;
    padding-top: 0.75rem;
    font-size: 1rem;
  }

  .post-title {
    font-weight: 700;
    font-size: 1.75rem;
  }

  h1.title {
    animation: appear 1s ease;
  }
}
</style>
