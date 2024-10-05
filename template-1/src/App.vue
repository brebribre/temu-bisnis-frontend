<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-white text-xl font-bold">My Portfolio</h1>
      <ul class="flex space-x-4">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
  // No need for any script code here for now
</script>

<style scoped>
  /* Add any custom styles here */
</style>
