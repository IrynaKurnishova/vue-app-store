<script setup>
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  product: Object
})

const productPrice = computed(() => {
  return `${props.product.price}$`
})

const store = useStore()

const addItemToBasket = (product) => {
  store.dispatch('addProductToCart', product)
}
</script>

<template>
  <v-container class="mt-3">
    <v-card>
      <v-row no-gutters>
        <v-col cols="4">
          <v-img
            :src="product.image"
            class="card-image card-img-top img-fluid"
            alt="Product image"
          />
        </v-col>
        <v-col cols="8">
          <v-card-body>
            <h3 class="card-title">{{ product.name }}</h3>

            <p class="card-text mt-4">Price: {{ productPrice }}</p>
            <div class="mt-2 mb-4">
              <router-link
                :to="{
                  name: 'ProductDetails',
                  params: { id: product.id }
                }"
              >
                More info
              </router-link>
            </div>
            <v-btn class="btn btn-primary" @click="addItemToBasket(product)">Add to cart</v-btn>
          </v-card-body>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.card-image {
  max-height: 300px;
  max-width: 300px;
}
</style>
