import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import BrowseView from './views/BrowseView.vue';
import AdminView from './views/AdminView.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/browse',
    name: 'Browse',
    component: BrowseView,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
