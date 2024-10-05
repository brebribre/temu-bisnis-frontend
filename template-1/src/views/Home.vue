<template>
  <div class="home">
    <h1>Welcome to Home</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const message = ref('Hello, World!');
</script>

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
