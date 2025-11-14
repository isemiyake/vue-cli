<script setup>
defineProps(['parentValue'])//ref(coucou)
</script>
<template>
  <div><input type="text" :value="parentValue" @input="$emit('valueChanged',$event.target.value)"></div>
</template>
<style>

</style>