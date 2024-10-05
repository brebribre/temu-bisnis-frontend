<script setup>
  import { ref } from 'vue';
  import Hero from '../components/Hero.vue';

  const message = ref('Hello, World!');
</script>

<template>
  <div class="home">
    <Hero />
  </div>
</template>

<style scoped>
  .home {
    text-align: center;
  }

  .home h1 {
    color: blue;
  }

  .home p {
    font-size: 18px;
    color: green;
  }
</style>
