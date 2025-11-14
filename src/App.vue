<script setup>
import Post from "./components/Post.vue";
const posts=[{id:1,title:"post1",content:"content1"},
{id:2,title:"post2",content:"content2"},
{id:3,title:"post3",content:"content3"},
]
</script>

<template>
  <h1>coucou</h1>
  <post > 
  <template #header>
    <h2>{{ posts[0].title }}</h2>
  </template>
  </post>
    <post > 
  <template #header>
    <h5>{{ posts[1].title }}</h5>
  </template>
  </post>
</template>

<style scoped></style>
