import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import RouteViewComponent from '../layout/RouterBypass.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
    },
    {
      path: '/tables',
      name: 'tables',
      component: RouteViewComponent,
      children: [
        {
          name: 'simple',
          path: 'simple',
          component: () => import('../views/tables/simple.vue'),
        },
        {
          name: 'avatar',
          path: 'avatar',
          component: () => import('../views/tables/withavatar.vue'),
        },
      ],
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue'),
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('../views/forms/FormElements.vue'),
    },
  ],
});

export default router;
