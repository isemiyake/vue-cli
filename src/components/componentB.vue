<script setup>
import {useProductsStore} from '../service/piniaProducts';
const productsStore = useProductsStore()
productsStore.loadProducts();
</script>
<template>
    <div>Component A</div>
    <div>
        <select v-model="productsStore.filter">
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unvailable">unvailable</option>
        </select>
    </div>
    <ul>
        <li v-for="product in productsStore.filteredProducts" :key="product.id">
            {{ product.name }} - {{ product.price }}</li>
    </ul>
</template>
<style>

</style>