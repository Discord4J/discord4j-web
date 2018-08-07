<template lang="pug">
  section.section.blog
    .container
      h1.title.anim.is-size-2 The Blog
      p.subtitle.anim Your source for Discord4J updates
      .container
        .posts
          .post(v-for="(post, index) in posts")
            router-link(:to="post.path")
              .post-meta
                p.post-date {{ formatDate(post.date) }}
                h2.post-title {{ post.title }}
                p.post-subtitle {{ post.description }}
        //- .posts(v-if="posts !== null")
        //-   .post(v-for="(post, index) in posts")
        //-     router-link(:to="'/blog/' + post.slug")
        //-       .post-meta
        //-         p.post-date {{ formatDate(post.created) }}
        //-         h2.post-title {{ post.title }}
        //-         p.post-subtitle {{ post.summary }}
        //- nav.pagination(role='navigation', aria-label='pagination', v-if="meta !== null")
        //-   ul.pagination-list
        //-     li(v-for="page in Math.ceil(meta.count / 5)")
        //-       a.pagination-link(@click="getPage(page)", :class="{ 'is-current': pageNum === page }") {{ page }}
</template>

<script lang="ts">
import { DateFormatter } from "@/date"
import { Component, Vue } from "vue-property-decorator"
import entries from "@/autoblog/auto-entries"

const options = {
  month: "long",
  year: "numeric",
  day: "numeric",
}

@Component
export default class Blog extends Vue {
  public posts = entries

  public formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", options)
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";
@import "../colours.scss";

.blog {
  font-family: "Montserrat", sans-serif;

  .pagination-list {
    justify-content: center;
  }

  .error {
    display: inline-block;
    margin-top: 4rem;
    border-radius: 0.5rem;
    padding: 3rem 4rem;
    margin: 4rem auto;
    transition: all 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 6px 12px rgba(47, 57, 89, 0.1), 0 0 10px 1px rgba(47, 57, 89, 0.05);
    }
  }

  .post,
  .post-contents {
    max-width: 50rem;
    margin: 1rem auto;
    padding: 1.5rem;
    display: block;
  }

  .post {
    a {
      color: inherit;
    }
    border-radius: 0.5rem;
    text-align: left;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #fcfdff;
      box-shadow: 0 6px 12px rgba(47, 57, 89, 0.1), 0 0 10px 1px rgba(47, 57, 89, 0.05);

      .post-title {
        color: #36487f;
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
  }

  .post-meta {
    cursor: pointer;
  }

  @include tablet {
    .post,
    .post-contents {
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

  h1.title.anim {
    animation: zoom-appear 0.6s ease;
  }

  p.subtitle.anim {
    margin-top: 0.5rem;
    animation: slideup 0.75s ease;
    animation-fill-mode: backwards;
    animation-delay: 0.4s;
  }

  @include desktop {
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
      pointer-events: none;
      left: 1.5rem;
    }

    .post:after {
      pointer-events: none;
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
  }

  p,
  h2 {
    transition: all 0.25s ease;
  }

  .post-date {
    font-size: 1rem;
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
