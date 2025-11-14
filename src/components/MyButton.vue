<script setup>
import {ref} from "vue"
const props = defineProps({texte: String,})
const texte =ref(props.texte)
</script>
<template>
    <button>{{ texte }}</button> <input type="text" v-model="texte">
</template>
<style></style>