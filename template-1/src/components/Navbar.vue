<template>
    <nav class="bg-gray-800 h-0">
    <div class="container mx-auto flex justify-between items-center pt-8">
      <div class="flex gap-2">
        <h1 class="text-white text-5xl font-bold">ENOS Digital</h1>
      </div>

      <ul class="nav-wrap bg-white text-2xl ">
        <li class="hover:text-blue-300 transition duration-300"><router-link to="/">Home</router-link></li>
        <li class="hover:text-blue-300 transition duration-300"><router-link to="/about">About</router-link></li>
        <li class="hover:text-blue-300 transition duration-300"><router-link to="/projects">Projects</router-link></li>
        <li class="hover:text-blue-300 transition duration-300"><router-link to="/contact">Contact</router-link></li>
      </ul>

      <button class="nav-wrap bg-black text-white font-semibold text-2xl transition duration-300 hover:bg-white hover:text-black">Get in touch</button>
    </div>
  </nav>
</template>

<style scoped>
nav{
    position: sticky;
    top: 0;
    z-index: 1000; 
}

.nav-wrap{
    display: flex;
    gap: 32px;
    padding:16px 64px;
    border-radius: 50px;
}
</style>