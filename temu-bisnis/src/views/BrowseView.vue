<script setup lang="ts">
import BusinessList from '../components/BusinessList.vue';
import { useBusinesses } from '../../api/useBusinesses.ts';
import { onMounted, ref } from 'vue';

const { fetchBusinesses, businesses } = useBusinesses();
const loading = ref(true);

onMounted(async () => {
  await fetchBusinesses();
  loading.value = false;
});
</script>

<template>
  <div class="browserContainer">
    <div class="header">
      <h1 class="title">Browse Businesses</h1>
    </div>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else>
      <BusinessList :businesses="businesses" />
    </div>
  </div>
</template>

<style scoped>
.browserContainer{
  @apply bg-gray-100 py-16 min-h-screen flex flex-col;
}

.header{
  @apply container mx-auto px-4
}

.title{
  @apply text-4xl font-bold mb-10 text-[#082464]
}
</style>