import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: {name: 'ProductList'}
    },
    {
      path: '/products',
      name: 'ProductList',
      component: () => import('../views/ProductList.vue'),
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
    {
      path: '/product-details/:id',
      name: 'ProductDetails',
      component: () => import('../views/ProductDetails.vue')
    },
  ]
})

export default router
