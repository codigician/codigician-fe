import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home"
import Question from "../views/Question"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/questions", component: Question },
    ]
})

export default router