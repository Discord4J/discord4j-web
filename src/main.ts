// styles
import "bulma"
import "@/prism.scss"
import "@/main.scss"

// main
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Prism from "prismjs"
import "prismjs/plugins/custom-class/prism-custom-class.js"
import "prismjs/components/prism-java"
import "prismjs/components/prism-groovy"

Vue.config.productionTip = false
Prism.plugins.customClass.prefix("prism-")

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
