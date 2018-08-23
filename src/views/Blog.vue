<template lang="pug">
  section.section.blog
    .container
      h1.title.is-spaced.anim.is-size-2 The Blog
      p.subtitle.anim Your source for Discord4J updates
      ul.posts
        li.box(v-for="(post, index) in posts")
          router-link(:to="post.permalink")
            .post-meta
              p.post-date {{ formatDate(post.date) }}
              h2.post-title {{ post.title }}
              hr2
              p.post-subtitle {{ post.description }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import posts from "@/autoblog/auto-posts"

const options = {
  month: "long",
  year: "numeric",
  day: "numeric",
}

@Component({
  metaInfo: {
    title: "Discord4J - The Blog Homepage",
  },
})
export default class Blog extends Vue {
  public posts = posts

  public formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", options)
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/initial-variables.sass"
@import "~bulma/sass/utilities/derived-variables.sass"
@import "~bulma/sass/utilities/mixins.sass"

// main blog page
.posts
  max-width: 970px
  margin: 0 auto
  padding-top: 1rem

.blog
  .title.anim
    animation: zoom-appear 0.6s ease
  .subtitle.anim
      animation: slideup 0.75s ease
      animation-fill-mode: backwards
      animation-delay: 0.4s
  a
    color: inherit

  li.box
    padding: 2rem
    text-align: left
    transition: all 0.1s ease-in-out
    &:hover
      background-color: #fcfdff
      box-shadow: 0 6px 12px rgba(47, 57, 89, 0.1), 0 0 10px 1px rgba(47, 57, 89, 0.05)
      .post-title
        color: #36487f;
        padding-left: 0.25rem

  .post-title
    transition: padding 0.1s ease-in-out
    font-weight: 700
    font-size: 1.75rem
    margin-bottom: 0.5rem
  .post-subtitle, .post-date
    font-size: 1.1rem
  @include desktop
    .post-date
      margin-top: 0.5rem
      float: right
</style>
