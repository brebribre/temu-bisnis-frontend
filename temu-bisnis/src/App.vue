<template>
  <div>
    <Navbar />
    <!-- Hero Section with Contact Form -->
    <Hero />
    <Carousel />
    <!-- Key Points Section -->
    <section class="py-20">
      <div class="container mx-auto">
        <h2 class="text-5xl text-center px-40 text-[#082464] mb-20">
          Meet Temu Bisnis - The connective point between entrepreneurs and
          investors.
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
        <h2 class="text-5xl font-bold mb-10 text-[#082464]">Success Stories</h2>
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
import Hero from './components/Hero.vue';
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
</script>

<style scoped></style>
