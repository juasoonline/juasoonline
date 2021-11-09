<template>

    <!-- Begin contents -->
    <div class="2xl:mt-2 xl:mt-3 lg:mt-3.5 bg-white rounded px-2 overflow-hidden">

        <!-- Begin header -->
        <div class="2xl:mb-2 xl:mb-2 lg:mb-2.5 flex justify-between items-center text-gray-600 pt-2">
            <h3 class="font-bold">Top Rankings</h3>
            <p class="text-sm"><router-link to="#">VIEW MORE</router-link></p>
        </div>
        <!-- End header -->

        <!-- Begin ranks for 2xl and lg screens -->
        <swiper :slides-per-view="8" :loop="true" :space-between="5" :autoplay="{ autoplay: true }" class="rounded 2xl:block xl:hidden lg:hidden">
            <swiper-slide v-for="( rankings ) in rankings.ranks" :key="rankings.attributes.resource_id" class="rounded">
                <div class="card bg-white overflow-hidden border border-gray-100 text-center rounded">
                    <div class="border-b border-gray-100"><img :src="rankings.attributes.image" :alt="rankings.attributes.name" class="rounded-t"></div>
                    <div class="font-bold block text-xxs p-1">
                        <p v-if="rankings.pricing.priced === 'Product'" class="my-0.5">
                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: rankings.attributes.resource_id } }">
                                {{ rankings.pricing.price_data[0].sales_price }}
                            </router-link>
                        </p>
                        <p v-else class="my-0.5">
                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: rankings.attributes.resource_id } }">
                                {{ rankings.pricing.price_data[0].sales_price }}
                            </router-link>
                        </p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <!-- End ranks for 2xl and lg screens -->

        <!-- Begin ranks for md screens -->
        <swiper :slides-per-view="6" :loop="true" :space-between="5" :autoplay="{ autoplay: true }" class="rounded 2xl:hidden xl:block lg:hidden">
            <swiper-slide v-for="( rankings ) in rankings.ranks" :key="rankings.attributes.resource_id" class="rounded">
                <div class="card bg-white overflow-hidden border border-gray-100 text-center rounded">
                    <div class="border-b border-gray-100"><img :src="rankings.attributes.image" :alt="rankings.attributes.name" class="rounded-t"></div>
                    <div class="font-bold block text-xxs p-1">
                        <p v-if="rankings.pricing.priced === 'Product'" class="my-0.5">
                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: rankings.attributes.resource_id } }">
                                {{ rankings.pricing.price_data[0].sales_price }}
                            </router-link>
                        </p>
                        <p v-else class="my-0.5">
                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: rankings.attributes.resource_id } }">
                                {{ rankings.pricing.price_data[0].sales_price }}
                            </router-link>
                        </p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <!-- End ranks for md screens -->

        <!-- Begin ranks for md screens -->
        <swiper :slides-per-view="7" :loop="true" :space-between="5" :autoplay="{ autoplay: true }" class="rounded 2xl:hidden xl:hidden lg:block lg:my-2.5">
            <swiper-slide v-for="( rankings ) in rankings.ranks" :key="rankings.attributes.resource_id" class="rounded">
                <div class="card bg-white overflow-hidden border border-gray-100 text-center rounded">
                    <div class="border-b border-gray-100"><img :src="rankings.attributes.image" :alt="rankings.attributes.name" class="rounded-t"></div>
                    <div class="font-bold block text-xxs p-1">
                        <p v-if="rankings.pricing.priced === 'Product'" class="my-0.5">
                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: rankings.attributes.resource_id } }">
                                {{ rankings.pricing.price_data[0].sales_price }}
                            </router-link>
                        </p>
                        <p v-else class="my-0.5">
                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: rankings.attributes.resource_id } }">
                                {{ rankings.pricing.price_data[0].sales_price }}
                            </router-link>
                        </p>
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