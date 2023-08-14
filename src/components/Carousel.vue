<template>
    <div class="relative w-full overflow-hidden">
<<<<<<< HEAD
        <img v-for="image in slides" :key="image.id" :src="image.src"
            :class="{ 'opacity-100': image.id === currentSlide, 'opacity-0': image.id !== currentSlide }"
            class="absolute w-full transition-opacity ease-in-out duration-500 delay-250">

        <img id="current-image" :src="whiteCollider" alt="white-bg">
        <div class="">
            <div class="">
                <button class="p-2 h-16 w-16 absolute top-[35%] lg:top-[40%]  left-[0%] md:left-[4%]" @click="previous()">
                    <img :src="arrowBackwardUrl">
                </button>
                <button class="absolute h-16 w-16 top-[35%] lg:top-[40%] left-[88%] md:left-[92%]" @click="next()">
                    <img :src="arrowForwardUrl">
                </button>
            </div>
        </div>
=======
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
>>>>>>> parent of abad215 (Styling fixed)
    </div>
</template>

<script>
export default {
    data() {
        return {
            slides: [
<<<<<<< HEAD
                { id: 0, src: require('@/assets/i1.png') },
                { id: 1, src: require('@/assets/i2.png') },
                { id: 2, src: require('@/assets/i3.png') },
                { id: 3, src: require('@/assets/i4.png') },
            ],
            currentSlide: 0,
            arrowForwardUrl: require('@/assets/arrow_forward_ios_black_48dp.svg'),
            arrowBackwardUrl: require('@/assets/arrow_back_ios_black_48dp.svg'),
            whiteCollider: require('@/assets/whiteboard.jpg'),
=======
                { id: 0, src: new URL('@/assets/i1.webp', import.meta.url) },
                { id: 1, src: new URL('@/assets/i2.webp', import.meta.url) },
                { id: 2, src: new URL('@/assets/i3.webp', import.meta.url) },
                { id: 3, src: new URL('@/assets/i4.webp', import.meta.url) },
            ],
            currentSlide: 1,
            arrowForwardUrl: new URL('@/assets/chevrons-right.svg', import.meta.url),
            arrowBackwardUrl: new URL('@/assets/chevrons-left.svg', import.meta.url),
            whiteCollider: new URL('@/assets/whiteboard.webp', import.meta.url),
>>>>>>> parent of abad215 (Styling fixed)
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
<<<<<<< HEAD
</script>
<style></style>
=======
</script>
>>>>>>> parent of abad215 (Styling fixed)
