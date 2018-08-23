import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Prism from "prismjs"
import "prismjs/plugins/custom-class/prism-custom-class.js"
import "prismjs/components/prism-java"
import "prismjs/components/prism-groovy"
import VueScrollTo from "vue-scrollto"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronDown, faBoxes, faRocket } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faFacebook, faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

Vue.config.productionTip = false
Prism.plugins.customClass.prefix("prism-")

library.add(faGithub, faFacebook, faDiscord, faChevronDown, faBoxes, faRocket)
Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
