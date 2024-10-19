<script setup lang="ts">
import { ref } from 'vue';
import { MenuIcon } from 'lucide-vue-next';

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  } else {
    setTimeout(() => {
      isMobileMenuOpen.value = true;
    }, 50);
  }
};
</script>

<template>
  <!-- Navigation Bar -->
  <nav class="fixed top-0 left-0 w-full z-50 bg-[#082464] text-black p-4">
    <div class="container mx-auto flex justify-between items-center">
      <img src="../assets/logo-dark.png" class="h-10" alt="company-logo" />
      <div class="hidden md:flex space-x-4 font-sans text-xl gap-8 text-white">
        <router-link to="/">Home</router-link>
        <router-link to="/browse">Browse</router-link>
      </div>
      <button class="md:hidden text-white" @click="toggleMobileMenu">
        <MenuIcon />
      </button>
    </div>
    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 rounded-lg shadow-lg overflow-hidden bg-[#082464]"
      >
        <a href="#" class="links">Home</a>
        <a href="#" class="links">About</a>
        <a href="#" class="links">Services</a>
        <a href="#" class="links">News</a>
        <a href="#" class="links">Contact</a>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.links {
  @apply block py-4 px-4 hover:bg-gray-100 transition duration-150 text-white font-semibold;
}
</style>
