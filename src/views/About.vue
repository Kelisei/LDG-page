<template>
    <div class="p-6">
        <h1 class="text-4xl text-color-black">
            Nuestra misión:
        </h1>
        <p class=" p-12 text-xl text-slate-800 text-justify z-10">
            Nuestra misión es brindar a los jugadores de futbol una plataforma integral donde
            cada uno de ellos cuente con herramientas para desarrollarse mejor dentro de su
            profesión, pudiendo apoyarse y desenvolverse en los aspectos educativos,
            psicológicos y deportivos para afrontar una realidad que es muy dinámica. Este
            soporte les otorgará la seguridad necesaria que le permitirá enfocarse de pleno en sus
            objetivos profesionales de corto, mediano y largo plazo.
            Tenemos una visión integral, actuando con responsabilidad y conciencia ética. Nuestro
            rol es generar un proceso que lleva a potenciar a nuestros futbolistas
        </p>
    </div>
    <div class="flex flex-col justify-center">
        <img :src="stockImage" alt="foto de un campo de fútbol vista area" srcset="" class="p-2 rounded-xl">
        <a href="https://www.pexels.com/es-es/foto/vista-aerea-del-campo-de-futbol-1171084/" target="_blank"
            class=" text-xs text-slate-400 p-12 text-center">Foto de Mike de Pexels:
            https://www.pexels.com/es-es/foto/vista-aerea-del-campo-de-futbol-1171084/</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stockImage: require('@/assets/pexels-mike-1171084.jpg')
        }
    }
}
</script>