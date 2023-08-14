<script setup>
import Navbar from './components/nav-bar.vue';
import Footer from './components/footer-section.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="font-serif antialiased tracking-tight">
    <Navbar/>
    <RouterView/>
    <Footer/>
  </div>
</template>
