<script setup>
import {RouterLink} from "vue-router";
import axios from "@/axios";

import {onBeforeMount} from "vue";


 onBeforeMount(async () => {
    const products = await axios.get('/products')
     console.log(products)
})
</script>

<template>
    <div>Main Page with list of Products</div>
    <div>Product name</div>
    <div>Product price</div>
    <div>Product img</div>
    <button>Bootstrap button: add to cart</button>
    <nav>
        <RouterLink to="/productInfo">Products</RouterLink>
    </nav>
</template>

