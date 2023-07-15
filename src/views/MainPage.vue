<script setup>
import {RouterLink} from "vue-router";
import {useStore} from "vuex";

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

