<template>

    <!-- Begin contents -->
    <div class="2xl:p-4 xl:p-4 lg:p-4 md:px-1.5 sm:px-1.5 xs:px-1.5 md:mx-1.5 sm:mx-1.5 xs:mx-1.5 bg-white rounded">

        <!-- Begin header -->
        <div class="flex justify-between items-center mb-3 pt-2">
            <div class="font-bold">Quick Deals</div>
            <div class="text-xs"><router-link to="">View More</router-link></div>
        </div>
        <!-- End header -->

        <!-- Begin error message -->
        <div v-if="error">{{ error.errors }}</div>
        <!-- End error message -->

        <!-- Begin items content -->
        <div v-else>
            
            <!-- Begin item for 2xl screens -->
            <div class="2xl:block xl:hidden lg:hidden md:hidden sm:hidden xs:hidden text-justify">
                <swiper :slides-per-view="7" :space-between="10" :autoplay="{ autoplay: true }">
                    <swiper-slide v-for="item in items.data" :key="item.product.resource_id">
                        <div class="card bg-white overflow-hidden text-center mx-0.5">
                            <router-link :to="{ name: 'Item', params: { item: item.product.resource_id }}">
                                <img v-bind:src="item.product.image" :alt="item.product.name" class="rounded border mb-4">
                            </router-link>
                            <div class="font-bold block text-xs flex justify-between">
                                <router-link class="text-xs text-gray-600" :to="{ name: 'Item', params: { item: item.product.resource_id }}"> {{ item.product.pricing.price_data[0].sales_price }}</router-link>
                                <p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-15%</p>
                            </div>
                            <div class="block text-xxs flex justify-between mt-2 text-green-800">
                                <p class="">Deal Ends:</p>
                                <p class="">{{ item.attributes.promo_end }}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- End item for 2xl screens -->

            <!-- Begin item for xl screens -->
            <div class="2xl:hidden xl:block lg:hidden md:hidden sm:hidden xs:hidden text-justify">
                <swiper :slides-per-view="6" :space-between="10" :autoplay="{ autoplay: true }">
                    <swiper-slide v-for="item in items.data" :key="item.product.resource_id">
                        <div class="card bg-white overflow-hidden text-center mx-0.5">
                            <router-link :to="{ name: 'Item', params: { item: item.product.resource_id }}">
                                <img v-bind:src="item.product.image" :alt="item.product.name" class="rounded border mb-4">
                            </router-link>
                            <div class="font-bold block text-xs flex justify-between">
                                <router-link class="text-xs text-gray-600" :to="{ name: 'Item', params: { item: item.product.resource_id }}"> {{ item.product.pricing.price_data[0].sales_price }}</router-link>
                                <p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-15%</p>
                            </div>
                            <div class="block text-xxs flex justify-between mt-2 text-green-800">
                                <p class="">Deal Ends:</p>
                                <p class="">{{ item.attributes.promo_end }}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- End item for xl screens -->

            <!-- Begin item for lg screens -->
            <div class="2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden text-justify">
                <swiper :slides-per-view="5" :space-between="10" :autoplay="{ autoplay: true }">
                    <swiper-slide v-for="item in items.data" :key="item.product.resource_id">
                        <div class="card bg-white overflow-hidden text-center mx-0.5">
                            <router-link :to="{ name: 'Item', params: { item: item.product.resource_id }}">
                                <img v-bind:src="item.product.image" :alt="item.product.name" class="rounded border mb-4">
                            </router-link>
                            <div class="font-bold block text-xs flex justify-between">
                                <router-link class="text-xs text-gray-600" :to="{ name: 'Item', params: { item: item.product.resource_id }}"> {{ item.product.pricing.price_data[0].sales_price }}</router-link>
                                <p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-15%</p>
                            </div>
                            <div class="block text-xxs flex justify-between mt-2 text-green-800">
                                <p class="">Deal Ends:</p>
                                <p class="">{{ item.attributes.promo_end }}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- End item for lg screens -->

            <!-- Begin item list -->
            <div class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block text-justify">
                <swiper :slides-per-view="3" :space-between="5" :autoplay="{ autoplay: true }">
                    <swiper-slide v-for="item in items.data" :key="item.product.resource_id">
                        <div class="card bg-white overflow-hidden text-center pb-3 relative">
                            <router-link :to="{ name: 'Item', params: { item: item.product.resource_id }}" class="">
                                <img v-bind:src="item.product.image" :alt="item.product.name" class="rounded border">
                            </router-link>
                            <div class="font-bold block">
                                <router-link class="text-xxs text-red-600 font-bold" :to="{ name: 'Item', params: { item: item.product.resource_id }}"> {{ item.product.pricing.price_data[0].sales_price }}</router-link>
                                <p class="font-light text-xxs leading-none p-0">398 Sold</p>
                            </div>
                            <div class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 absolute top-0 my-1.5 mx-2.5"><span>-2%</span></div>
                            <div class="block text-xxxs mt-1 text-green-800">
                                <p class="">Ends in: {{ item.attributes.promo_end }}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- End item list -->

        </div>
        <!-- End items content -->

    </div>
    <!-- End contents -->

</template>

<script>
    import axios from "axios"
    import SwiperCore, { Autoplay, Navigation } from 'swiper'
    import 'swiper/swiper.scss'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { reactive, ref } from "vue"

    SwiperCore.use( [ Autoplay, Navigation ] )

    export default
    {
        name: "QuickDeals",
        components: { Swiper, SwiperSlide },

        async setup()
        {
            const items = reactive({ data: [] })
            const error = ref(null )
          
            try
            {
                const response = await axios({ method: 'GET', url: 'juaso/campaigns/flash-deals/hot-deals' });
                items.data = await response.data.data.data
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
