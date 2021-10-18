<template>

    <!-- Begin contents -->
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
    <div v-if="isLoading">
        <img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/loader.gif">
    </div>
    <!-- End contents -->

</template>

<script>
    import { onBeforeMount, onMounted, onUnmounted, computed, reactive, ref} from "vue";
    import axios from "axios";

    export default
    {
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