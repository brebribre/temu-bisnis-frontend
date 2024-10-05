<template>
    <div class="relative bg-gray-800 overflow-hidden">
      <div class="absolute inset-0">
        <!-- Background Image -->
        <img class="w-full h-full object-cover" src="../assets/hero.webp" alt="Background Image" />
        <div class="absolute inset-0 bg-gray-800 opacity-50"></div>
      </div>
  
      <!-- Content -->
      <div class="hero relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Welcome to <span class="text-blue-500">Enos</span>
          </h1>
          <p class="mt-4 text-lg text-gray-300 sm:text-xl">
            Creating solutions with creativity and efficiency.
          </p>
          <div class="mt-8">
            <a
              href="#"
              class="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional logic is needed for this simple hero component
  </script>
  
  <style scoped>
  /* Custom styles for any additional tweaks (if necessary) */
  .hero {
    min-height: 80vh;
  }
  </style>
  