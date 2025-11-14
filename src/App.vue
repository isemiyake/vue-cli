<script setup>
import {ref} from 'vue';
import Test from "./components/Test.vue"
const message = ref("Coucou");

</script>

<template>
  <h1>{{ message }}</h1>
  <div>
    <test :parent-value="message" @value-changed="(data)=>(message=data)"/>
    </div>
</template>

<style scoped>

</style>
