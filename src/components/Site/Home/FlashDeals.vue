<template>

    <!-- Begin contents -->
    <div class="2xl:p-4 xl:p-4 lg:p-4 md:px-1.5 sm:px-1.5 xs:px-1.5 md:mx-1.5 sm:mx-1.5 xs:mx-1.5 bg-white rounded 2xl:mb-5 xl:mb-5 lg:mb-5 mb-3">

        <!-- Begin header -->
        <div class="mb-3 py-2">
            <router-link to="/campaigns/flash-deals" class="flex justify-between items-center">
                <div class="font-black 2xl:text-xl xl:text-xl md:text-xl text-lg text-gray-700 flex items-center hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="currentColor"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" /></svg>
                    <h3 class="">Flash Deals</h3>
                </div>
                <div class="text-xs hover:text-red-600">VIEW MORE</div>
            </router-link>
        </div>
        <!-- End header -->

        <!-- Begin items content -->
        <div class="">

            <!-- Begin item for 2xl screens -->
            <div class="2xl:block xl:hidden lg:hidden md:hidden sm:hidden xs:hidden text-justify">
                <swiper :slides-per-view="8" :loop="true" :space-between="10" :autoplay="{ autoplay: true }">
                    <swiper-slide v-for="( item, index ) in items.data" :key="index">
                        <div class="card bg-white overflow-hidden mx-0.5">
                            <router-link to="/campaigns/flash-deals">

                                <!-- Begin image -->
                                <div :to="{ name: 'Item', params: { item: item.product.resource_id }}">
                                    <img :src="item.product.image" :alt="item.product.name" class="rounded border mb-4">
                                </div>
                                <!-- End image -->

                                <!-- Begin pricing -->
                                <div class="">
                                    <div class="font-bold text-xs my-0.5">
                                        <div class="flex items-center justify-between w-full object-cover text-gray-700 hover:text-red-500">
                                            <span>{{ item.product.pricing.price_data[0].sales_price }}</span>
                                            <p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-{{ item.product.pricing.price_data[0].discount_percentage }}</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- End pricing -->

                                <!-- Begin counter -->
                                <div class="block text-xxs flex justify-between mt-2 text-green-800">
                                    <p class="">Ends in:</p>
                                    <p class="">{{ item.attributes.promo_end }}</p>
                                </div>
                                <!-- End counter -->

                            </router-link>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- End item for 2xl screens -->

            <!-- Begin item for xl screens -->
            <div class="2xl:hidden xl:block lg:hidden md:hidden sm:hidden xs:hidden text-justify">
                <swiper :slides-per-view="7" :loop="true" :space-between="10" :autoplay="{ autoplay: true }">
                    <swiper-slide v-for="( item, index ) in items.data" :key="index">
                        <div class="card bg-white overflow-hidden mx-0.5">
                            <router-link to="/campaigns/flash-deals">

                                <!-- Begin image -->
                                <div :to="{ name: 'Item', params: { item: item.product.resource_id }}">
                                    <img :src="item.product.image" :alt="item.product.name" class="rounded border mb-4">
                                </div>
                                <!-- End image -->

                                <!-- Begin pricing -->
                                <div class="">
                                    <div class="font-bold text-xs my-0.5">
                                        <div class="flex items-center justify-between w-full object-cover text-gray-700 hover:text-red-500">
                                            <span>{{ item.product.pricing.price_data[0].sales_price }}</span>
                                            <p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-{{ item.product.pricing.price_data[0].discount_percentage }}</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- End pricing -->

                                <!-- Begin counter -->
                                <div class="block text-xxs flex justify-between mt-2 text-green-800">
                                    <p class="">Ends in:</p>
                                    <p class="">{{ item.attributes.promo_end }}</p>
                                </div>
                                <!-- End counter -->

                            </router-link>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- End item for xl screens -->

            <!-- Begin item for lg screens -->
            <div class="2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden text-justify">
                <swiper :slides-per-view="6" :loop="true" :space-between="10" :autoplay="{ autoplay: true }">
                    <swiper-slide v-for="( item, index ) in items.data" :key="index">
                        <div class="card bg-white overflow-hidden mx-0.5">
                            <router-link to="/campaigns/flash-deals">

                                <!-- Begin image -->
                                <div :to="{ name: 'Item', params: { item: item.product.resource_id }}">
                                    <img :src="item.product.image" :alt="item.product.name" class="rounded border mb-4">
                                </div>
                                <!-- End image -->

                                <!-- Begin pricing -->
                                <div class="">
                                    <div class="font-bold text-xs my-0.5">
                                        <div class="flex items-center justify-between w-full object-cover text-gray-700 hover:text-red-500">
                                            <span>{{ item.product.pricing.price_data[0].sales_price }}</span>
                                            <p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-{{ item.product.pricing.price_data[0].discount_percentage }}</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- End pricing -->

                                <!-- Begin counter -->
                                <div class="block text-xxs flex justify-between mt-2 text-green-800">
                                    <p class="">Ends in:</p>
                                    <p class="">{{ item.attributes.promo_end }}</p>
                                </div>
                                <!-- End counter -->

                            </router-link>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- End item for lg screens -->

            <!-- Begin item for mobile screens -->
            <div class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block text-justify">
                <swiper :slides-per-view="4" :loop="true" :space-between="5" :autoplay="{ autoplay: true }" class="md:block sm:hidden xs:hidden">
                    <swiper-slide v-for="( item, index ) in items.data" :key="index" class="mb-2">
                        <router-link to="/campaigns/flash-deals">

                            <!-- Begin image -->
                            <div class=""><img :src="item.product.image" alt="" class="rounded border mb-2"></div>
                            <!-- End image -->

                            <!-- Begin pricing -->
                            <div class="text-center text-xs font-black">
                                <div class="w-full object-cover text-gray-700 hover:text-red-500">
                                    <span>{{ item.product.pricing.price_data[0].sales_price }}</span>
                                </div>
                            </div>
                            <!-- End pricing -->

                        </router-link>
                    </swiper-slide>
                </swiper>
                <swiper :slides-per-view="3" :loop="true" :space-between="5" :autoplay="{ autoplay: true }" class="md:hidden sm:block xs:block">
                    <swiper-slide v-for="( item, index ) in items.data" :key="index" class="mb-2">
                        <router-link to="/campaigns/flash-deals">

                            <!-- Begin image -->
                            <div class=""><img :src="item.product.image" alt="" class="rounded border mb-2"></div>
                            <!-- End image -->

                            <!-- Begin pricing -->
                            <div class="text-center text-xs font-black">
                                <div class="w-full object-cover text-gray-700 hover:text-red-500">
                                    <span>{{ item.product.pricing.price_data[0].sales_price }}</span>
                                </div>
                            </div>
                            <!-- End pricing -->

                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- End item for mobile screens -->

        </div>
        <!-- End items content -->

    </div>
    <!-- End contents -->

</template>

<script>
    import { onBeforeMount, reactive, ref } from "vue";
    import axios from "axios";

    import SwiperCore, { Autoplay, Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/swiper.scss';
    SwiperCore.use( [ Autoplay, Navigation ] );

    export default
    {
        name: "QuickDeals",
        components: { Swiper, SwiperSlide },

        setup()
        {
            const items = reactive({ data: [] })
            const error = ref(null )

            const getFlashDeals = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/campaigns/flash-deals/hot-deals' });
                    items.data = await response.data.data.data
                }
                catch (e)
                {
                    error.value = e
                }
            }

            onBeforeMount(async () =>
            {
                await getFlashDeals()
            })

            return { items, error }
        }
    }
</script>

<style scoped>
</style>