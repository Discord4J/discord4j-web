<template lang="pug">
  section.section.blog
    .container
      h1.title.is-size-2 The Blog
      p.subtitle.anim Your source of Discord4J updates
      .container
        .posts
          a.post
            p.post-date 21 May 2018
            h2.post-title Website redesign launched!
            p.post-subtitle A brand new look
          a.post
            p.post-date 18 April 2018
            h2.post-title 2.10.1 Released
            p.post-subtitle Now on JCenter and Maven Central
          a.post
            p.post-date 04 March 2018
            h2.post-title 2.10.0 Released
            p.post-subtitle Reworks and breaking changes
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Blog extends Vue {}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";
@import "../colours.scss";

.blog {
  font-family: "Montserrat", sans-serif;

  a {
    color: inherit;
  }

  .post {
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 1rem auto;
    text-align: left;
    max-width: 50rem;
    display: block;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #fcfdff;
      box-shadow: 0 4px 6px rgba(35, 39, 42, 0.1),
        0 0 0 1px rgba(35, 39, 42, 0.075);

      .post-title {
        color: #36487f;
      }

      p,
      h2 {
        padding-left: 0.375rem;
      }
    }

    .subtitle {
      font-size: 1.5rem;
    }
  }

  .post {
    position: relative;
    display: block;
    cursor: pointer;
  }

  .post:before,
  .post:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 0.2rem;
    top: 4rem;
    margin-top: -0.5px;
    background: $blurple;
  }

  .post:before {
    left: 1.5rem;
  }
  .post:after {
    right: 1rem;
    background: $blurple;
    transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  .post:hover:before {
    background: $blurple;
    width: calc(100% - 2.5rem);
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  .post:hover:after {
    background: transparent;
    width: calc(100% - 2.5rem);
    transition: 0s;
  }

  p,
  h2 {
    transition: all 0.25s ease;
  }

  .post-date {
    font-size: 1rem;
    font-weight: 300;
  }

  @include tablet {
    .post {
      max-width: 60rem;
    }

    .post-date {
      float: right;
      padding-top: 0.75rem;
    }
  }

  .post-title {
    font-weight: 700;
    font-size: 1.75rem;
  }

  .post-subtitle {
    padding-top: 0.25rem;
    font-size: 1.25rem;
    font-weight: 300;
  }

  h1.title {
    animation: zoom-appear 0.6s ease;
  }

  p.subtitle.anim {
    margin-top: 0.5rem;
    animation: slideup 0.75s ease;
    animation-fill-mode: backwards;
    animation-delay: 0.4s;
  }
}

@keyframes zoom-appear {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
