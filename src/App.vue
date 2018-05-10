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

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
