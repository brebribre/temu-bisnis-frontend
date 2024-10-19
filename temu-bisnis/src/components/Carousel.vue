<template>
  <div class="py-16 overflow-hidden">
    <div
      class="w-full gap-16 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
    >
      <ul
          v-for="(index) in 2" :key="index"
        class="flex items-center gap-16 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li v-for="image in logos">
          <img :src="image.url" :alt="image.name" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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

img {
  @apply h-20;
}
</style>
