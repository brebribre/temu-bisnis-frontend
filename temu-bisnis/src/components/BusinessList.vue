<template>
  <div class="container mx-auto">
    <div class="mb-8">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-grow relative">
          <SearchIcon
            class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
          />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search businesses..."
            class="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#082464]"
            @input="filterBusinesses"
          />
        </div>
        <div class="flex-shrink-0">
          <select
            v-model="selectedIndustry"
            class="w-full md:w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#082464]"
            @change="filterBusinesses"
          >
            <option value="">All Industries</option>
            <option
              v-for="industry in uniqueIndustries"
              :key="industry"
              :value="industry"
            >
              {{ industry }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div
      v-if="filteredBusinesses.length === 0"
      class="text-center text-gray-600 my-8"
    >
      No businesses found.
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="business in filteredBusinesses" :key="business._id">
        <div
          class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300"
        >
          <img
            v-if="business.image_url"
            :src="business.image_url"
            :alt="business.name"
            class="w-full h-64 object-cover"
          />
          <div
            v-else
            class="w-full h-64 bg-gray-300 font-bold text-gray-400 text-center flex items-center justify-center"
          >
            No image
          </div>
          <div class="p-6">
            <h2 class="text-xl font-bold text-[#082464] mb-2 truncate">
              {{ business.name }}
            </h2>
            <p class="text-gray-600 mb-2 truncate">
              <MapPinIcon class="inline-block w-4 h-4 mr-1" />
              {{ business.location }}
            </p>
            <p class="text-gray-600 truncate">
              <BriefcaseIcon class="inline-block w-4 h-4 mr-1" />
              {{ business.sector }}
            </p>
            <div class="flex gap-2 justify-between mt-4" v-if="editable">
              <Button
                variant="danger"
                size="small"
                class="flex-1"
                @click="emit('deleteBusiness', business._id)"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { MapPinIcon, BriefcaseIcon, SearchIcon } from 'lucide-vue-next';
import { Business } from '../../api/interfaces.ts';
import Button from '../reusables/Button.vue';

const props = defineProps<{
  businesses: Business[];
  editable?: boolean;
}>();

const emit = defineEmits(['deleteBusiness']);

const searchQuery = ref('');
const selectedIndustry = ref('');
const filteredBusinesses = ref<Business[]>([...props.businesses]);

const uniqueIndustries = computed(() => {
  const industries = props.businesses.map((business) => business.sector);
  return [...new Set(industries)];
});

const filterBusinesses = () => {
  filteredBusinesses.value = props.businesses.filter((business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      business.location
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      business.sector.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesIndustry =
      selectedIndustry.value === '' ||
      business.sector === selectedIndustry.value;

    return matchesSearch && matchesIndustry;
  });
};
</script>
