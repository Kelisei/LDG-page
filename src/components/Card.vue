<template>
    <div class="relative shadow-xl min-h-[300px] min-w-[200px]  max-h-[600px] max-w-[400px] border-cyan-950 border-2 rounded-xl overflow-hidden">
        <img :src="url" alt="jugador" class="rounded-xl -translate-y-12">
        <p class=" w-full text-center absolute px-3  text-2xl top-[0%]  bg-slate-300 shadow-xl">{{ name }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        url: { type: String },
        name: { type: String }
    },
}
</script>