<template>

    <!-- Begin contents -->
    <main class="container mx-auto my-4">

        <!-- Begin image contents -->
        <div class="text-center mx-auto">
            <img class="mt-20 mx-auto w-96" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/others/404.png" alt="">
        </div>
        <!-- End image contents -->

        <div class="w-10/12 mx-auto mt-20">
            <p class="my-5">Sorry, the page you requested can not be found:(</p>

            <!-- Begin items -->
            <div id="infinite-list" class="grid 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-2 sm:gap-2 xs:gap-1 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2">
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
                                <del class="ml-2 text-xxxs font-light text-gray-500 text-red-500"> {{ item.pricing.price_data[0].price }}</del>
                            </router-link>
                        </p>
                        <p v-else class="font-bold block text-xs my-0.5">
                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                {{ item.pricing.price_data[0].price_range }}
                            </router-link>
                        </p>
                        <span class="block text-gray-500 text-xxs">{{ item.attributes.total_sold }} Sold</span>
                    </div>
                </div>
            </div>
            <!-- End items -->

            <!-- Begin preloader -->
            <div v-if="isLoading">
                <img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/others/loader.gif" alt="">
            </div>
            <!-- End preloader -->

        </div>

    </main>
    <!-- End contents -->

</template>

<script>
    import { computed, onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";
    import axios from "axios";

    export default
    {
        name: "MainContents",
        setup ()
        {
            const product = reactive({ items: [] })
            const currentPage = ref(0)
            const totalPages = ref()
            const isInitialRequestLoading = ref(true)
            const isLoading = ref(false )

            const getItems = async () =>
            {
                currentPage.value++
                try
                {
                    const response = await axios({ method: 'GET', url: `business/products?page=${currentPage.value}`, headers: {} })
                    const parsedResponse = await response.data
                    product.items = [ ...product.items, ...parsedResponse.data ]
                    totalPages.value = parsedResponse.meta.last_page
                }
                catch( err )
                {
                    console.log( err )
                }
            }

            onBeforeMount(async () =>
            {
                await getItems()
                isInitialRequestLoading.value = false
            })

            const handleScroll = async () =>
            {
                if (( window.scrollY + window.innerHeight ) >= document.body.offsetHeight )
                {
                    if ( hasFetchedAllData.value || isLoading.value ) { return }
                    isLoading.value = true
                    await getItems()
                    isLoading.value = false
                }
            }

            onMounted(() => { window.addEventListener('scroll', handleScroll) })
            onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })

            const hasFetchedAllData = computed(() =>
            {
                return currentPage.value === totalPages.value && !isLoading.value
            })

            return { product, isInitialRequestLoading, isLoading }
        }
    }
</script>

<style scoped>

</style>