import Vue from "vue"
import Router, { RouteConfig } from "vue-router"
const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
const Blog = () => import(/* webpackChunkName: "blog" */ "@/views/Blog.vue")
const NotFound = () => import(/* webpackChunkName: "not-found" */ "@/views/NotFound.vue")
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
    path: "*",
    component: NotFound,
  },
]

const router = new Router({
  mode: "history",
  routes: defaultRoutes.concat(routes),
})

export default router
