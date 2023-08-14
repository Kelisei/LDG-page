<template>
    <div class="fixed w-full z-10 bg-white overflow-hidden shadow-lg">
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
        <Menu :ref="sideMenu" :menuVisible="menuVisible" @closeMenu="closeMenu" />
    </div>
    <div class="h-20">
    </div>
</template>
<script>
<<<<<<< HEAD
<<<<<<< HEAD
import Menu from './Menu.vue';
=======
import sideMenu from './Menu.vue';
>>>>>>> parent of abad215 (Styling fixed)
=======
import sideMenu from './Menu.vue';
>>>>>>> parent of abad215 (Styling fixed)
export default {
    components: {
        Menu
    },
    data() {
        return {
            logoUrl: require('@/assets/Logo-LD-transparente.png'),
            hamburguerUrl: require('@/assets/menu_black_48dp.svg'),
            logoTextUrl: require('@/assets/Logo-Ex-LD-transparente.png'),
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