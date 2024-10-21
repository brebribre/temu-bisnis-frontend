<!-- src/components/ResponsiveTitle.vue -->
<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<script setup lang="ts">
</script>

<style scoped>
.title {
  @apply text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-10 text-[#082464];
}
</style>