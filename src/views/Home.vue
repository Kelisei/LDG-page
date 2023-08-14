<template>
  <div class="home">
    <Carousel/>
    <Hero/>
    <CardGrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '../components/Carousel.vue';
import Hero from '../components/Hero.vue';
import CardGrid from '../components/CardGrid.vue';

export default {
  name: 'HomeView',
  components : {
    Carousel,
    Hero, 
    CardGrid
  }
}
</script>
