import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import RouteViewComponent from '../layout/RouterBypass.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: () => import('../layout/AppLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: Dashboard,
        },
        {
          path: '/tables',
          name: 'tables',
          children: [
            {
              name: 'plain',
              path: 'plain',
              component: () => import('../views/tables/plain.vue'),
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
        {
          path: '/calendar',
          name: 'calendar',
          component: () => import('../views/calendar/month.vue'),
        },
      ],
    },
    {
      path: '/404',
      name: '404',
      component: RouteViewComponent,
      children: [
        {
          name: 'simple',
          path: 'simple',
          component: () => import('../views/404/simple.vue'),
        },
        {
          name: 'image',
          path: 'image',
          component: () => import('../views/404/image.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      component: RouteViewComponent,
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('../views/auth/login.vue'),
        },
        {
          name: 'register',
          path: 'register',
          component: () => import('../views/auth/register.vue'),
        },
      ],
    },
  ],
});

export default router;
