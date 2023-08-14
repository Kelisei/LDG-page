<<<<<<< HEAD
import { createRouter, createWebHashHistory } from 'vue-router'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  }
]
=======
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
<<<<<<< HEAD
>>>>>>> parent of abad215 (Styling fixed)
=======
>>>>>>> parent of abad215 (Styling fixed)

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
