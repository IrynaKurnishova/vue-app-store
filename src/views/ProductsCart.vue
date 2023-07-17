<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const cartItems = computed(() => store.getters.cartItems)
const total = computed(() => store.getters.totalPrice + '$')
const totalQuantityItems = computed(() => store.getters.totalItemsInCart)
const isSingleItemInCart = (id) => {
  const product = cartItems.value.find((product) => product.id === id)
  return product?.quantity === 1
}
const addItemToBasket = (product) => {
  store.dispatch('addProductToCart', product)
}
const removeItemFromBasket = ({ id }) => {
  store.dispatch('removeProductFromCart', id)
}
const changeQuantity = (product) => {
  store.dispatch('changeQuantityInCart', product)
}
</script>

<template>
  <div>
    <h3 class="mb-3 pl-8 mt-3">Your product cart</h3>
    <v-list>
      <v-list-item v-for="product in cartItems" :key="product.id">
        <v-row align="center">
          <v-col cols="2">
            <v-img
              :src="product.image"
              class="card-image card-img-top img-fluid"
              alt="Product image"
            />
          </v-col>
          <v-col cols="8">
            <v-list-item-content>
              <v-list-item-title class="mt-3">
                {{ product.name }}
              </v-list-item-title>
              <v-list-item-title class="mt-3"> Price: {{ product.price }}$ </v-list-item-title>
              <router-link
                :to="{
                  name: 'ProductDetails',
                  params: { id: product.id }
                }"
                class="mt-3 mr-3"
              >
                More info
              </router-link>
              <v-btn @click="addItemToBasket(product)" density="compact" icon="mdi-plus"></v-btn>
              {{ product.quantity }}
              <v-btn
                :disabled="isSingleItemInCart(product.id)"
                @click="changeQuantity(product)"
                density="compact"
                icon="mdi-minus"
              ></v-btn>
            </v-list-item-content>
          </v-col>
          <v-col cols="1">
            <v-btn @click="removeItemFromBasket(product)">
              <v-icon class="text-red">mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="3" class="pl-8">
        <h4 class="mt-3">Total quantity: {{ totalQuantityItems }}</h4>
      </v-col>
      <v-col cols="3">
        <h4 class="mt-3">Total price: {{ total }}</h4>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.card-image {
  max-height: 100px;
  max-width: 100px;
}
</style>
