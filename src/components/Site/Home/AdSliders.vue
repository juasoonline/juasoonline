<template>

    <!-- Begin contents -->
    <div>
        <!-- Begin error message -->
        <div v-if="error">{{ error.errors }}</div>
        <!-- End error message -->

        <div v-else>
            <swiper :slides-per-view="1" :speed="1000" :autoplay="{ autoplay: true, delay: 5000 }" :pagination="{ clickable: true }" class="rounded">
                <swiper-slide v-for="slider in items.data" :key="slider.attributes.resource_id">
                    <div class="swiper-container">
                        <router-link to="/store/1234567890">
                            <img :src="slider.attributes.image" alt="" class="rounded border-none">
                        </router-link>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import 'swiper/swiper.scss';
    import 'swiper/components/navigation/navigation.scss';
    import 'swiper/components/pagination/pagination.scss';
    import { reactive, ref } from "vue";
    import axios from "axios";

    SwiperCore.use( [ Navigation, Pagination, Autoplay ] );

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
                const response = await axios({ method: 'GET', url: 'juaso/stores/ads' });
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