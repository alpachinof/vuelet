import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import RouteViewComponent from '../layout/RouterBypass.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
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
          path: '/charts',
          name: 'charts',
          component: () => import('../views/charts/charts.vue'),
        },
        {
          path: '/components',
          name: 'components',
          component: RouteViewComponent,
          children: [
            {
              name: 'buttons',
              path: 'buttons',
              component: () =>
                import('../views/components/buttons/buttons.vue'),
            },
            {
              name: 'cards',
              path: 'cards',
              component: () => import('../views/components/cards/cards.vue'),
            },
            {
              name: 'alerts',
              path: 'alerts',
              component: () => import('../views/components/alerts/alerts.vue'),
            },
            {
              name: 'modals',
              path: 'modals',
              component: () => import('../views/components/modals/modals.vue'),
            },
            {
              name: 'badges',
              path: 'badges',
              component: () => import('../views/components/badges/badges.vue'),
            },
          ],
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
