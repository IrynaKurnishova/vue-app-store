import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: () => import('../views/MainPage.vue')
    },
    {
      path: '/productInfo',
      name: 'productInfo',
      component: () => import('../views/ProductInfoTemplate.vue')
    },
    {
      path: '/cartInfo',
      name: 'cartInfo',
      component: () => import('../views/CartInfoTemplate.vue')
    },
  ]
})

export default router
