<template>

    <!-- Begin contents -->
    <carousel>
        <slide v-for="banner in AdBanners" :key="banner.resource_id" class="carousel__slide">
            <router-link to="/"><img v-bind:src="banner.image" :alt="banner.desc" class="rounded border-none"></router-link>
        </slide>

        <template #addons>
            <navigation></navigation>
        </template>
    </carousel>
    <!-- End contents -->

</template>

<script>
    // import  'vue3-carousel/dist/carousel.css'
    import { Carousel, Navigation, Slide } from "vue3-carousel";

    export default
    {
        name: "AdSliders",
        components: { Carousel, Slide, Navigation },
        data()
        {
            return {
                AdBanners:
                [
                    { resource_id: 10000000, image: "./assets/images/sliders/1.jpg", desc: "Something" },
                    { resource_id: 20000000, image: "./assets/images/sliders/2.jpg", desc: "Something" },
                    { resource_id: 30000000, image: "./assets/images/sliders/3.jpg", desc: "Something" },
                ],
            }
        }
    }
</script>

<style scoped>

</style>