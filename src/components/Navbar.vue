<template>
    <div class="fixed w-full z-10 bg-white overflow-hidden shadow-lg ">
        <div class="fixed w-full h-full backdrop-blur-sm backdrop-brightness-50 z-10 " v-if="menuVisible"
            @click="closeMenu()">
        </div>
        <nav class="flex sticky justify-between p-2 h-20">
            <router-link to="/" class="flex">
                <img :src="logoUrl" alt="logo" class="w-12 h-16 inline-block">
            </router-link>
            <router-link to="/" class="flex">
                <img :src="logoTextUrl" alt="logo with text" class="px-2 object-scale-down hidden md:block">
            </router-link>
            <img :src="hamburguerUrl" alt="menu button"
                class="object-scale-down border-gray-800 rounded-lg bg-gray-200 hover:bg-slate-300 active:bg-slate-500"
                @click="closeMenu()">
        </nav>
        <sideMenu :ref="sideMenu" :menuVisible="menuVisible" @closeMenu="closeMenu" />
    </div>
    <div class="h-20">
    </div>
</template>
<script>
import sideMenu from './Menu.vue';
export default {
    components: {
        sideMenu
    },
    data() {
        return {
            logoUrl: new URL('@/assets/Logo-LD-transparente.webp', import.meta.url),
            hamburguerUrl: new URL('@/assets/menu_black_48dp.svg', import.meta.url),
            logoTextUrl: new URL('@/assets/Logo-Ex-LD-transparente.webp', import.meta.url),
            menuVisible: false
        }
    },
    methods: {
        closeMenu() {
            this.menuVisible = !this.menuVisible;
        }
    }
}
</script>