<script setup lang="ts">
import BusinessList from '../components/BusinessList.vue';
import { useBusinesses } from '../../api/useBusinesses.ts';
import { onMounted, ref } from 'vue';
import Title from '../reusables/Title.vue';

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
      <Title>Browse Businesses</Title>
    </div>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else>
      <BusinessList :businesses="businesses" />
    </div>
  </div>
</template>

<style scoped>
.browserContainer {
  @apply bg-gray-100 py-12 min-h-screen flex flex-col px-4;
}

.header {
  @apply container mx-auto;
}
</style>
