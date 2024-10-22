<!-- src/components/TailwindButton.vue -->
<template>
  <button
    :class="[
      'py-2 px-4 rounded-lg',
      variantClasses,
      sizeClasses,
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}>();

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-[#082464] text-white hover:bg-blue-700';
    case 'secondary':
      return 'bg-gray-500 text-white hover:bg-gray-700';
    case 'danger':
      return 'bg-red-500 text-white hover:bg-red-700';
    default:
      return 'bg-gray-500 text-white hover:bg-gray-700';
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return 'text-xs';
    case 'medium':
      return 'text-sm';
    case 'large':
      return 'text-lg';
    default:
      return 'text-sm';
  }
});
</script>

<style scoped></style>
