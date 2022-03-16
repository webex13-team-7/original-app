import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import signUp from "../views/sign-up.vue"
import logIn from "../views/log-in.vue"
import result from "../views/result.vue"
import form from "../views/form.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: signUp,
  },
  {
    path: "/log-in",
    name: "log-in",
    component: logIn,
  },
  {
    path: "/result",
    name: "result",
    component: result,
  },
  {
    path: "/form",
    name: "form",
    component: form,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
