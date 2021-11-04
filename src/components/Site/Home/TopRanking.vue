<template>

    <!-- Begin contents -->
    <div class="2xl:mt-2 xl:mt-3 lg:mt-3.5 bg-white rounded p-2">

        <!-- Begin header -->
        <div class="2xl:mb-2 xl:mb-2 lg:mb-2.5 flex justify-between items-center text-gray-600">
            <h3 class="font-bold">Top Rankings</h3>
            <p class="text-sm"><router-link to="#">VIEW MORE</router-link></p>
        </div>
        <!-- End header -->

        <!-- Begin ranks for 2xl and lg screens -->
        <swiper :slides-per-view="8" :space-between="5" :autoplay="{ autoplay: true }" class="rounded 2xl:block xl:hidden lg:hidden">
            <swiper-slide v-for="( rankings ) in rankings.ranks" :key="rankings.attributes.resource_id" class="rounded">
                <div class="card bg-white overflow-hidden border border-gray-100 text-center rounded">
                    <div class="border-b border-gray-100"><img :src="rankings.attributes.image" :alt="rankings.attributes.name" class="rounded-t"></div>
                    <div class="flex items-center justify-between p-1">
                        <p class="block text-xs my-0.5 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                            <span>{{ rankings.attributes.average_rating }}</span>
                        </p>
                        <span class="text-xs text-gray-500">{{ rankings.attributes.total_sold }} Sold</span>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <!-- End ranks for 2xl and lg screens -->

        <!-- Begin ranks for md screens -->
        <swiper :slides-per-view="6" :space-between="5" :autoplay="{ autoplay: true }" class="rounded 2xl:hidden xl:block lg:hidden">
            <swiper-slide v-for="( rankings ) in rankings.ranks" :key="rankings.attributes.resource_id" class="rounded">
                <div class="card bg-white overflow-hidden border border-gray-100 text-center rounded">
                    <div class="border-b border-gray-100"><img :src="rankings.attributes.image" :alt="rankings.attributes.name" class="rounded-t"></div>
                    <div class="flex items-center justify-between p-1">
                        <p class="block text-xs my-0.5 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                            <span>{{ rankings.attributes.average_rating }}</span>
                        </p>
                        <span class="text-xs text-gray-500">{{ rankings.attributes.total_sold }} Sold</span>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <!-- End ranks for md screens -->

        <!-- Begin ranks for md screens -->
        <swiper :slides-per-view="7" :space-between="5" :autoplay="{ autoplay: true }" class="rounded 2xl:hidden xl:hidden lg:block lg:my-2.5">
            <swiper-slide v-for="( rankings ) in rankings.ranks" :key="rankings.attributes.resource_id" class="rounded">
                <div class="card bg-white overflow-hidden border border-gray-100 text-center rounded">
                    <div class="border-b border-gray-100"><img :src="rankings.attributes.image" :alt="rankings.attributes.name" class="rounded-t"></div>
                    <div class="flex items-center justify-between p-1">
                        <p class="block text-xs my-0.5 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                            <span>{{ rankings.attributes.average_rating }}</span>
                        </p>
                        <span class="text-xs text-gray-500">{{ rankings.attributes.total_sold }} Sold</span>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <!-- End ranks for md screens -->

    </div>
    <!-- End contents -->

</template>

<script>
    import SwiperCore, { Autoplay, Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import 'swiper/swiper.scss';
    import {onBeforeMount, reactive} from "vue";
    import axios from "axios";

    SwiperCore.use( [ Autoplay, Navigation ] );

    export default
    {
        name: "TopRanking",
        components: { Swiper, SwiperSlide },
        setup ()
        {
            const rankings = reactive({ ranks: [], loaded: false })

            const getTopRankings = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'business/products/rankings/top-ranking' })
                    const data = await response.data
                    rankings.ranks = data.data
                    rankings.loaded = true
                }
                catch( err )
                {
                    rankings.loaded = false
                }
            }

            onBeforeMount(async () =>
            {
                await getTopRankings()
            })

            return { rankings }
        }
    }
</script>

<style scoped>
</style>