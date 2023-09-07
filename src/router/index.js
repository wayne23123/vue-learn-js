import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import WebPage from "../views/WebPage.vue";
import HtmlPage from "../views/HtmlPage.vue";
import CssPageLayout from "../views/CssPageLayout.vue";
import CssPageOne from "../views/CssPageOne.vue";
import CssPageTwo from "../views/CssPageTwo.vue";
import JsPageLayout from "../views/JsPageLayout.vue";
import JsPageOne from "../views/jspage/JsPageOne.vue";
import JsPageTwo from "../views/jspage/JsPageTwo.vue";
import JsPageTwoOne from "../views/jspage/JsPageTwoOne.vue";
import JsPageTwoTwo from "../views/jspage/JsPageTwoTwo.vue";
import JsPageTwoThree from "../views/jspage/JsPageTwoThree.vue";
import JsPageThree from "../views/jspage/JsPageThree.vue";
import JsPageThreeOne from "../views/jspage/JsPageThreeOne.vue";
import JsPageThreeTwo from "../views/jspage/JsPageThreeTwo.vue";
import JsPageThreeThree from "../views/jspage/JsPageThreeThree.vue";
import JsPageThreeFour from "../views/jspage/JsPageThreeFour.vue";
import JsPageThreeFive from "../views/jspage/JsPageThreeFive.vue";
import JsPageThreeSix from "../views/jspage/JsPageThreeSix.vue";
import JsPageThreeSeven from "../views/jspage/JsPageThreeSeven.vue";
import JsPageThreeEight from "../views/jspage/JsPageThreeEight.vue";
import JsPageThreeNine from "../views/jspage/JsPageThreeNine.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/Layout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/HomePage.vue"),
        },
        {
          path: "about",
          component: () => import("../views/AboutPage.vue"),
        },
        {
          path: "http",
          component: () => import("../views/WebPage.vue"),
        },
        {
          path: "html",
          component: () => import("../views/HtmlPage.vue"),
        },
        {
          path: "css",
          component: () => import("../views/CssPageLayout.vue"),
          children: [
            {
              path: "",
              component: () => import("../views/CssPageOne.vue"),
            },
            {
              path: "pagetwo",
              component: () => import("../views/CssPageTwo.vue"),
            },
          ],
        },
        {
          path: "js",
          component: () => import("../views/JsPageLayout.vue"),
          children: [
            {
              path: "jsnote",
              component: () => import("../views/jspage/JsPageOne.vue"),
            },

            {
              path: "jspractice",
              component: () => import("../views/jspage/JsPageTwo.vue"),
              children: [
                {
                  path: "",
                  component: () => import("../views/jspage/JsPageTwoOne.vue"),
                },
                {
                  path: "two",
                  component: () => import("../views/jspage/JsPageTwoTwo.vue"),
                },
                {
                  path: "three",
                  component: () => import("../views/jspage/JsPageTwoThree.vue"),
                },
              ],
            },

            {
              path: "",
              component: () => import("../views/jspage/JsPageThree.vue"),
              children: [
                {
                  path: "",
                  component: () => import("../views/jspage/JsPageThreeOne.vue"),
                },
                {
                  path: "function",
                  component: () => import("../views/jspage/JsPageThreeTwo.vue"),
                },
                {
                  path: "destructuringassignment",
                  component: () =>
                    import("../views/jspage/JsPageThreeThree.vue"),
                },
                {
                  path: "method",
                  component: () =>
                    import("../views/jspage/JsPageThreeFour.vue"),
                },
                {
                  path: "object",
                  component: () =>
                    import("../views/jspage/JsPageThreeFive.vue"),
                },
                {
                  path: "prototype",
                  component: () => import("../views/jspage/JsPageThreeSix.vue"),
                },
                {
                  path: "tips",
                  component: () =>
                    import("../views/jspage/JsPageThreeSeven.vue"),
                },
                {
                  path: "dom",
                  component: () =>
                    import("../views/jspage/JsPageThreeEight.vue"),
                },
                {
                  path: "ajax",
                  component: () =>
                    import("../views/jspage/JsPageThreeNine.vue"),
                },
                {
                  path: "other",
                  component: () => import("../views/jspage/JsPageThreeTen.vue"),
                },
              ],
            },
          ],
        },
      ],
    },
    // 配置404找不到頁面
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/HomePage.vue"),
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
