<template lang="pug">
  section.section.blog
    .container
      h1.title.is-size-2 The Blog
      p.subtitle.anim Your source for Discord4J updates
      .container
        .posts(v-if="posts !== null")
          .post(v-for="(post, index) in posts")
            .post-meta(@click="togglePost(index)")
              p.post-date {{ formatDate(post.created) }}
              h2.post-title {{ post.title }}
              p.post-subtitle {{ post.summary }}
            blog-post(v-if="postIndex === index", :post="post.body")
        .error(v-if="error !== null")
          h2.title Uh oh...
          p There was an error in fetching our blog posts from ButterCMS
          p
            strong {{ error.status }} {{ error.statusText }}
            |  - {{ error.detail }}
        nav.pagination(role='navigation', aria-label='pagination', v-if="meta !== null")
          ul.pagination-list
            li(v-for="page in Math.ceil(meta.count / 5)")
              a.pagination-link(@click="getPage(page)", :class="{ 'is-current': pageNum === page }") {{ page }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import {
  butter,
  Error,
  ButterBlogPost,
  MetaEntity,
  DataEntity,
} from "@/buttercms"
import BlogPost from "@/components/BlogPost.vue"

const PAGE_SIZE: number = 5
const monthMap = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

@Component({
  components: {
    BlogPost,
  },
})
export default class Blog extends Vue {
  private pageNum: number = 1
  private posts: DataEntity[] | null = null
  private error: Error | null = null
  private postIndex: number | null = null
  private meta: MetaEntity | null = null

  public formatDate(dateStr: string): string {
    const d = new Date(dateStr)
    const year = d.getFullYear()
    const month = monthMap[d.getMonth()]
    const day = d.getDay()

    return `${day < 10 ? "0" : ""}${day} ${month} ${year}`
  }

  public created() {
    this.getPage()
  }

  public togglePost(index: number) {
    if (this.postIndex === index) {
      this.postIndex = null
    } else {
      this.postIndex = index
    }
  }

  // retrieve blog posts from buttercms and update posts data or show error
  private getPage(num?: number) {
    if (num !== undefined) {
      this.pageNum = num
    }
    butter.post
      .list({ page: this.pageNum, page_size: PAGE_SIZE })
      .then((resp: any) => {
        this.posts = resp.data.data
        this.meta = resp.data.meta
      })
      .catch((resp: any) => {
        this.error = {
          status: resp.status,
          statusText: resp.statusText,
          detail: resp.data.detail,
        }
      })
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
      box-shadow: 0 6px 12px rgba(47, 57, 89, 0.1),
        0 0 10px 1px rgba(47, 57, 89, 0.05);
    }
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
      box-shadow: 0 6px 12px rgba(47, 57, 89, 0.1),
        0 0 10px 1px rgba(47, 57, 89, 0.05);

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

.post-body {
  font-family: "Open Sans", sans-serif;
}
</style>
