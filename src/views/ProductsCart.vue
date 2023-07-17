<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const cartItems = computed(() => store.getters.cartItems)
const total = computed(() => store.getters.totalPrice + '$')
const totalQuantityItems = computed(() => store.getters.totalItemsInCart)
const isSingleItemInCart = (id) => {
  const itemWithId = cartItems.value.filter((item) => item.id === id)
  return itemWithId.length === 1
}

const addItemToCard = (product) => {
  store.dispatch('addProductToCart', product)
}

const removeItemFromCard = ({ id }) => {
  store.dispatch('removeProductFromCart', id)
}

const changeQuantity = (product) => {
  store.dispatch('changeQuantityInCart', product)
}
</script>

<template>
  <div>
    <h3 class="mb-3 pl-8">Your product cart</h3>
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
              <v-list-item-title class="mt-3">
                {{ product.quantity }} item - Price: {{ product.price }}$
              </v-list-item-title>
              <router-link
                :to="{
                  name: 'ProductDetails',
                  params: { id: product.id, product: product }
                }"
              >
                More info
              </router-link>
              <v-btn @click="addItemToCard(product)">+</v-btn>
              <v-btn
                :class="isSingleItemInCart(product.id) ? 'disabled' : ''"
                @click="changeQuantity(product)"
                >-</v-btn
              >
            </v-list-item-content>
          </v-col>
          <v-col cols="1">
            <v-btn @click="removeItemFromCard(product)">
              <v-icon>mdi-delete</v-icon>
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
.disabled {
  pointer-events: none;
  opacity: 1;
  cursor: not-allowed;
}
</style>
