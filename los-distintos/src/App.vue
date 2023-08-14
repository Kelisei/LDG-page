<template>
  <div class="font-serif">
    <Navbar/>
    <Carousel/>
    <Hero/>
    <CardGrid/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Carousel from './components/Carousel.vue';
import Hero from './components/Hero.vue';
import CardGrid from './components/CardGrid.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Carousel,
    Hero,
    CardGrid
  }
}
</script>