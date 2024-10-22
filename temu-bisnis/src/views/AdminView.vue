<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import BusinessList from '../components/BusinessList.vue';
import { Business } from '../../api/interfaces.ts';
import { useBusinesses } from '../../api/useBusinesses.ts';
import Title from '../reusables/Title.vue';
import Input from '../reusables/Input.vue';
import Button from '../reusables/Button.vue';

const { fetchBusinesses, businesses, postBusiness, deleteBusiness } =
  useBusinesses();
const loading = ref(true);

const newBusiness = reactive<Omit<Business, '_id'>>({
  name: '',
  location: '',
  sector: '',
  image_url: '',
  min: 0,
  max: 0,
  selling_price: 0,
});

const addBusiness = async () => {
  loading.value = true;

  const formattedBusiness = {
    name: newBusiness.name,
    location: newBusiness.location,
    sector: newBusiness.sector,
    image_url: newBusiness.image_url,
    selling_price: newBusiness.selling_price,
    revenue_range: [newBusiness.min ?? 0, newBusiness.max ?? 0],
  };

  await postBusiness(formattedBusiness);
  loading.value = false;

  resetForm();
};

const removeBusiness = async (id: string) => {
  loading.value = true;
  await deleteBusiness(id);
  loading.value = false;
};

const resetForm = () => {
  newBusiness.name = '';
  newBusiness.location = '';
  newBusiness.sector = '';
  newBusiness.image_url = '';
  newBusiness.min = 0;
  newBusiness.max = 0;
  newBusiness.selling_price = 0;
};

onMounted(async () => {
  await fetchBusinesses();
  loading.value = false;
});
</script>

<template>
  <div class="bg-gray-100 min-h-screen py-12 px-4">
    <div class="container mx-auto">
      <Title>Business Dashboard</Title>
      {{ newBusiness }}
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Left Column: Add Business Form -->
        <div class="w-full lg:w-1/3">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-lg font-bold text-[#082464] mb-4">
              Add New Business
            </h2>
            <form @submit.prevent="addBusiness" class="flex flex-col gap-2">
              <Input v-model="newBusiness.name" label="Name" type="text" />
              <Input
                v-model="newBusiness.location"
                label="Location"
                type="text"
              />
              <Input
                v-model="newBusiness.sector"
                label="Industry"
                type="text"
              />
              <Input
                v-model="newBusiness.image_url"
                label="Image URL"
                type="url"
              />
              <Input
                v-model.number="newBusiness.min"
                label="Min Revenue (IDR / month)"
                type="number"
              />
              <Input
                v-model.number="newBusiness.max"
                label="Max Revenue (IDR / month)"
                type="number"
              />
              <Input
                v-model.number="newBusiness.selling_price"
                label="Selling Price (IDR)"
                type="number"
                >Rp</Input
              >
              <Button type="submit" class="mt-4 w-full">Add Business</Button>
            </form>
          </div>
        </div>

        <!-- Right Column: Business List -->
        <div class="w-full lg:w-2/3">
          <div v-if="loading" class="text-center">Loading...</div>
          <div v-else>
            <BusinessList
              :businesses="businesses"
              editable
              @delete-business="removeBusiness"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
