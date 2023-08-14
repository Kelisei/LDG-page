import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home-view.vue';
import About from '../views/about-view.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})

export default router;
