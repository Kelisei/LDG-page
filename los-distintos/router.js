import Vue from 'vue';
import VueRouter from 'vue-router';
import Mission from '@/views/Mission.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/mission',
    name: 'Mission',
    component: Mission
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
