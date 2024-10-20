<script setup lang="ts">
import { reactive } from 'vue';
interface FormData {
  name: string;
  email: string;
  message: string;
}
const submitForm = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form);
  // Reset the form after submission
  form.name = '';
  form.email = '';
  form.message = '';
  alert('Thank you for your message. We will get back to you soon!');
};

const form = reactive<FormData>({
  name: '',
  email: '',
  message: '',
});
</script>

<template>
  <section
    class="relative bg-[url('./assets/shake-2.jpg')] bg-cover text-white py-40"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black opacity-40"></div>
    <!-- Content -->
    <div
      class="container relative z-10 mx-auto flex flex-col md:flex-row items-center"
    >
      <div class="md:w-1/2 mb-10 md:mb-0 mr-20 mx-12">
        <h1 class="text-5xl font-bold mb-4 md:text-7xl">
          Connecting Businesses and Investors
        </h1>
        <p class="mb-6 text-xl md:text-2xl">
          Temu Bisnis is your gateway to successful business partnerships and
          investments.
        </p>
      </div>
      <div class="px-12 md:w-1/2 w-full hidden md:block">
        <form
          @submit.prevent="submitForm"
          class="bg-white p-6 rounded-lg text-black"
        >
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
</template>
<style scoped></style>
