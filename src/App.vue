<script setup>
import NavbarHeader from '@/components/NavbarHeader.vue'
</script>

<template>
  <v-app>
    <NavbarHeader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
