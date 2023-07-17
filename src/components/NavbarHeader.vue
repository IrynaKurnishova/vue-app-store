<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const counterCart = computed(() => store.getters.totalItemsInCart)
</script>
<template>
  <v-header class="bg-primary">
    <v-app-bar class="navbar" app dark>
      <v-toolbar-title>
        <router-link to="/" class="navbar-brand"> My Store </router-link>
      </v-toolbar-title>
      <router-link :to="{ name: 'ProductsCart' }" class="ml-auto cart-icon navbar-cart">
        <v-icon left>mdi-cart</v-icon>
        <span v-if="counterCart">{{ counterCart }}</span>
      </router-link>
    </v-app-bar>
  </v-header>
</template>

<style scoped>
.navbar {
  padding-left: 1rem;
}
.navbar-cart {
  padding-right: 10rem;
}
</style>
