<script setup>
import { inject } from 'vue';
const theme = inject("theme")
</script>
<template>
   <div>{{ theme }}   <input type="text" v-model="theme"></div>

</template>
<style></style>