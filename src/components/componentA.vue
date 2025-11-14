<script setup>
import { store } from '../service/store';
</script>
<template>
    <div>Component A</div>
    <div>
        <select v-model="store.filter">
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unvailable">unvailable</option>
        </select>
    </div>
    <ul>
        <li v-for="product in store.getFilteredProducts()" :key="product.id">
            {{ product.name }} - {{ product.price }}</li>
    </ul>
</template>
<style>

</style>