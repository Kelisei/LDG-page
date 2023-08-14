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