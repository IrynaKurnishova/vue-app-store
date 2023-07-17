<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import axios from '@/axios'

const route = useRoute()
const store = useStore()

const productDetails = ref({})
const error = ref(null)

onBeforeMount(async () => {
  try {
    const { data } = await axios.get(`/products/${route.params.id}`)
    productDetails.value = data
  } catch (err) {
    error.value = 'Failed to fetch product details'
  }
})

const productPrice = computed(() => {
  return `Price: ${productDetails.value.price}$`
})

const addItemToCart = (productDetails) => store.dispatch('addProductToCart', productDetails)
</script>

<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12">
        <h2>{{ productDetails.name }}</h2>
      </v-col>
    </v-row>
    <div v-if="error">
      <p>An error occurred: {{ error }}</p>
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
</template>
