<script setup>
import { reactive } from 'vue';
const props =defineProps({datatruc:Object,});
const datatruc = reactive(props.datatruc)
</script>
<template>
    <li>{{ datatruc.name }}-{{ datatruc.price }}
        <input type="text" v-model="datatruc.name">
    </li>
    
</template>
<style scoped></style>