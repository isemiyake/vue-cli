<script setup>
 const emit = defineEmits(['monEvenement','messageChanged']);
</script>
<template>
  <h2>template test</h2>
  <div><button @click="emit('monEvenement','message 2')">emit</button></div>
    <div><button @click="emit('messageChanged','Genial!')">edit</button></div>

</template>
<style>

</style>