<!-- src/components/ResponsiveTitle.vue -->
<template>
  <div class="flex flex-col">
    <label v-if="label" class="block text-sm text-gray-700">{{ label }}</label>

    <input
      v-model="localValue"
      id="image"
      :type="type"
      class="p-2 block w-full rounded-md border-2 bg-gray-100 shadow-sm focus:border-[#082464] focus:ring focus:ring-[#082464] focus:ring-opacity-50"
      @input="onInput"
    />

    <div class="flex text-red-600 text-sm" v-if="errorMessage">
      <CircleXIcon class="h-4 my-auto" />
      <span class="align-center">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { CircleXIcon } from 'lucide-vue-next';

const props = defineProps<{
  modelValue: string | number | undefined;
  label?: string;
  type?: 'text' | 'number' | 'email' | 'password' | 'url';
}>();

const emit = defineEmits(['update:modelValue']);

const localValue = ref(props.modelValue ?? '');

const errorMessage = ref('');

const onInput = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;

  //validate and only emit if it is valid
  if (props.type === 'number') {
    const isOnlyDigits = /^\d+$/.test(inputElement.value);
    if (!isOnlyDigits) {
      errorMessage.value = 'Please type a whole number';
      console.error('Please type a whole number');
      return;
    } else {
      errorMessage.value = '';
    }
  }

  emit('update:modelValue', inputElement.value);
};

watchEffect(() => {
  localValue.value = props.modelValue ?? '';
});
</script>

<style scoped></style>
