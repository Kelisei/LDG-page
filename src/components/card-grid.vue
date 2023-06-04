<template>
    <p class="text-4xl text-center">Jugadores</p>
    <div class="flex justify-around p-8 flex-wrap">
        <Card v-for="player in players" :key="player.id" :url="player.src" :name="player.name" />
    </div>
</template>
<script>
import Card from './single-card.vue';

export default {
    name:'card-grid',
    components: {
        Card,
    },
    data() {
        return {
            players: [
                { name: 'Tobias Cuello', id: 1, src: new URL('@/assets/tobias.webp', import.meta.url) },
            ]
        }
    },
}
</script>