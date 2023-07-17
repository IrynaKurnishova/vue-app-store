<script setup>
import axios from '@/axios'
import { onBeforeMount, ref } from 'vue'
import ProductListItem from '@/views/ProductListItem.vue'

const productList = ref([])
const isLoading = ref(false)

onBeforeMount(async () => {
  isLoading.value = true
  const { data } = await axios.get('/products')

  productList.value = data

  isLoading.value = false
})
</script>

<template>
  <div>
    <div v-if="!isLoading">
      <ProductListItem v-for="(product, index) in productList" :key="index" :product="product" />
    </div>
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
  </div>
</template>

<style scoped>
.item-loader {
  height: 100vh;
}
</style>
