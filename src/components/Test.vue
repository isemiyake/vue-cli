<script setup>
import {ref,reactive,toRef,toRefs} from "vue";
const count = ref(0);
const user = reactive({firstName:"pascale",lastName:"lacroix"});
const testToRef=toRef(count);
const prenom=toRef(user.firstName);
const user2=toRefs(user)
</script>
<template>
    <h2>coucou</h2>
    <div><button @click="count--">-</button> {{ count }} <button @click="count++">+</button> </div>
    <div v-for="item in count" :key="item">{{ item }}</div>
    <div>{{user.firstName}} {{user.lastName}}</div>
    <div>{{ testToRef }}</div>
    <div>{{ prenom }}</div>
    <div>{{ user2.firstName }}</div>
</template>
<style scoped></style>