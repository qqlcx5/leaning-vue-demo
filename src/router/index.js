import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/translate",
    component: Layout,
    redirect: "/translate",
    children: [
      {
        path: "/translate",
        component: () => import("@/views/translate/index"),
        name: "translate"
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
