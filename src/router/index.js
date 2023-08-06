import { createRouter, createWebHistory } from "vue-router";
import Layout from "../pages/Layout.vue";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import HttpPage from "../pages/HttpPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: HomePage,
        },
        {
          path: "about",
          component: AboutPage,
        },
        {
          path: "http",
          component: HttpPage,
        },
      ],
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
