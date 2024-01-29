import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../views/Layout.vue';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import WebPage from '../views/WebPage.vue';
import HtmlPage from '../views/HtmlPage.vue';
import CssPageLayout from '../views/CssPageLayout.vue';
import CssPageOne from '../views/CssPageOne.vue';
import CssPageTwo from '../views/CssPageTwo.vue';
import JsPageLayout from '../views/JsPageLayout.vue';
import JsPageOne from '../views/jspage/JsPageOne.vue';
import JsPageTwo from '../views/jspage/JsPageTwo.vue';
import JsPageTwoOne from '../views/jspage/JsPageTwoOne.vue';
import JsPageTwoTwo from '../views/jspage/JsPageTwoTwo.vue';
import JsPageTwoThree from '../views/jspage/JsPageTwoThree.vue';
import JsPageThree from '../views/jspage/JsPageThree.vue';
import JsPageThreeOne from '../views/jspage/JsPageThreeOne.vue';
import JsPageThreeTwo from '../views/jspage/JsPageThreeTwo.vue';
import JsPageThreeThree from '../views/jspage/JsPageThreeThree.vue';
import JsPageThreeFour from '../views/jspage/JsPageThreeFour.vue';
import JsPageThreeFive from '../views/jspage/JsPageThreeFive.vue';
import JsPageThreeSix from '../views/jspage/JsPageThreeSix.vue';
import JsPageThreeSeven from '../views/jspage/JsPageThreeSeven.vue';
import JsPageThreeEight from '../views/jspage/JsPageThreeEight.vue';
import JsPageThreeNine from '../views/jspage/JsPageThreeNine.vue';
import JsPageThreeTen from '../views/jspage/JsPageThreeTen.vue';
import VuePageOne from '../views/VuePageOne.vue';
// import NodePageLayout from '../views/NodePageLayout.vue'
// import NodePageOne from '../views/NodePage/NodePageOne.vue'
// import NodePageOneOne from '../views/NodePage/NodePageOneOne.vue'

// import Link from "../views/Link.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: HomePage,
        },
        {
          path: 'vue',
          component: VuePageOne,
        },
        {
          path: 'about',
          component: AboutPage,
        },
        {
          path: 'http',
          component: WebPage,
        },
        {
          path: 'html',
          component: HtmlPage,
        },
        {
          path: 'css',
          component: CssPageLayout,
          children: [
            {
              path: '',
              component: CssPageOne,
            },
            {
              path: 'pagetwo',
              component: CssPageTwo,
            },
          ],
        },
        {
          path: 'js',
          component: JsPageLayout,
          children: [
            {
              path: 'jsnote',
              component: JsPageOne,
            },

            {
              path: 'jspractice',
              component: JsPageTwo,
              children: [
                {
                  path: '',
                  component: JsPageTwoOne,
                },
                {
                  path: 'two',
                  component: JsPageTwoTwo,
                },
                {
                  path: 'three',
                  component: JsPageTwoThree,
                },
              ],
            },

            {
              path: '',
              component: JsPageThree,
              children: [
                {
                  path: '',
                  component: JsPageThreeOne,
                },
                {
                  path: 'function',
                  component: JsPageThreeTwo,
                },
                {
                  path: 'destructuringassignment',
                  component: JsPageThreeThree,
                },
                {
                  path: 'method',
                  component: JsPageThreeFour,
                },
                {
                  path: 'object',
                  component: JsPageThreeFive,
                },
                {
                  path: 'prototype',
                  component: JsPageThreeSix,
                },
                {
                  path: 'tips',
                  component: JsPageThreeSeven,
                },
                {
                  path: 'dom',
                  component: JsPageThreeEight,
                },
                {
                  path: 'ajax',
                  component: JsPageThreeNine,
                },
                {
                  path: 'other',
                  component: JsPageThreeTen,
                },
              ],
            },
          ],
        },
        // {
        //   path: 'node',
        //   component: () => NodePageLayout,
        //   children: [
        //     {
        //       path: '',
        //       component: NodePageOne,
        //       children: [
        //         {
        //           path: '',
        //           component: NodePageOneOne,
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    },
    // 配置404找不到頁面
    {
      path: '/:pathMatch(.*)*',
      component: HomePage,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
