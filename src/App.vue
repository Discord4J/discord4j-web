<template lang="pug">
  #app
    nav-bar
    .main-content
      router-view
    footer-bar
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import NavBar from "@/components/NavBar.vue"
import FooterBar from "@/components/FooterBar.vue"

@Component({
  components: {
    NavBar,
    FooterBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "colours.scss";

section {
  border-bottom: 2px solid #eeeeee;
  &:last-of-type {
    border-bottom: none;
  }
  p {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
  }
}

.box.code {
  padding: 0;
}

code.inline {
  border: 1px solid #c8e2b5;
  color: #6db33f;
  a {
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
}

.blurple {
  color: $blurple;
}

.blurple.dark {
  color: $blurple-dark;
}

.title {
  font-family: "Montserrat", sans-serif;
}

html,
body,
#app {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.main-content {
  flex: 1;
}
</style>
