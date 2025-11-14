<script setup>
import MyButton from "./components/MyButton.vue";
import Product from "./components/Product.vue"

const products=[
  {id:1,name:"product 2",price:10},
    {id:2,name:"product 2",price:20},
      {id:2,name:"product 2",price:30}
]
</script>

<template>
  <h1>Test vue cli</h1>
  <my-button texte="firstbutton" />
 <h2>Mon panier</h2>
 <ul>
  <product v-for="product in products" :key="product.id" :datatruc="product"/>
 </ul>
</template>

<style scoped></style>
