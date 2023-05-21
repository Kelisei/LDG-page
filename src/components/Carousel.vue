<template>
    <div class="relative w-full overflow-hidden">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                { id: 0, src: require('@/assets/i1.png') },
                { id: 1, src: require('@/assets/i2.png') },
                { id: 2, src: require('@/assets/i3.png') },
                { id: 3, src: require('@/assets/i4.png') },
            ],
            currentSlide: 0,
            arrowForwardUrl: require('@/assets/arrow_forward_ios_black_48dp.svg'),
            arrowBackwardUrl: require('@/assets/arrow_back_ios_black_48dp.svg'),
            whiteCollider: require('@/assets/whiteboard.jpg'),
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
<style></style>