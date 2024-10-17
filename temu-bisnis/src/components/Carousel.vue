<template>
  <div class="bg-gray-100 py-16 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="relative">
        <div
          class="flex animate-scroll gap-32 pb-8"
          :style="{ width: `${logos.length * 200}px` }"
        >
          <div
            v-for="logo in duplicatedLogos"
            :key="logo.id"
            class="flex-shrink-0 w-48 h-24 mx-4"
          >
            <img
              :src="logo.url"
              :alt="logo.name"
              class="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import logoLight from '../assets/logo.png';

interface Logo {
  id: number;
  name: string;
  url: string;
}

const logos = ref<Logo[]>([
  { id: 1, name: 'Company A', url: logoLight },
  { id: 2, name: 'Company B', url: logoLight },
  { id: 3, name: 'Company C', url: logoLight },
  { id: 4, name: 'Company D', url: logoLight },
  { id: 5, name: 'Company E', url: logoLight },
  { id: 6, name: 'Company F', url: logoLight },
]);

const duplicatedLogos = computed(() => [...logos.value, ...logos.value]);
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}
</style>
