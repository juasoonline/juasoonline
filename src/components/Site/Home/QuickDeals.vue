<template>

    <!-- Begin contents -->
    <div class="2xl:p-4 xl:p-4 lg:p-4 md:px-1.5 sm:px-1.5 xs:px-1.5 md:mx-1.5 sm:mx-1.5 xs:mx-1.5 bg-white rounded">

        <!-- Begin header -->
        <div class="mb-3 pt-2">
            <router-link to="" class="flex justify-between items-center">
                <div class="font-black text-xl text-gray-700 flex items-center hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="currentColor"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" /></svg>
                    <span>Flash Deals</span>
                </div>
                <div class="text-xs hover:text-red-600">VIEW MORE</div>
            </router-link>
        </div>
        <!-- End header -->

        <!-- Begin items content -->
        <div class="">

            <!-- Begin item for 2xl screens -->
            <div class="2xl:block xl:hidden lg:hidden md:hidden sm:hidden xs:hidden text-justify">
                <swiper :slides-per-view="7" :loop="true" :space-between="10" :autoplay="{ autoplay: true }">
                    <swiper-slide v-for="( item ) in items.data" :key="item.attributes.resource_id">
                        <div class="card bg-white overflow-hidden mx-0.5">

                            <!-- Begin image -->
                            <router-link :to="{ name: 'Item', params: { item: item.product.attributes.resource_id }}">
                                <img :src="item.product.attributes.image" :alt="item.product.attributes.name" class="rounded border mb-4">
                            </router-link>
                            <!-- End image -->

                            <!-- Begin pricing -->
                            <div class="">
                                <div v-if="item.product.pricing.priced === 'Product'" class="font-bold text-xs my-0.5">
                                    <div class="flex items-center justify-between w-full object-cover text-gray-700 hover:text-red-500">
                                        <span>{{ item.product.pricing.price_data[0].sales_price }}</span>
                                        <p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-15%</p>
                                    </div>
                                </div>
                                <div v-else class="font-bold block text-xs my-0.5">
                                <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.product.attributes.resource_id } }">
                                    {{ item.product.pricing.price_data[0].price_range }}
                                </router-link>
                            </div>
                            </div>
                            <!-- End pricing -->

                            <!-- Begin counter -->
                            <div class="block text-xxs flex justify-between mt-2 text-green-800">
                                <p class="">Deal Ends:</p>
                                <p class="">{{ item.attributes.promo_end }}</p>
                            </div>
                            <!-- End counter -->

                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- End item for 2xl screens -->

            <!-- Begin item for xl screens -->
            <div class="2xl:hidden xl:block lg:hidden md:hidden sm:hidden xs:hidden text-justify">
                <swiper :slides-per-view="6" :loop="true" :space-between="10" :autoplay="{ autoplay: true }">
                    <swiper-slide v-for="( item ) in items.data" :key="item.attributes.resource_id">

                        <!-- Begin image -->
                        <router-link :to="{ name: 'Item', params: { item: item.product.attributes.resource_id }}">
                            <img :src="item.product.attributes.image" :alt="item.product.attributes.name" class="rounded border mb-4">
                        </router-link>
                        <!-- End image -->

                        <!-- Begin pricing -->
                        <div class="">
                            <div v-if="item.product.pricing.priced === 'Product'" class="font-bold text-xs my-0.5">
                                <div class="flex items-center justify-between w-full object-cover text-gray-700 hover:text-red-500">
                                    <span>{{ item.product.pricing.price_data[0].sales_price }}</span>
                                    <p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-15%</p>
                                </div>
                            </div>
                            <div v-else class="font-bold block text-xs my-0.5">
                                <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.product.attributes.resource_id } }">
                                    {{ item.product.pricing.price_data[0].price_range }}
                                </router-link>
                            </div>
                        </div>
                        <!-- End pricing -->

                        <!-- Begin counter -->
                        <div class="block text-xxs flex justify-between mt-2 text-green-800">
                            <p class="">Deal Ends:</p>
                            <p class="">{{ item.attributes.promo_end }}</p>
                        </div>
                        <!-- End counter -->

                    </swiper-slide>
                </swiper>
            </div>
            <!-- End item for xl screens -->

            <!-- Begin item for lg screens -->
            <div class="2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden text-justify">
                <swiper :slides-per-view="5" :loop="true" :space-between="10" :autoplay="{ autoplay: true }">
                    <swiper-slide v-for="( item ) in items.data" :key="item.attributes.resource_id">

                        <!-- Begin image -->
                        <router-link :to="{ name: 'Item', params: { item: item.product.attributes.resource_id }}">
                            <img :src="item.product.attributes.image" :alt="item.product.attributes.name" class="rounded border mb-4">
                        </router-link>
                        <!-- End image -->

                        <!-- Begin pricing -->
                        <div class="">
                            <div v-if="item.product.pricing.priced === 'Product'" class="font-bold text-xs my-0.5">
                                <div class="flex items-center justify-between w-full object-cover text-gray-700 hover:text-red-500">
                                    <span>{{ item.product.pricing.price_data[0].sales_price }}</span>
                                    <p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-15%</p>
                                </div>
                            </div>
                            <div v-else class="font-bold block text-xs my-0.5">
                                <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.product.attributes.resource_id } }">
                                    {{ item.product.pricing.price_data[0].price_range }}
                                </router-link>
                            </div>
                        </div>
                        <!-- End pricing -->

                        <!-- Begin counter -->
                        <div class="block text-xxs flex justify-between mt-2 text-green-800">
                            <p class="">Deal Ends:</p>
                            <p class="">{{ item.attributes.promo_end }}</p>
                        </div>
                        <!-- End counter -->

                    </swiper-slide>
                </swiper>
            </div>
            <!-- End item for lg screens -->

            <!-- Begin item list -->
            <div class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block text-justify">
                <swiper :slides-per-view="3" :loop="true" :space-between="5" :autoplay="{ autoplay: true }">
                    <swiper-slide v-for="( item ) in items.data" :key="item.attributes.resource_id">

                        <!-- Begin image -->
                        <router-link :to="{ name: 'Item', params: { item: item.product.attributes.resource_id }}">
                            <img :src="item.product.attributes.image" :alt="item.product.attributes.name" class="rounded border mb-4">
                        </router-link>
                        <!-- End image -->

                        <!-- Begin pricing -->
                        <div class="">
                            <div v-if="item.product.pricing.priced === 'Product'" class="font-bold text-xs my-0.5">
                                <div class="flex items-center justify-between w-full object-cover text-gray-700 hover:text-red-500">
                                    <span>{{ item.product.pricing.price_data[0].sales_price }}</span>
                                    <p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-15%</p>
                                </div>
                            </div>
                            <div v-else class="font-bold block text-xs my-0.5">
                                <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.product.attributes.resource_id } }">
                                    {{ item.product.pricing.price_data[0].price_range }}
                                </router-link>
                            </div>
                        </div>
                        <!-- End pricing -->

                        <!-- Begin counter -->
                        <div class="block text-xxs flex justify-between mt-2 text-green-800">
                            <p class="">Deal Ends:</p>
                            <p class="">{{ item.attributes.promo_end }}</p>
                        </div>
                        <!-- End counter -->

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

            const getItems = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'business/ads/quick-deals' });
                    items.data = await response.data.data
                }
                catch (e)
                {
                    error.value = e
                }
            }

            onBeforeMount(async () =>
            {
                await getItems()
            })

            return { items, error }
        }
    }
</script>

<style scoped>

</style>