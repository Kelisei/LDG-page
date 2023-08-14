<template>
    <footer class="bg-white shadow dark:bg-gray-900 top-0">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-md text-gray-500 sm:text-center dark:text-gray-400">© 2023 <router-link to="/"
                    class="hover:underline">LD Group</router-link>. Todos los derechos reservados.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <router-link to="/about" class="mr-4 hover:underline md:mr-6 ">Misión</router-link>
                </li>
                <li class="hidden">
                    <router-link to="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</router-link>
                </li>
                <li>
                    <router-link to="#" class="hover:underline">Contacto</router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>