<template>

    <!-- Begin contents -->
    <div class="">
        <swiper :slides-per-view="1" :speed="1000" :loop="true" :autoplay="{ autoplay: true, delay: 5000 }" :pagination="{ clickable: true }" navigation class="">
            <swiper-slide v-for="slider in sliders.data" :key="slider.attributes.resource_id">
                <div class="swiper-container">
                    <router-link :to="{ name: 'Item', params: { item: slider.attributes.product_id }}" target="_blank">
                        <img :src="slider.attributes.image" alt="" class="border-none">
                    </router-link>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <!-- End contents -->

</template>

<script>
    import { onBeforeMount, reactive } from "vue";
    import { useRoute } from "vue-router";
    import axios from "axios";

    import 'swiper/swiper.scss';
    import 'swiper/components/navigation/navigation.scss';
    import 'swiper/components/pagination/pagination.scss';
    import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use( [ Navigation, Pagination, Autoplay ] );

    export default
    {
        name: "BannerSliders",
        components: { Swiper, SwiperSlide },
        setup()
        {
            const route = useRoute()

            const sliders = reactive({ data: [], loaded: false })

            const getSliders = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'business/stores/' + route.params.resource_id + '/sliders' })
                    const data = await response.data
                    sliders.data = data.data
                    sliders.loaded = true
                }
                catch( err )
                {
                    sliders.loaded = false
                }
            }

            onBeforeMount(async () =>
            {
                await getSliders()
            })

            return { sliders }
        }
    }
</script>

<style scoped>

</style>