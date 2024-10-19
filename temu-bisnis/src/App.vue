<template>
  <div>
    <Navbar />
    <!-- Hero Section with Contact Form -->
    <section
      class="relative bg-[url('./assets/shake-2.jpg')] bg-cover text-white py-40"
    >
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black opacity-40"></div>

      <!-- Content -->
      <div
        class="container relative z-10 mx-auto flex flex-col md:flex-row items-center"
      >
        <div class="md:w-1/2 mb-10 md:mb-0 mr-20">
          <h1 class="text-7xl font-bold mb-4">
            Connecting Businesses and Investors
          </h1>
          <p class="mb-6 text-2xl">
            Temu Bisnis is your gateway to successful business partnerships and
            investments.
          </p>
        </div>
        <div class="md:w-1/2">
          <form @submit.prevent="submitForm" class="bg-white p-6 rounded-lg">
            <h2 class="text-[#082464] text-2xl font-bold mb-4">
              List your business with us
            </h2>
            <div class="mb-4">
              <input
                v-model="form.name"
                type="text"
                placeholder="Your Name"
                class="w-full p-2 border rounded"
                required
              />
            </div>
            <div class="mb-4">
              <input
                v-model="form.email"
                type="email"
                placeholder="Your Email"
                class="w-full p-2 border rounded"
                required
              />
            </div>
            <div class="mb-4">
              <textarea
                v-model="form.message"
                placeholder="Your Message"
                class="w-full p-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-[#082464] text-white px-4 py-2 rounded hover:bg-blue-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

    <Carousel />
    <!-- Key Points Section -->
    <section class="py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10 text-[#082464]">
          Why Choose Temu Bisnis
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="point in keyPoints"
            :key="point.title"
            class="text-center"
          >
            <component
              :is="point.icon"
              class="w-16 h-16 mx-auto mb-4 text-[#082464]"
            />
            <h3 class="text-xl font-bold mb-2">{{ point.title }}</h3>
            <p>{{ point.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="bg-gray-100 py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10 text-[#082464]">
          Latest News
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="article in newsArticles"
            :key="article.title"
            class="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-[#082464]">
                {{ article.title }}
              </h3>
              <p class="text-gray-700">{{ article.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="bg-[#082464] text-white py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p class="mb-8">
          Join Temu Bisnis today and connect with potential investors and
          partners.
        </p>
        <button
          class="bg-white text-[#082464] px-6 py-3 rounded-lg text-lg font-bold hover:bg-gray-200"
        >
          Get Started Now
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-10">
      <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-center"
      >
        <div class="mb-6 md:mb-0">
          <h2 class="text-2xl font-bold">Temu Bisnis</h2>
          <p>Connecting businesses and investors since 2023</p>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-gray-300">
            <FacebookIcon />
          </a>
          <a href="#" class="hover:text-gray-300">
            <TwitterIcon />
          </a>
          <a href="#" class="hover:text-gray-300">
            <LinkedinIcon />
          </a>
          <a href="#" class="hover:text-gray-300">
            <InstagramIcon />
          </a>
        </div>
      </div>

      <div class="container mx-auto mt-8 text-center text-gray-400">
        <p>&copy; 2023 Temu Bisnis. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  UsersIcon,
  TrendingUpIcon,
  ShieldIcon,
} from 'lucide-vue-next';
import Carousel from './components/Carousel.vue';
import Navbar from './components/Navbar.vue';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface KeyPoint {
  icon: any;
  title: string;
  description: string;
}

interface NewsArticle {
  image: string;
  title: string;
  description: string;
}

const isMobileMenuOpen = ref(false);

const form = reactive<FormData>({
  name: '',
  email: '',
  message: '',
});

const keyPoints: KeyPoint[] = [
  {
    icon: UsersIcon,
    title: 'Wide Network',
    description:
      'Access to a vast network of businesses and investors across various industries.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Growth Opportunities',
    description:
      'Identify and seize growth opportunities through strategic partnerships and investments.',
  },
  {
    icon: ShieldIcon,
    title: 'Secure Platform',
    description:
      'A secure and trusted platform for connecting and conducting business transactions.',
  },
];

const newsArticles: NewsArticle[] = [
  {
    image: 'https://placehold.co/600x400/000000/FFF',
    title: 'Temu Bisnis Expands to Southeast Asia',
    description:
      'Our platform is now available in five new countries, opening up exciting opportunities for cross-border partnerships.',
  },
  {
    image: 'https://placehold.co/600x400/000000/FFF',
    title: 'Success Story: Tech Startup Secures $10M Funding',
    description:
      'Learn how a promising tech startup used Temu Bisnis to connect with investors and secure major funding.',
  },
  {
    image: 'https://placehold.co/600x400/000000/FFF',
    title: 'New Feature: AI-Powered Matching',
    description:
      'Our latest feature uses AI to match businesses with the most suitable investors, increasing success rates.',
  },
];

const toggleMobileMenu = () => {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  } else {
    setTimeout(() => {
      isMobileMenuOpen.value = true;
    }, 50);
  }
};

const submitForm = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form);
  // Reset the form after submission
  form.name = '';
  form.email = '';
  form.message = '';
  alert('Thank you for your message. We will get back to you soon!');
};
</script>

<style scoped>
</style>
