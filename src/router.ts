import Vue from "vue"
import Router, { RouteConfig } from "vue-router"
import Home from "@/views/Home.vue"
import Blog from "@/views/Blog.vue"
import NotFound from "@/views/NotFound.vue"
import BlogPost from "@/views/BlogPost.vue"
import routes from "@/autoblog/auto-routes"
import Meta from "vue-meta"

Vue.use(Router)
Vue.use(Meta)

const defaultRoutes: RouteConfig[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/blog1/",
    name: "blog-post",
    component: BlogPost,
  },
  {
    path: "*",
    component: NotFound,
  },
]

const router = new Router({
  mode: "history",
  routes: defaultRoutes.concat(routes),
})

export default router
