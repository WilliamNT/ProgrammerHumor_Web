import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/Home.vue")
    },
    {
      path: '/',
      name: 'projects',
      component: () => import("../views/Projects.vue")
    }
  ]
});

export default {
    router
};