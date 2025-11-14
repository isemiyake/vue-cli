<script setup>
import {ref,provide} from 'vue';
const theme =ref("light")
provide("theme",theme);
</script>
<template>
    <div :class="theme">
     <slot></slot>
    </div>
</template>
<style>
.light,.dark{
    min-height: 100vh;
}
.light{
    background: #aeaeae;
    color: #444;
}
.dark{
    background: #444;
    color: #eaeaea;
}
</style>