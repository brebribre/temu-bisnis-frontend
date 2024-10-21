<!-- src/components/Notification.vue -->
<template>
  <div
    v-if="visible"
    class="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-md"
  >
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  message: string;
  duration: number;
}>();

const visible = ref(true);

setTimeout(() => {
  visible.value = false;
}, props.duration);
</script>

<style scoped>
/* Add any additional styling here */
</style>
