<template>

    <!-- Begin header contents -->
    <div class="flex">
        <div class="container mx-auto py-7 px-1.5">

            <!-- Begin page header -->
            <div class="justify-between items-center">
                <div class="font-black text-3xl items-center flex">
                    <span class="mr-10 text-gray-700 uppercase">{{ brand.brand.name }}</span>
                    <span class="text-xl font-light">{{ brand.brand.description }}</span>
                </div>
            </div>
            <!-- End page header -->

        </div>
    </div>
    <!-- End header contents -->

    <!-- Begin main contents -->
    <main class="container mx-auto my-4 px-1.5">

        <!-- Begin top product ranking -->
        <div class="bg-header-banner bg-cover flex rounded p-4 grid grid-cols-2 gap-5 items-center">
            <div class="text-white text-center">
                <div class="pt-5 px-10 font-black text-xl">{{ brand.brand.description }}</div>
                <div class="py-2 font-black text-sm">Top Ranked</div>
                <div class="bg-black mx-40 rounded-xl py-1 text-sm bg-opacity-25">
                    <p class="">Ranked by order growth rate this week</p>
                </div>
            </div>
            <div class="flex bg-white rounded p-5 items-center">
                <div class="2xl:w-1/5 xl:w-1/5 mr-5">
                    <div class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                        <router-link class="" :to="{ name: 'Item', params: { item: 78236748275482 }}">
                            <img class="object-cover w-full" src="https://juasoonline.nyc3.digitaloceanspaces.com/test/images/products/product14_1.jpg" :alt="product">
                        </router-link>
                    </div>
                </div>
                <div class="2xl:w-4/5 xl:w-4/5">
                    <p class="">Minglu Spring Mens Shirts Luxury Flower Printing Long Sleeve Casual Mens Dress Shirts Fashion Slim Fit Party Male Shirts</p>
                    <p class="font-black py-2 text-xl items-center flex">GHS 2.000.00 <del class="ml-2 text-xxs font-light text-gray-500 text-red-500"> GHS2,100.00</del></p>
                    <div class="flex justify-between">
                        <div class="flex items-center">
                            <p class="block text-xs my-0.5 flex items-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                <span>4.9</span>
                            </p>
                            <span class="text-xs text-gray-500"><strong>2340</strong> Sold</span>
                        </div>
                        <p class="text-right">
                            <router-link to="" class="py-1.5 px-3 bg-juaso-primary text-xs text-white font-bold uppercase rounded">Shop Now</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End top product ranking -->

        <!-- Begin rankings -->
        <div class="my-10">
            <div class="flex grid grid-cols-2 gap-5">

                <!-- Begin items -->
                <div v-for="index in 12" :key="index" class="flex bg-white rounded p-5 items-center">
                    <div class="2xl:w-1/5 xl:w-1/5 mr-5">
                        <div class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                            <router-link class="" :to="{ name: 'Item', params: { item: 78236748275482 }}">
                                <img class="object-cover w-full" src="https://juasoonline.nyc3.digitaloceanspaces.com/test/images/products/product14_1.jpg" :alt="product">
                            </router-link>
                        </div>
                    </div>
                    <div class="2xl:w-4/5 xl:w-4/5">
                        <p class="">Minglu Spring Mens Shirts Luxury Flower Printing Long Sleeve Casual Mens Dress Shirts Fashion Slim Fit Party Male Shirts</p>
                        <p class="font-black py-2 text-xl items-center flex">GHS 2.000.00 <del class="ml-2 text-xxs font-light text-gray-500 text-red-500"> GHS2,100.00</del></p>
                        <div class="flex justify-between">
                            <div class="flex items-center">
                                <p class="block text-xs my-0.5 flex items-center mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                    <span>4.9</span>
                                </p>
                                <span class="text-xs text-gray-500"><strong>2340</strong> Sold</span>
                            </div>
                            <p class="text-right">
                                <router-link to="" class="py-1.5 px-3 bg-juaso-primary text-xs text-white font-bold uppercase rounded">Shop Now</router-link>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- End items -->

            </div>
        </div>
        <!-- End rankings -->

        <!-- Begin more rankings -->
        <div class="my-10">
            <!-- Begin title -->
            <div class="text-center my-5 font-black text-3xl text-gray-700">More Rankings</div>
            <!-- End title -->

            <!-- Begin items -->
            <div class="flex grid grid-cols-2 gap-5">
                <div v-for="index in 12" :key="index" class="bg-white rounded p-5 items-center">

                    <!-- Begin header -->
                    <div class="mb-3">
                        <h3 class="text-lg font-bold">Cat Name</h3>
                    </div>
                    <!-- End header -->

                    <!-- Begin items -->
                    <div class="flex grid grid-cols-3 gap-5">
                        <div v-for="index in 3" :key="index" class="card bg-white rounded overflow-hidden">

                            <!-- Begin image -->
                            <router-link class="" :to="{ name: 'Item', params: { item: 78236748275482 }}">
                                <img class="object-cover w-full" src="https://juasoonline.nyc3.digitaloceanspaces.com/test/images/products/product14_1.jpg" alt="product">
                            </router-link>
                            <!-- End image -->

                            <!-- Begin price -->
                            <div class="flex items-center justify-between my-1.5">
                                <p class="block text-xs my-0.5 flex items-center font-bold"><span>GHS 2000.00</span></p>
                                <p class="hover:text-red-500"><del class="text-xs font-light text-red-500">2001 Sold</del></p>
                            </div>
                            <!-- End price -->

                            <!-- Begin stats -->
                            <div class="flex items-center justify-between font-bold">
                                <p class="block text-xs my-0.5 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <span>4.6</span>
                                </p>
                                <router-link :to="{ name: 'Item', params: { item: 28959284592 }}" class="hover:text-red-500">
                                    <span class="text-xs font-light text-gray-500">2001 Sold</span>
                                </router-link>
                            </div>
                            <!-- End stats -->

                        </div>
                    </div>
                    <!-- End items -->

                </div>
            </div>
            <!-- End items -->
        </div>
        <!-- End more rankings -->

        <!-- Begin more to love -->
        <div class="my-10">

            <!-- Begin title -->
            <div class="text-center my-5 font-black text-3xl text-gray-700">More To Love</div>
            <!-- End title -->

            <!-- Begin item list -->
            <div id="infinite-list" class="grid gap-4 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
                <div v-for="item in product.items" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                    <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                        <img class="object-cover h-48 w-full" v-bind:src="item.attributes.image" :alt="item.attributes.image">
                    </router-link>
                    <div class="m-2">
                        <span class="text-gray-500 text-xs hover:text-red-500 leading-tight">
                            <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                <p class="leading-5" :title="item.attributes.name">{{ item.attributes.name.substring(0, 25) }}...</p>
                            </router-link>
                        </span>
                        <p v-if="item.pricing.priced === 'Product'" class="font-bold block text-xs my-0.5">
                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                {{ item.pricing.price_data[0].sales_price }}
                                <del class="ml-2 text-xxs font-light text-gray-500 text-red-500"> {{ item.pricing.price_data[0].price }}</del>
                            </router-link>
                        </p>
                        <p v-else class="font-bold block text-xs my-0.5">
                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                {{ item.pricing.price_data[0].price_range }}
                            </router-link>
                        </p>
                        <div class="flex items-center justify-between">
                            <p class="block text-xs my-0.5 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <span>{{ item.attributes.average_rating }}</span>
                            </p>
                            <router-link :to="{ name: 'Item', params: { item: item.attributes.resource_id }}" class="hover:text-red-500">
                                <span class="text-xs font-light text-gray-500">{{ item.attributes.total_sold }} Sold</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End item list -->

            <!-- Begin preloader -->
            <div v-if="isLoading">
                <img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/loader.gif" alt="Loading...">
            </div>
            <!-- End preloader -->

        </div>
        <!-- End more to love -->

    </main>
    <!-- End main contents -->

</template>

<script>
    import { useRoute } from "vue-router";
    import { computed, onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";
    import axios from "axios";

    export default
    {
        name: "MainContents",
        setup ()
        {
            const route = useRoute()

            const currentPage = ref(0)
            const totalPages = ref()
            const isInitialRequestLoading = ref(true)
            const isLoading = ref(false )

            const brand = reactive({ brand: [], loaded: false })
            const brandSales = reactive({ items: [], loaded: false })
            const brandCategories = reactive({ items: [], loaded: false })
            const product = reactive({ items: [], loaded: false })

            const getBrand = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/brands/' + route.params.brands })
                    const data = await response.data
                    brand.brand = data.data.attributes
                    brand.loaded = true
                }
                catch( err )
                {
                    brand.loaded = false
                }
            }
            const getBrandSales = async () =>
            {

            }
            const getBrandCategories = async () =>
            {

            }
            const getBrandItems = async () =>
            {
                currentPage.value++
                try
                {
                    const response = await axios({ method: 'GET', url: `business/products?page=${currentPage.value}`, headers: {} })
                    const parsedResponse = await response.data
                    product.items = [ ...product.items, ...parsedResponse.data ]
                    totalPages.value = parsedResponse.meta.last_page
                    product.loaded = true
                }
                catch( err )
                {
                    product.loaded = false
                }
            }

            const handleScroll = async () =>
            {
                if (( window.scrollY + window.innerHeight ) >= document.body.offsetHeight )
                {
                    if ( hasFetchedAllData.value || isLoading.value ) { return }
                    isLoading.value = true
                    await getBrandItems()
                    isLoading.value = false
                }
            }
            const hasFetchedAllData = computed(() =>
            {
                return currentPage.value === totalPages.value && !isLoading.value
            })

            onBeforeMount(async () =>
            {
                await getBrand()
                await getBrandSales()
                await getBrandCategories()
                await getBrandItems()

                isInitialRequestLoading.value = false
            })
            onMounted(() =>
            {
                window.addEventListener('scroll', handleScroll)
            })
            onUnmounted(() =>
            {
                window.removeEventListener('scroll', handleScroll)
            })

            return { brand, product, isLoading, brandSales, brandCategories }
        }
    }
</script>

<style scoped>
</style>