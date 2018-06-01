<template lang="pug">
  section.section.blog
    .container
      .blog-post
        h1 The Site
        p Discord4J is undergoing major revisions as part of version 3.0. Part of this includes a brand new website! Currently the site is missing some areas including: a dedicated wiki, CI, and javadocs section. But I hope to add these in the near future, in the meantime they redirect to our current hosts.
        h1 Other Stuff
        p In addition to the new site, we are currently planning the full rewrite of Discord4J. The dev team is working hard to make sure this is well thought-out, powerful and intuitive. We expect for Discord4J 3.0 to have some form of release within the next few months. Additionally, development of Discord4J will be done under our new Discord4J Github Organization, as such we plan to move the current repository to this organization once Discord4J 3.0 is near completion.
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class BlogPost extends Vue {}
</script>

<style lang="scss">
@import "../colours.scss";

.blog-post {
  h1 {
    color: #363636;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.125;
  }

  h1:not(:last-child) {
    margin-bottom: 1.5rem;
  }
}
</style>
