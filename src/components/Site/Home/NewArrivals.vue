<template>

    <!-- Begin content for large screens -->
    <div class="bg-white rounded p-5 mb-5 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">

        <!-- Begin header -->
        <div class="mb-3 py-2">
            <router-link to="/campaigns/new-arrivals" class="flex justify-between items-center">
                <div class="font-black 2xl:text-xl xl:text-xl md:text-xl text-lg text-gray-700 flex items-center hover:text-gray-600">
                    <span>New Arrivals</span>
                </div>
                <div class="text-xs hover:text-red-600">VIEW MORE</div>
            </router-link>
        </div>
        <!-- End header -->

        <!-- Begin item for 2xl screens -->
        <div class="2xl:block xl:hidden lg:hidden md:hidden sm:hidden xs:hidden text-justify">
            <div class="flex grid 2xl:grid-cols-8 gap-3 pb-2">
                <div v-for="( item ) in items.data.slice( 0, 8 )" :key="item.attributes.resource_id">
                    <div class="card bg-white overflow-hidden mx-0.5">

                        <!-- Begin image -->
                        <router-link to="/campaigns/new-arrivals">
                            <img :src="item.attributes.image" :alt="item.attributes.name" class="rounded border mb-4">
                        </router-link>
                        <!-- End image -->

                        <!-- Begin pricing -->
                        <div class="">
                            <div class="font-bold text-xs my-0.5">
                                <div class="flex items-center justify-between w-full object-cover text-gray-700 hover:text-red-500">
                                    <span>{{ item.pricing.price_data[0].sales_price }}</span>
                                    <del class="font-light text-xxxs text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{{ item.pricing.price_data[0].price }}</del>
                                </div>
                            </div>
                        </div>
                        <!-- End pricing -->

                        <!-- Begin seller -->
                        <div class="text-xxs">
                            <router-link class="text-gray-700 hover:text-gray-500" :to="{ name: 'Store', params: { resource_id: item.store.resource_id } }">
                                <div class="flex items-center">
                                    <svg class="w-2.5 h-2.5 mr-1 text-gray-500" fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg"><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Rounded" transform="translate(-613.000000, -3170.000000)"><g id="Maps" transform="translate(100.000000, 3068.000000)"><g id="-Round-/-Maps-/-store_mall_directory" transform="translate(510.000000, 98.000000)"><g><polygon id="Path" points="0 0 24 0 24 24 0 24"/><path d="M20.16,7.8 C20.07,7.34 19.66,7 19.18,7 L4.82,7 C4.34,7 3.93,7.34 3.84,7.8 L3,12 L3,13 C3,13.55 3.45,14 4,14 L4,19 C4,19.55 4.45,20 5,20 L13,20 C13.55,20 14,19.55 14,19 L14,14 L18,14 L18,19 C18,19.55 18.45,20 19,20 C19.55,20 20,19.55 20,19 L20,14 C20.55,14 21,13.55 21,13 L21,12 L20.16,7.8 Z M12,18 L6,18 L6,14 L12,14 L12,18 Z M5,6 L19,6 C19.55,6 20,5.55 20,5 C20,4.45 19.55,4 19,4 L5,4 C4.45,4 4,4.45 4,5 C4,5.55 4.45,6 5,6 Z" id="🔹-Icon-Color" fill="#1D1D1D"/></g></g></g></g></g></svg>
                                    <span>{{ item.store.name }}</span>
                                </div>
                            </router-link>
                        </div>
                        <!-- End seller -->

                    </div>
                </div>
            </div>
        </div>
        <!-- End item for 2xl screens -->

        <!-- Begin item for xl screens -->
        <div class="2xl:hidden xl:block lg:hidden md:hidden sm:hidden xs:hidden text-justify">
            <div class="flex grid xl:grid-cols-7 gap-3">
                <div v-for="( item ) in items.data.slice( 0, 7 )" :key="item.attributes.resource_id">
                    <div class="card bg-white overflow-hidden mx-0.5">

                        <!-- Begin image -->
                        <router-link to="/campaigns/new-arrivals">
                            <img :src="item.attributes.image" :alt="item.attributes.name" class="rounded border mb-4">
                        </router-link>
                        <!-- End image -->

                        <!-- Begin pricing -->
                        <div class="">
                            <div class="font-bold text-xs my-0.5">
                                <div class="flex items-center justify-between w-full object-cover text-gray-700 hover:text-red-500">
                                    <span>{{ item.pricing.price_data[0].sales_price }}</span>
                                    <del class="font-light text-xxxs text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{{ item.pricing.price_data[0].price }}</del>
                                </div>
                            </div>
                        </div>
                        <!-- End pricing -->

                        <!-- Begin seller -->
                        <div class="text-xxs">
                            <router-link class="text-gray-700 hover:text-gray-500" :to="{ name: 'Store', params: { resource_id: item.store.resource_id } }">
                                <div class="flex items-center">
                                    <svg class="w-2.5 h-2.5 mr-1 text-gray-500" fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg"><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Rounded" transform="translate(-613.000000, -3170.000000)"><g id="Maps" transform="translate(100.000000, 3068.000000)"><g id="-Round-/-Maps-/-store_mall_directory" transform="translate(510.000000, 98.000000)"><g><polygon id="Path" points="0 0 24 0 24 24 0 24"/><path d="M20.16,7.8 C20.07,7.34 19.66,7 19.18,7 L4.82,7 C4.34,7 3.93,7.34 3.84,7.8 L3,12 L3,13 C3,13.55 3.45,14 4,14 L4,19 C4,19.55 4.45,20 5,20 L13,20 C13.55,20 14,19.55 14,19 L14,14 L18,14 L18,19 C18,19.55 18.45,20 19,20 C19.55,20 20,19.55 20,19 L20,14 C20.55,14 21,13.55 21,13 L21,12 L20.16,7.8 Z M12,18 L6,18 L6,14 L12,14 L12,18 Z M5,6 L19,6 C19.55,6 20,5.55 20,5 C20,4.45 19.55,4 19,4 L5,4 C4.45,4 4,4.45 4,5 C4,5.55 4.45,6 5,6 Z" id="🔹-Icon-Color" fill="#1D1D1D"/></g></g></g></g></g></svg>
                                    <span>{{ item.store.name }}</span>
                                </div>
                            </router-link>
                        </div>
                        <!-- End seller -->

                    </div>
                </div>
            </div>
        </div>
        <!-- End item for xl screens -->

        <!-- Begin item for lg screens -->
        <div class="2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden text-justify">
            <div class="flex grid lg:grid-cols-6 gap-3">
                <div v-for="( item ) in items.data.slice( 0, 6 )" :key="item.attributes.resource_id">
                    <div class="card bg-white overflow-hidden mx-0.5">

                        <!-- Begin image -->
                        <router-link to="/campaigns/new-arrivals">
                            <img :src="item.attributes.image" :alt="item.attributes.name" class="rounded border mb-4">
                        </router-link>
                        <!-- End image -->

                        <!-- Begin pricing -->
                        <div class="">
                            <div class="font-bold text-xs my-0.5">
                                <div class="flex items-center justify-between w-full object-cover text-gray-700 hover:text-red-500">
                                    <span>{{ item.pricing.price_data[0].sales_price }}</span>
                                    <del class="font-light text-xxxs text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{{ item.pricing.price_data[0].price }}</del>
                                </div>
                            </div>
                        </div>
                        <!-- End pricing -->

                        <!-- Begin seller -->
                        <div class="text-xxs">
                            <router-link class="text-gray-700 hover:text-gray-500" :to="{ name: 'Store', params: { resource_id: item.store.resource_id } }">
                                <div class="flex items-center">
                                    <svg class="w-2.5 h-2.5 mr-1 text-gray-500" fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg"><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Rounded" transform="translate(-613.000000, -3170.000000)"><g id="Maps" transform="translate(100.000000, 3068.000000)"><g id="-Round-/-Maps-/-store_mall_directory" transform="translate(510.000000, 98.000000)"><g><polygon id="Path" points="0 0 24 0 24 24 0 24"/><path d="M20.16,7.8 C20.07,7.34 19.66,7 19.18,7 L4.82,7 C4.34,7 3.93,7.34 3.84,7.8 L3,12 L3,13 C3,13.55 3.45,14 4,14 L4,19 C4,19.55 4.45,20 5,20 L13,20 C13.55,20 14,19.55 14,19 L14,14 L18,14 L18,19 C18,19.55 18.45,20 19,20 C19.55,20 20,19.55 20,19 L20,14 C20.55,14 21,13.55 21,13 L21,12 L20.16,7.8 Z M12,18 L6,18 L6,14 L12,14 L12,18 Z M5,6 L19,6 C19.55,6 20,5.55 20,5 C20,4.45 19.55,4 19,4 L5,4 C4.45,4 4,4.45 4,5 C4,5.55 4.45,6 5,6 Z" id="🔹-Icon-Color" fill="#1D1D1D"/></g></g></g></g></g></svg>
                                    <span>{{ item.store.name }}</span>
                                </div>
                            </router-link>
                        </div>
                        <!-- End seller -->

                    </div>
                </div>
            </div>
        </div>
        <!-- End item for lg screens -->

    </div>
    <!-- End content for large screens -->

    <!-- Begin content for small screens -->
    <div class="bg-white rounded p-2 mb-3 mx-1.5 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block">

        <!-- Begin header -->
        <div class="mb-3 pt-2">
            <router-link to="/campaigns/new-arrivals" class="flex justify-between items-center">
                <div class="font-black 2xl:text-xl xl:text-xl md:text-xl text-lg text-gray-700 flex items-center hover:text-gray-600">
                    <span>New Arrivals</span>
                </div>
                <div class="text-xs hover:text-red-600">VIEW MORE</div>
            </router-link>
        </div>
        <!-- End header -->

        <!-- Begin items -->
        <div class="">
            <swiper :slides-per-view="4" :speed="1500" :loop="true" :space-between="5" :autoplay="{ autoplay: true }" class="md:block sm:hidden xs:hidden">
                <swiper-slide v-for="( item, index ) in items.data" :key="index" class="mb-2">
                    <router-link to="/campaigns/new-arrivals">

                        <!-- Begin image -->
                        <div class=""><img :src="item.attributes.image" alt="" class="rounded border mb-4"></div>
                        <!-- End image -->

                        <!-- Begin pricing -->
                        <div class="text-center text-xs font-black">
                            <div class="">
                                <div class="w-full object-cover text-gray-700 hover:text-red-500">
                                    <span>{{ item.pricing.price_data[0].sales_price }}</span>
                                </div>
                            </div>
                        </div>
                        <!-- End pricing -->

                    </router-link>
                </swiper-slide>
            </swiper>
            <swiper :slides-per-view="3" :speed="1500" :loop="true" :space-between="5" :autoplay="{ autoplay: true }" class="md:hidden sm:block xs:block">
                <swiper-slide v-for="( item ) in items.data" :key="item.attributes.resource_id" class="mb-2">
                    <router-link to="/campaigns/new-arrivals">

                        <!-- Begin image -->
                        <div class=""><img :src="item.attributes.image" alt="" class="rounded border mb-4"></div>
                        <!-- End image -->

                        <!-- Begin pricing -->
                        <div class="text-center text-xs font-black">
                            <div class="">
                                <div class="w-full object-cover text-gray-700 hover:text-red-500">
                                    <span>{{ item.pricing.price_data[0].sales_price }}</span>
                                </div>
                            </div>
                        </div>
                        <!-- End pricing -->

                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
        <!-- End items -->

    </div>
    <!-- End content for small screens -->

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

            const getNewArrivals = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/campaigns/new-arrivals' });
                    items.data = await response.data.data.data
                }
                catch (e)
                {
                    error.value = e
                }
            }

            onBeforeMount(async () =>
            {
                await getNewArrivals()
            })

            return { items, error }
        }
    }
</script>

<style scoped>
</style>
