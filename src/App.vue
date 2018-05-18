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
@import "~bulma/bulma";
@import url("https://fonts.googleapis.com/css?family=Raleway:400,500|Montserrat");
@import "style.scss"; 

@font-face {
  font-family: "Uni Sans";
  src: url("/fonts/Uni Sans Heavy.woff");
}

.blurple {
  color: $blurple;
}

.blurple.dark {
  color: $blurple-dark;
}

.title {
  font-family: 'Montserrat', sans-serif;
}

html, body, #app {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.main-content {
  flex: 1;
}
</style>
