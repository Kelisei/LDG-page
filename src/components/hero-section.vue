<template>
    <div class="sm:m-48 m-16 flex flex-col items-center z-0">
        <img :src="logo" alt="logo" class="max-h-60">
        <h1 class="text-4xl">Hola que hace</h1>
        <p class="text-xl text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis praesentium asperiores, culpa placeat nisi distinctio doloribus laudantium vel! Sequi nam quo sunt, ex corrupti repellat ipsam nobis voluptatem expedita explicabo.</p>
    </div>
</template>
<script>
export default {
    name:'hero-section',
    data() {
        return {
            logo: new URL('@/assets/Logo-LD-transparente.webp', import.meta.url),
        }
    },
}
</script>