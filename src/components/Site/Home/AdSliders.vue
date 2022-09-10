<template>

    <!-- Begin contents -->
    <div class="">
        <div class="">

            <!-- Begin sliders -->
            <swiper :slides-per-view="1" :speed="1000" :loop="true" :autoplay="{ autoplay: true, delay: 5000 }" :pagination="{ clickable: true }" class="rounded">
                <swiper-slide v-for="slider in items.data" :key="slider.attributes.resource_id">
                    <div class="swiper-container">
                        <router-link to="">
                            <img :src="slider.attributes.image" alt="" class="rounded border-none">
                        </router-link>
                    </div>
                </swiper-slide>
            </swiper>
            <!-- End sliders -->

        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    import { reactive, ref } from "vue";
    import axios from "axios";

    import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use( [ Navigation, Pagination, Autoplay ] );

    import 'swiper/swiper.scss';
    import 'swiper/components/navigation/navigation.scss';
    import 'swiper/components/pagination/pagination.scss';

    export default
    {
        name: "AdSliders",
        components: { Swiper, SwiperSlide },

        async setup()
        {
            const items = reactive({ data: [] })
            const error = ref(null )

            try
            {
                const response = await axios({ method: 'GET', url: 'juaso/sliders' });
                items.data = await response.data.data
            }
            catch (e)
            {
                error.value = e
            }

            return { items, error }
        }
    }
</script>

<style scoped>
</style>