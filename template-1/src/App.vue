<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex gap-2">
        <BeakerIcon class="size-6 text-blue-500" />
        <h1 class="text-white text-xl font-bold">Your Logo</h1>
      </div>

      <ul class="flex space-x-4 text-white">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script setup>
  import { BeakerIcon } from '@heroicons/vue/24/solid';
</script>

<style scoped>
  /* Add any custom styles here */
</style>
