<template lang="pug">
  #app
    nav-bar
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

.blurple {
  color: #7289da;
}

.blurple.dark {
  color: #495eab;
}

.title {
  font-family: 'Montserrat', sans-serif;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
