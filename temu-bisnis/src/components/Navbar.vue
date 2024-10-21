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
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-[#082464] text-black px-4 md:px-16 py-4"
  >
    <div class="container mx-auto flex justify-between items-center">
      <img src="../assets/logo-dark.png" class="h-10" alt="company-logo" />
      <div class="hidden md:flex space-x-4 font-sans text-xl gap-8 text-white">
        <router-link to="/">Home</router-link>
        <router-link to="/browse">Browse</router-link>
        <router-link to="/admin">Admin</router-link>
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
        class="md:hidden mt-4 overflow-hidden bg-[#082464]"
      >
        <router-link to="/" class="links" @click="isMobileMenuOpen = false"
          >Home</router-link
        >
        <router-link
          to="/browse"
          class="links"
          @click="isMobileMenuOpen = false"
          >Browse</router-link
        >
        <router-link to="/admin" class="links" @click="isMobileMenuOpen = false"
          >Admin</router-link
        >
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.links {
  @apply block py-4 px-4 transition duration-150 text-white font-semibold hover:opacity-80;
}
</style>
