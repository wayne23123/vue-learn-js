import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import HttpPage from "../views/HttpPage.vue";
import HtmlPage from "../views/HtmlPage.vue";
import CssPage from "../views/CssPage.vue";
import JsPageLayout from "../views/JsPageLayout.vue";
import JsNoteOne from "../views/JsNoteOne.vue";

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
        {
          path: "html",
          component: HtmlPage,
        },
        {
          path: "css",
          component: CssPage,
        },
        {
          path: "js",
          component: JsPageLayout,
          children: [
            {
              path: "",
              component: JsNoteOne,
            },
          ],
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
