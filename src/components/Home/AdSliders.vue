<template>

    <!-- Begin contents -->
    <swiper :slides-per-view="1" :autoplay="{ autoplay: true }" :pagination="{ clickable: true }" class="rounded">
        <swiper-slide v-for="banner in AdBanners" :key="banner.resource_id">
            <div class="swiper-container"><router-link to="/"><img v-bind:src="banner.image" :alt="banner.desc" class="rounded border-none"></router-link></div>
        </swiper-slide>
    </swiper>
    <!-- End contents -->

</template>

<script>
    import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import 'swiper/swiper.scss';
    import 'swiper/components/navigation/navigation.scss';
    import 'swiper/components/pagination/pagination.scss';

    SwiperCore.use( [ Navigation, Pagination, Autoplay ] );

    export default
    {
        name: "AdSliders",
        components: { Swiper, SwiperSlide },
        data()
        {
            return {
                AdBanners:
                [
                    { resource_id: 10000000, image: "./assets/images/sliders/1.jpg", desc: "Something" },
                    { resource_id: 20000000, image: "./assets/images/sliders/2.jpg", desc: "Something" },
                    { resource_id: 11000000, image: "./assets/images/sliders/1.jpg", desc: "Something" },
                    { resource_id: 30000000, image: "./assets/images/sliders/3.jpg", desc: "Something" },
                    { resource_id: 21000000, image: "./assets/images/sliders/2.jpg", desc: "Something" },
                ],
            }
        },
    }
</script>

<style scoped>
</style>