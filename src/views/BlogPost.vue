<template lang="pug">
  section.section.blog
    .container
      .post-contents(v-if="post !== null")
        h1.title {{ post.title }}
        p.subtitle {{ post.summary }}
        p.subtitle Written by {{ post.author.first_name }} {{ post.author.last_name }} - {{ formatDate(post.created) }}
        hr
        .body(v-html="post.body")
      blog-error(v-if="error !== null", :error="error")
</template>

<script lang="ts">
import { DateFormatter } from "@/date"
import { Component, Vue } from "vue-property-decorator"
import {
  butter,
  Error,
  Author,
  ButterBlogPost,
  MetaEntity,
  DataEntity,
} from "@/buttercms"
import BlogError from "@/components/BlogError.vue"

@Component({
  components: { BlogError },
})
export default class BlogPost extends Vue {
  private post: DataEntity = {
    title: "",
    summary: "",
    author: {
      first_name: "",
      last_name: "",
    } as Author,
  } as DataEntity
  private meta: MetaEntity = {} as MetaEntity
  private error: Error | null = null

  public formatDate(dateStr: string): string {
    return DateFormatter.formatDate(dateStr)
  }

  public created() {
    this.getPost()
  }

  private getPost() {
    butter.post
      .retrieve(this.$route.params.slug)
      .then((resp: any) => {
        this.post = resp.data.data
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

.post-contents {
  .title {
    padding-bottom: 0.75rem;
  }

  .body {
    text-align: left;

    a {
      word-wrap: break-word;
    }

    h1,
    h2,
    h3 {
      text-align: center;
    }

    h1, h2, h3, h4, h5, h6 {
      color: rgba(0,0,0,.84)
    }

    p,
    ul {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 17px;
      margin-bottom: 1.25rem;
      line-height: 1.58;
      letter-spacing: -.003em;
    }

    ul {
      list-style: initial;
      padding-left: 1.75rem;
    }
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.125;
  }

  figcaption {
    margin-bottom: 1.25rem;
  }
}

@include tablet {
  .post-contents .body {
    p,
    ul {
      font-size: 21px;
    }
  }
}
</style>
