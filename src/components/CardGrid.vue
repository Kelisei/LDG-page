<template>
    <p class="text-4xl text-center">Jugadores</p>
    <div class="flex justify-around p-8 flex-wrap">
        <Card v-for="player in players" :key="player.id" :url="player.src" :name="player.name"/>
</div>
</template>
<script>
import Card from './Card.vue';

export default {
    components: {
        Card,
    },
    data() {
        return {
            players :[
                {name: 'Tobias Cuello', id:1, src:require('@/assets/tobias.jpeg')},
                {name: '2', id:2, src:require('@/assets/pexels-pixabay-159684.jpg')},
                {name: '3', id:3, src:require('@/assets/pexels-pixabay-159684.jpg')},
                {name: '4', id:4, src:require('@/assets/pexels-pixabay-159684.jpg')},
            ]
        }
    },
}
</script>