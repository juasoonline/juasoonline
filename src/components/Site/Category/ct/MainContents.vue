<template>

    <!-- Begin contents -->
    <main class="2xl:container xl:container lg:container 2xl:my-4 xl:my-4 lg:my-4 mx-auto px-1.5">
        <div class="2xl:flex xl:flex lg:flex my-4">

            <!-- Begin left contents -->
            <aside class="mr-5 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden 2xl:w-2/12 xl:w-1/5 lg:w-1/5">
                <div class="sticky inset-x-0 top-20 left-0">
                    <div class="bg-white rounded-b shadow-lg">

                        <!-- Begin cat header -->
                        <div class="bg-juaso-primary rounded-t">
                            <div class="flex justify-start p-2.5 rounded-t">
                                <svg class="w-5 h-5 mr-1.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                                <span class="text-sm font-bold text-white">Related Categories</span>
                            </div>
                        </div>
                        <!-- End cat header -->

                        <!-- Begin cat nav -->
                        <div class="p-3">
                            <div v-if="menus.loaded === true">
                                <div class="font-bold 2xl:text-sm xl:text-xs lg:text-xxs hover:text-red-600">
                                    <router-link :to="{ name: 'Group', params: { category: menus.menu.include.group.attributes.resource_id, slug: menus.menu.include.group.attributes.slug }}" class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 2xl:mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                                        {{ menus.menu.include.group.attributes.name }}
                                    </router-link>
                                </div>
                                <div class="ml-2 py-1 2xl:text-xs xl:text-xxs lg:text-xxs">
                                    <ul>
                                        <li class="py-1 flex py-1 font-bold">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                                            {{ menus.menu.attributes.name }}
                                        </li>
                                        <li v-for="( subcategory, index ) in menus.subcategories" :key="index" class="ml-5 py-1 hover:text-red-600">
                                            <router-link :to="{ name: 'Subcategory', params: { category: subcategory.attributes.resource_id, slug: subcategory.attributes.slug }}" class="flex">
                                                {{ subcategory.attributes.name }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div v-else>
                                <bullet-list-loader viewBox="0 0 250 100" primaryColor="#f3f3f3" secondaryColor="#cccccc"></bullet-list-loader>
                            </div>
                        </div>
                        <!-- End cat nav -->

                    </div>
                </div>
            </aside>
            <!-- End left contents -->

            <!-- Begin right contents -->
            <div class="2xl:w-10/12 xl:w-4/5 lg:w-4/5 md:w-full sm:w-full xs:w-full">

                <!-- Begin breadcrumb -->
                <div class="text-xs text-gray-500">
                    <router-link to="" class="hover:text-red-500">All Categories <i class="fal fa-chevron-right mx-2 text-xxxs"></i></router-link>
                    <router-link to="" class="hover:text-red-500">Cellphones & Telecommunications <i class="fal fa-chevron-right mx-2 text-xxxs"></i></router-link>
                    <router-link to="" class="hover:text-red-500 font-extrabold">"Cellphones"</router-link> (552 Results)
                </div>
                <!-- End breadcrumb -->

                <!-- Begin sort and view type -->
                <div class="mt-5 mb-4">
                </div>
                <!-- End sort and view type -->

                <!-- Begin items list -->
                <div v-if="product.loaded === true">
                    <div v-if="product.items.length > 0" id="infinite-list" class="grid gap-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2">
                        <div v-for="( item ) in product.items" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                            <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                                <img class="object-cover h-48 w-full" v-bind:src="item.attributes.image" :alt="item.attributes.image">
                            </router-link>
                            <div class="m-2">
                                <p class="text-gray-500 text-xs hover:text-red-500 leading-tight">
                                    <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                        <span class="leading-5" :title="item.attributes.name">{{ item.attributes.name.substring(0, 20) }}...</span>
                                    </router-link>
                                </p>
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
                                <p class="text-gray-500 text-xs hover:text-red-500 leading-tight my-1.5">
                                    <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                        <span class="leading-5" :title="item.store.name">{{ item.store.name }}</span>
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
                    <div v-else class="h-96">
                        <p class="py-2 text-sm text-gray-400">There are no products in this category</p>
                    </div>
                </div>
                <div v-else>
                    <img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/loader.gif">
                </div>
                <div v-if="isLoading">
                    <img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/loader.gif">
                </div>
                <!-- End items list -->

            </div>
            <!-- End right contents -->

        </div>
    </main>
    <!-- End contents -->

</template>

<script>
    import { computed, onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";
    import axios from "axios";
    import { useRoute } from "vue-router";
    import { BulletListLoader } from 'vue-content-loader'

    export default
    {
        name: "MainContents",
        components: { BulletListLoader },
        setup ()
        {
            const route = useRoute()
            const menus = reactive({ menu: [], subcategories: [], loaded: false })
            const brands = reactive({ brands: [], loaded: false })
            const product = reactive({ items: [], loaded: false })
            const currentPage = ref(0)
            const totalPages = ref()
            const isInitialRequestLoading = ref(true)
            const isLoading = ref(false )

            const getMenus = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/categories/' + route.params.category + '?include=group,subcategories' })
                    const data = await response.data
                    menus.menu = data.data
                    menus.subcategories = data.data.include.subcategories
                    menus.loaded = true
                }
                catch( err )
                {
                    menus.loaded = false
                }
            }
            const getBrands = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/categories/' + route.params.category + '/products/brands' })
                    const data = await response.data
                    brands.brands = data.data
                    brands.loaded = true
                }
                catch( err )
                {
                    brands.loaded = false
                }
            }
            const getItems = async () =>
            {
                currentPage.value++
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/categories/' + route.params.category + '/products' })
                    const parsedResponse = await response.data
                    product.items = [ ...product.items, ...parsedResponse.data ]
                    totalPages.value = parsedResponse.meta.last_page
                    product.loaded = true
                }
                catch( err )
                {
                    console.log( err )
                }
            }
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
            const hasFetchedAllData = computed(() =>
            {
                return currentPage.value === totalPages.value && !isLoading.value
            })

            onBeforeMount(async () =>
            {
                await getMenus()
                await getBrands()
                await getItems()
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

            return { menus, brands, product, isInitialRequestLoading, isLoading }
        }
    }
</script>

<style scoped>
</style>