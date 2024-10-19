<template>
  <div>
    <Navbar />
    <div class="mt-16">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped></style>
