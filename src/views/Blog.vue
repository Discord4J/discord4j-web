<template lang="pug">
  section.section.blog
    .container
      h1.title.anim.is-size-2 The Blog
      p.subtitle.anim Your source for Discord4J updates
      .container
        .posts
          .post(v-for="(post, index) in posts")
            router-link(:to="post.permalink")
              .post-meta
                p.post-date {{ formatDate(post.date) }}
                h2.post-title {{ post.title }}
                p.post-subtitle {{ post.description }}
        //- nav.pagination(role='navigation', aria-label='pagination', v-if="meta !== null")
        //-   ul.pagination-list
        //-     li(v-for="page in Math.ceil(meta.count / 5)")
        //-       a.pagination-link(@click="getPage(page)", :class="{ 'is-current': pageNum === page }") {{ page }}
</template>

<script lang="ts">
import { DateFormatter } from "@/date"
import { Component, Vue } from "vue-property-decorator"
import posts from "@/autoblog/auto-posts"

const options = {
  month: "long",
  year: "numeric",
  day: "numeric",
}

@Component({
  metaInfo: {
    title: "The Discord4J Blog",
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
