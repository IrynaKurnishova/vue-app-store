import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'ProductsList',
      component: () => import('../views/ProductList.vue'),
      redirect: '/'
    },
    {
      path: '/product-list-item',
      name: 'ProductListItem',
      component: () => import('../views/ProductListItem.vue')
    },
    {
      path: '/products-cart',
      name: 'ProductsCart',
      component: () => import('../views/ProductsCart.vue')
    },
  ]
})

export default router
