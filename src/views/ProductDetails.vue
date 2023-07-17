<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import axios from '@/axios'

const route = useRoute()
const store = useStore()
const isLoading = ref(false)
const productDetails = ref({})
const error = ref(false)

onBeforeMount(async () => {
  try {
    isLoading.value = true
    const { data } = await axios.get(`/products/${route.params.id}`)
    productDetails.value = data
    isLoading.value = false
  } catch (err) {
    error.value = true
  }
})

const productPrice = computed(() => {
  return `Price: ${productDetails.value.price}$`
})

const addItemToCart = (productDetails) => store.dispatch('addProductToCart', productDetails)
</script>

<template>
  <v-container v-if="!isLoading">
    <v-row align="center">
      <v-col cols="12">
        <h2>{{ productDetails.name }}</h2>
      </v-col>
    </v-row>
    <div v-if="error">
      <p>An error occurred: Failed to fetch product details</p>
    </div>
    <div v-else>
      <v-row>
        <v-col cols="4">
          <v-img
            :src="productDetails.image"
            class="card-image card-img-top img-fluid"
            alt="Product image"
          />
        </v-col>
        <v-col cols="8">
          <p class="mt-3">{{ productDetails.description }}</p>
          <p class="mt-3">{{ productPrice }}</p>
          <v-btn class="btn btn-primary mt-9" @click="addItemToCart(productDetails)"
            >Add to cart</v-btn
          >
        </v-col>
      </v-row>
    </div>
  </v-container>
  <div v-else>
    <div class="d-flex justify-center align-center item-loader">
      <v-progress-circular
        class="progress-loader"
        :size="50"
        :width="7"
        indeterminate
      ></v-progress-circular>
    </div>
  </div>
</template>

<style scoped>
.item-loader {
  height: 100vh;
}
</style>
