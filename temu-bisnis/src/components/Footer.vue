<script setup lang="ts">
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-vue-next';
</script>

<template>
  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-10">
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-center"
    >
      <div class="mb-6 md:mb-0">
        <h2 class="text-2xl font-bold">Temu Bisnis</h2>
        <p>Connecting businesses and investors since 2023</p>
      </div>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-gray-300">
          <FacebookIcon />
        </a>
        <a href="#" class="hover:text-gray-300">
          <TwitterIcon />
        </a>
        <a href="#" class="hover:text-gray-300">
          <LinkedinIcon />
        </a>
        <a href="#" class="hover:text-gray-300">
          <InstagramIcon />
        </a>
      </div>
    </div>

    <div class="container mx-auto mt-8 text-center text-gray-400">
      <p>&copy; 2023 Temu Bisnis. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped></style>
