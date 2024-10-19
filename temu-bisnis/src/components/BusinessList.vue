<template>
  <div class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold mb-10 text-[#082464]">Browse Businesses</h1>
      <div class="mb-8">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-grow">
            <input
                v-model="searchQuery"
                type="text"
                placeholder="Search businesses..."
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#082464]"
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
              <option v-for="industry in uniqueIndustries" :key="industry" :value="industry">
                {{ industry }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div v-if="filteredBusinesses.length === 0" class="text-center text-gray-600 my-8">
        No businesses found matching your search criteria.
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="business in filteredBusinesses" :key="business.id">
          <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="business.image" :alt="business.name" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h2 class="text-xl font-bold text-[#082464] mb-2">{{ business.name }}</h2>
              <p class="text-gray-600 mb-2">
                <MapPinIcon class="inline-block w-4 h-4 mr-1" />
                {{ business.location }}
              </p>
              <p class="text-gray-600">
                <BriefcaseIcon class="inline-block w-4 h-4 mr-1" />
                {{ business.industry }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { MapPinIcon, BriefcaseIcon } from 'lucide-vue-next'

interface Business {
  id: number
  name: string
  location: string
  industry: string
  image: string
}

const businesses = ref<Business[]>([
  {
    id: 1,
    name: "TechInnovate Solutions",
    location: "San Francisco, CA",
    industry: "Information Technology",
    image: "https://placehold.co/600x400/000000/FFF"
  },
  {
    id: 2,
    name: "GreenLeaf Renewables",
    location: "Austin, TX",
    industry: "Renewable Energy",
    image: "https://placehold.co/600x400/000000/FFF"
  },
  {
    id: 3,
    name: "HealthPlus Medical Systems",
    location: "Boston, MA",
    industry: "Healthcare Technology",
    image: "https://placehold.co/600x400/000000/FFF"
  },
  {
    id: 4,
    name: "UrbanSpaces Real Estate",
    location: "New York, NY",
    industry: "Real Estate",
    image: "https://placehold.co/600x400/000000/FFF"
  },
  {
    id: 5,
    name: "EcoFriendly Packaging Co.",
    location: "Seattle, WA",
    industry: "Sustainable Packaging",
    image: "https://placehold.co/600x400/000000/FFF"
  },
  {
    id: 6,
    name: "SmartFinance Solutions",
    location: "Chicago, IL",
    industry: "Financial Technology",
    image: "https://placehold.co/600x400/000000/FFF"
  }
])

const searchQuery = ref('')
const selectedIndustry = ref('')
const filteredBusinesses = ref<Business[]>([...businesses.value])

const uniqueIndustries = computed(() => {
  const industries = businesses.value.map(business => business.industry)
  return [...new Set(industries)]
})

const filterBusinesses = () => {
  filteredBusinesses.value = businesses.value.filter(business => {
    const matchesSearch =
        business.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        business.location.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        business.industry.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesIndustry =
        selectedIndustry.value === '' || business.industry === selectedIndustry.value

    return matchesSearch && matchesIndustry
  })
}
</script>