<script setup>
    import {ref,computed,reactive} from 'vue';
    const price=ref(100);
    const user = reactive({firstName:"pascale",lastName:"lacroix"});
    const priceTva=computed(()=>(price.value * 1.21).toFixed(2));
    const fullname=computed({
        get(){
            return user.firstName+" "+user.lastName;}, 
        set(data){
            [user.firstName,user.lastName]=data.split(" ");}
        });
</script>
<template>
    <h2>Test computed</h2>
    <div>Price: {{price}}- tvac price: {{priceTva}}</div>
    <div>{{ user.firstName }}</div>
    <div>{{ fullname }}</div>
    <input type="text" v-model="fullname">
</template>
<style scoped>

</style>