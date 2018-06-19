import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"
import Blog from "@/views/Blog.vue"
import NotFound from "@/views/NotFound.vue"
import BlogPost from "@/views/BlogPost.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
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
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost,
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
})
