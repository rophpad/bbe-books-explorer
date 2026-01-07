import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppLayout',
      component: () => import('../layouts/AppLayout.vue'),
      children: [
        {
          path: '',
          name: 'HomePage',
          component: () => import('../pages/HomePage.vue'),
        },
        {
          path: '/livres',
          name: 'BooksPage',
          component: () => import('../pages/BooksPage.vue'),
        },
        {
          path: '/bibliotheques',
          name: 'LibrariesPage',
          component: () => import('../pages/LibrariesPage.vue'),
        },
        {
          path: '/bibliotheque/:id',
          name: 'LibraryPage',
          component: () => import('../pages/LibraryPage.vue'),
        },
        {
          path: '/recherche',
          name: 'SearchResultsPage',
          component: () => import('../pages/SearchResultsPage.vue'),
        },
      ],
    },
  ],
})

export default router
