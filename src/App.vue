<script setup>
import {ref} from 'vue';
import Test from "./components/Test.vue"
const message = ref("Coucou");
const functionTest= (data)=>{
    alert(data);
}
const changeMessage=(data)=>{
  message.value=data;
}
</script>

<template>
  <h1>{{ message }}</h1>
  <test @mon-evenement="functionTest" @message-changed="changeMessage"/>
</template>

<style scoped>

</style>
