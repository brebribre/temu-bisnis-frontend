<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import BusinessList from '../components/BusinessList.vue';
import { Business } from '../../api/interfaces.ts';
import { useBusinesses } from '../../api/useBusinesses.ts';

const { fetchBusinesses, businesses, postBusiness } = useBusinesses();
const loading = ref(true);

const newBusiness = reactive<Omit<Business, '_id'>>({
  name: '',
  location: '',
  sector: '',
  image_url: '',
});

const addBusiness = async () => {
  loading.value = true;
  await postBusiness(newBusiness);
  loading.value = false;

  resetForm();
};

const resetForm = () => {
  newBusiness.name = '';
  newBusiness.location = '';
  newBusiness.sector = '';
  newBusiness.image_url = '';
};

onMounted(async () => {
  await fetchBusinesses();
  loading.value = false;
});
</script>

<template>
  <div class="bg-gray-100 min-h-screen py-12 px-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-10 text-[#082464]">
        Business Dashboard
      </h1>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Left Column: Add Business Form -->
        <div class="w-full lg:w-1/3">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold mb-4 text-[#082464]">
              Add New Business
            </h2>
            <form @submit.prevent="addBusiness">
              <div class="mb-4">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                  >Business Name</label
                >
                <input
                  v-model="newBusiness.name"
                  type="text"
                  id="name"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#082464] focus:ring focus:ring-[#082464] focus:ring-opacity-50"
                />
              </div>
              <div class="mb-4">
                <label
                  for="location"
                  class="block text-sm font-medium text-gray-700"
                  >Location</label
                >
                <input
                  v-model="newBusiness.location"
                  type="text"
                  id="location"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#082464] focus:ring focus:ring-[#082464] focus:ring-opacity-50"
                />
              </div>
              <div class="mb-4">
                <label
                  for="industry"
                  class="block text-sm font-medium text-gray-700"
                  >Industry</label
                >
                <input
                  v-model="newBusiness.sector"
                  type="text"
                  id="industry"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#082464] focus:ring focus:ring-[#082464] focus:ring-opacity-50"
                />
              </div>
              <div class="mb-4">
                <label
                  for="image"
                  class="block text-sm font-medium text-gray-700"
                  >Image URL</label
                >
                <input
                  v-model="newBusiness.image_url"
                  type="url"
                  id="image"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#082464] focus:ring focus:ring-[#082464] focus:ring-opacity-50"
                />
              </div>
              <button
                type="submit"
                class="w-full bg-[#082464] text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
              >
                Add Business
              </button>
            </form>
          </div>
        </div>

        <!-- Right Column: Business List -->
        <div class="w-full lg:w-2/3">
          <div v-if="loading" class="text-center">Loading...</div>
          <div v-else>
            <BusinessList :businesses="businesses" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
