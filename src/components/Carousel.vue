<template>
    <div class="relative w-full overflow-hidden">
        <img v-for="image in slides" :key="image.id" :src="image.src" alt=""
            :class="{ 'opacity-100': image.id === currentSlide, 'opacity-0': image.id !== currentSlide }"
            class="absolute w-full transition-opacity ease-in-out duration-500 delay-250">
        <img id="current-image" :src="whiteCollider" alt="white-bg">
        <div class="">
            <div class="">
                <button class="p-2 h-16 w-16 absolute top-[35%] lg:top-[40%]  left-[0%] md:left-[4%]" @click="previous()">
                    <img :src="arrowBackwardUrl" alt="Switch to the left image">
                </button>
                <button class="absolute h-16 w-16 top-[35%] lg:top-[40%] left-[88%] md:left-[92%]" @click="next()">
                    <img :src="arrowForwardUrl" alt="Switch to the right image">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                { id: 0, src: new URL('@/assets/pexels-pixabay-159684.webp', import.meta.url) },
                { id: 1, src: new URL('@/assets/i2.webp', import.meta.url) },
                { id: 2, src: new URL('@/assets/i3.webp', import.meta.url) },
                { id: 3, src: new URL('@/assets/i4.webp', import.meta.url) },
            ],
            currentSlide: 0,
            arrowForwardUrl: new URL('@/assets/arrow_forward_ios_black_48dp.svg', import.meta.url),
            arrowBackwardUrl: new  URL('@/assets/arrow_back_ios_black_48dp.svg', import.meta.url),
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