<template>
    <div class="relative w-full overflow-hidden">
        <img v-for="image in slides" :key="image.id" :src="image.src" :alt="'slide ' + image.id"
            :class="{ 'opacity-100': image.id === currentSlide, 'opacity-0': image.id !== currentSlide }"
            class="absolute w-full transition-opacity ease-in-out duration-200 delay-75">
        <button
            class="absolute top-1/2 transform -translate-y-1/2 left-4 hover:bg-indigo-100 hover:bg-opacity-10 rounded-full"
            @click="previous()">
            <img :src="arrowBackwardUrl" alt="Switch to the left image">
        </button>
        <button
            class="absolute top-1/2 transform -translate-y-1/2 right-4 hover:bg-indigo-100 hover:bg-opacity-10 rounded-full"
            @click="next()">
            <img :src="arrowForwardUrl" alt="Switch to the right image">
        </button>
        <img id="current-image" :src="whiteCollider" alt="white-bg">
    </div>
</template>

<script>
export default {
    name: 'image-carousel',
    data() {
        return {
            slides: [
                { id: 0, src: new URL('@/assets/i1.webp', import.meta.url) },
                { id: 1, src: new URL('@/assets/i2.webp', import.meta.url) },
                { id: 2, src: new URL('@/assets/i3.webp', import.meta.url) },
                { id: 3, src: new URL('@/assets/i4.webp', import.meta.url) },
            ],
            currentSlide: 1,
            arrowForwardUrl: new URL('@/assets/chevrons-right.svg', import.meta.url),
            arrowBackwardUrl: new URL('@/assets/chevrons-left.svg', import.meta.url),
            whiteCollider: new URL('@/assets/whiteboard.webp', import.meta.url),
        }
    },
    methods: {
        previous() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        },
        next() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },
    },
    mounted() {
        setInterval(this.next, 5000);
    }
}
</script>