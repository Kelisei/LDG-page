<template>
  <div class="home">
    <Carousel/>
    <Hero/>
    <CardGrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '../components/image-carousel.vue';
import Hero from '../components/hero-section.vue';
import CardGrid from '../components/card-grid.vue';

export default {
  name: 'home-view',
  components : {
    Carousel,
    Hero, 
    CardGrid
  }
}
</script>
