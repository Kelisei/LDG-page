<template>
  <div class="fixed top-0 h-screen w-80 bg-white shadow-lg transition-all duration-250 z-10"
    :class="{ 'right-[-100%]': !menuVisible, 'right-[0]': menuVisible }">
    <button @click="closeMenu" class="m-4 hover:bg-slate-300 active:bg-slate-500 rounded-full"><img :src="xButtonUrl"
        alt="close" class="h-8 w-8"></button>
    <ul class="px-6">
      <li v-for="item in items" :key="item.id" class="py-4">
        <router-link :to="item.link" class="text-xl flex items-center hover:text-slate-400">
          <img :src="item.imgUrl" class="h-8"> {{ item.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xButtonUrl: require('@/assets/close_black_48dp.svg'),
      items: [
        { id: 1, imgUrl: require('@/assets/home_black_48dp.svg'), link: '/', text: ' Inicio' },
        { id: 2, imgUrl: require('@/assets/groups_black_48dp.svg'), link: '/about', text: ' Nuestra mision' },
        { id: 3, imgUrl: require('@/assets/explore_black_48dp.svg'), link: '/accompaniment', text: ' Acompañamiento' },
        { id: 4, imgUrl: require('@/assets/gavel_black_48dp.svg'), link: '/legal_support', text: ' Soporte legal' },
        { id: 5, imgUrl: require('@/assets/sports_soccer_black_48dp.svg'), link: '/players', text: ' Jugadores' }
      ]
    }
  },
  props: {
    menuVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu');
    }
  }
}
</script>