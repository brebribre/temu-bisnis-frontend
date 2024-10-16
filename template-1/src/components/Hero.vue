<template>
    <div class="relative bg-gray-800 overflow-hidden">
      <div class="absolute inset-0">
        <!-- Background Image -->
        <img class="w-full h-full object-cover" src="../assets/hero.webp" alt="Background Image" />
        <div class="absolute inset-0 bg-gray-800 opacity-50"></div>
      </div>
  
      <!-- Content -->
      <div class="hero relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional logic is needed for this simple hero component
  </script>
  
  <style scoped>
  /* Custom styles for any additional tweaks (if necessary) */
  .hero {
    min-height: 100vh;
  }

  </style>
  