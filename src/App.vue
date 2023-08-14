<<<<<<< HEAD
=======
<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

>>>>>>> parent of abad215 (Styling fixed)
<template>
  <div class="font-serif">
    <Navbar/>
    <router-view class=" min-h-screen"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>