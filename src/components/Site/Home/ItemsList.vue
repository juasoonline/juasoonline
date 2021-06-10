<template>

    <!-- Begin contents -->
    <div class="grid 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-2 sm:gap-2 xs:gap-1 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
        <div v-for="item in product.items" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
            <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                <img class="object-cover h-48 w-full" v-bind:src="item.attributes.image" :alt="item.include.images[0].attributes.image">
            </router-link>
            <div class="m-2">
                <span class="text-gray-500 text-xs hover:text-red-500 leading-tight">
                    <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                        <p class="leading-5" :title="item.attributes.name">{{ item.attributes.name.substring(0, 25) }}...</p>
                    </router-link>
                </span>
                <p class="font-bold block text-xs my-0.5">
                    <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                        GHS {{ item.attributes.sales_price }}
                        <del class="ml-2 text-xxxs font-light text-gray-500 text-red-500">GHS {{ item.attributes.price }}</del>
                    </router-link>
                </p>
                <span class="block text-gray-500 text-xxs">{{ item.attributes.total_sold }} Sold</span>
            </div>
        </div>
    </div>
    <div v-if="isLoading">
        <img class="mx-auto text-center w-20 h-20" src="https://assets.juasoonline.com/juasoonline/assets/images/loader.gif">
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
                    const response = await axios({ method: 'GET', url: `juaso/products?page=${currentPage.value}`, headers: {} })
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
                if (( window.innerHeight + window.scrollY ) >= document.body.offsetHeight )
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