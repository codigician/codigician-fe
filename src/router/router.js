import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home"
import QuestionListing from "../views/QuestionListing"
import Question from "../views/Question"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/questions", component: QuestionListing },
        { path: "/questions/:title", component: Question }
    ]
})

export default router