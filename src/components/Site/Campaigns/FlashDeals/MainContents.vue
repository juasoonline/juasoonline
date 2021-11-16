<template>

    <!-- Begin content for large screens -->
    <div class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">

        <!-- Begin page header -->
        <div class="bg-white border-t">
            <div class="container mx-auto py-6 px-1.5">
                <div class="font-black text-3xl items-center flex">
                    <span class="mr-10 uppercase text-red-500">Flash Deals</span>
                    <span class="text-xl font-light">Only available for few days - don't miss out!</span>
                </div>
            </div>
        </div>
        <!-- End page header -->

        <!-- Begin categories menu -->
        <div class="bg-flash_bg bg-cover sticky top-0 z-40 bg-white border-gray-100 text-white shadow-md">
            <div class="container mx-auto px-1.5">
                <div class="font-bold">
                    <div class="flex overflow-x-auto">
                        <div class="text-center px-10 py-4 border-l border-r border-gray-100 hover:opacity-70 cursor-pointer">
                            <svg class="h-5 w-5 mx-auto" fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M27.71 2.5H8C6.54212 2.50264 5.14471 3.08295 4.11383 4.11383C3.08295 5.14471 2.50264 6.54212 2.5 8V27.71C2.5 28.1078 2.65804 28.4894 2.93934 28.7707C3.22064 29.052 3.60218 29.21 4 29.21H23.71C25.1687 29.21 26.5676 28.6305 27.5991 27.5991C28.6305 26.5676 29.21 25.1687 29.21 23.71V4C29.21 3.60218 29.052 3.22064 28.7707 2.93934C28.4894 2.65804 28.1078 2.5 27.71 2.5ZM26.21 23.71C26.21 24.0383 26.1453 24.3634 26.0197 24.6667C25.8941 24.97 25.7099 25.2456 25.4778 25.4778C25.2456 25.7099 24.97 25.8941 24.6667 26.0197C24.3634 26.1453 24.0383 26.21 23.71 26.21H5.5V8C5.5 7.33696 5.76339 6.70107 6.23223 6.23223C6.70107 5.76339 7.33696 5.5 8 5.5H26.21V23.71Z" fill="black"/><path d="M23.71 34.79H4C3.60218 34.79 3.22064 34.9481 2.93934 35.2294C2.65804 35.5107 2.5 35.8922 2.5 36.29V56C2.50264 57.4579 3.08295 58.8553 4.11383 59.8862C5.14471 60.9171 6.54212 61.4974 8 61.5H27.71C28.1078 61.5 28.4894 61.342 28.7707 61.0607C29.052 60.7794 29.21 60.3979 29.21 60V40.29C29.21 38.8313 28.6305 37.4324 27.5991 36.401C26.5676 35.3695 25.1687 34.79 23.71 34.79V34.79ZM26.21 58.5H8C7.33696 58.5 6.70107 58.2366 6.23223 57.7678C5.76339 57.299 5.5 56.6631 5.5 56V37.79H23.71C24.0383 37.79 24.3634 37.8547 24.6667 37.9803C24.97 38.106 25.2456 38.2901 25.4778 38.5223C25.7099 38.7544 25.8941 39.03 26.0197 39.3333C26.1453 39.6366 26.21 39.9617 26.21 40.29V58.5Z" fill="black"/><path d="M60 34.79H40.29C38.8313 34.79 37.4324 35.3695 36.401 36.401C35.3695 37.4324 34.79 38.8313 34.79 40.29V60C34.79 60.3979 34.9481 60.7794 35.2294 61.0607C35.5107 61.342 35.8922 61.5 36.29 61.5H56C57.4579 61.4974 58.8553 60.9171 59.8862 59.8862C60.9171 58.8553 61.4974 57.4579 61.5 56V36.29C61.5 35.8922 61.342 35.5107 61.0607 35.2294C60.7794 34.9481 60.3979 34.79 60 34.79ZM58.5 56C58.5 56.6631 58.2366 57.299 57.7678 57.7678C57.299 58.2366 56.6631 58.5 56 58.5H37.79V40.29C37.79 39.627 38.0534 38.9911 38.5223 38.5223C38.9911 38.0534 39.627 37.79 40.29 37.79H58.5V56Z" fill="black"/><path d="M40.29 21.36H42.64V23.71C42.64 25.1687 43.2195 26.5676 44.2509 27.5991C45.2824 28.6305 46.6813 29.21 48.14 29.21C49.5987 29.21 50.9977 28.6305 52.0291 27.5991C53.0606 26.5676 53.64 25.1687 53.64 23.71V21.36H56C57.4587 21.36 58.8577 20.7805 59.8891 19.7491C60.9206 18.7176 61.5 17.3187 61.5 15.86C61.5 14.4013 60.9206 13.0024 59.8891 11.9709C58.8577 10.9395 57.4587 10.36 56 10.36H53.64V8C53.64 6.54131 53.0606 5.14236 52.0291 4.11091C50.9977 3.07946 49.5987 2.5 48.14 2.5C46.6813 2.5 45.2824 3.07946 44.2509 4.11091C43.2195 5.14236 42.64 6.54131 42.64 8V10.36H40.29C38.8313 10.36 37.4324 10.9395 36.401 11.9709C35.3695 13.0024 34.79 14.4013 34.79 15.86C34.79 17.3187 35.3695 18.7176 36.401 19.7491C37.4324 20.7805 38.8313 21.36 40.29 21.36V21.36ZM40.29 13.36H44.14C44.5379 13.36 44.9194 13.202 45.2007 12.9207C45.482 12.6394 45.64 12.2578 45.64 11.86V8C45.64 7.33696 45.9034 6.70107 46.3723 6.23223C46.8411 5.76339 47.477 5.5 48.14 5.5C48.8031 5.5 49.439 5.76339 49.9078 6.23223C50.3766 6.70107 50.64 7.33696 50.64 8V11.86C50.64 12.2578 50.7981 12.6394 51.0794 12.9207C51.3607 13.202 51.7422 13.36 52.14 13.36H56C56.6631 13.36 57.299 13.6234 57.7678 14.0922C58.2366 14.5611 58.5 15.197 58.5 15.86C58.5 16.523 58.2366 17.1589 57.7678 17.6278C57.299 18.0966 56.6631 18.36 56 18.36H52.14C51.7422 18.36 51.3607 18.518 51.0794 18.7993C50.7981 19.0806 50.64 19.4622 50.64 19.86V23.71C50.64 24.373 50.3766 25.0089 49.9078 25.4778C49.439 25.9466 48.8031 26.21 48.14 26.21C47.477 26.21 46.8411 25.9466 46.3723 25.4778C45.9034 25.0089 45.64 24.373 45.64 23.71V19.86C45.64 19.4622 45.482 19.0806 45.2007 18.7993C44.9194 18.518 44.5379 18.36 44.14 18.36H40.29C39.627 18.36 38.9911 18.0966 38.5223 17.6278C38.0534 17.1589 37.79 16.523 37.79 15.86C37.79 15.197 38.0534 14.5611 38.5223 14.0922C38.9911 13.6234 39.627 13.36 40.29 13.36V13.36Z" fill="black"/></svg>
                            <p class="text-sm truncate mt-1">All Categories</p>
                        </div>
                        <div v-for="( menu ) in menus.group" :key="menu.attributes.resource_id" class="text-center px-10 py-4 border-r border-gray-100 hover:opacity-70 cursor-pointer">
                            <p class="flex items-center" v-html="menu.attributes.web_icon"></p>
                            <p class="text-sm my-auto truncate mt-1">{{ menu.attributes.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End categories menu -->

        <!-- Begin main contents -->
        <main class="container mx-auto my-4 px-1.5">

            <!-- Begin more to love items -->
            <div class="">

                <!-- Begin now / upcoming actions -->
                <div class="my-10">
                    <div class="text-center">
                        <span class="mr-2"><button class="items-end rounded-full bg-gray-300 px-8 py-1.5 text-xs text-gray-700 font-semibold uppercase">Now</button></span>
                        <span class="ml-2"><button class="items-start rounded-full bg-gray-200 px-8 py-1.5 text-xs text-gray-700 font-semibold uppercase">Upcoming</button></span>
                    </div>
                </div>
                <!-- End now / upcoming actions -->

                <!-- Begin items -->
                <div class="grid gap-4 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5">
                    <div v-for="item in moreFlashDeals.items" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
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
                <!-- End items -->

            </div>
            <!-- End more to love items -->

            <!-- Begin preloader -->
            <div v-if="isLoading">
                <img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/loader.gif" alt="Loading...">
            </div>
            <!-- End preloader -->

        </main>
        <!-- End main contents -->

    </div>
    <!-- End content for large screens -->

    <!-- Begin content for small screens -->
    <div class="bg-flash_bg bg-cover 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block">

        <!-- Begin page header -->
        <div class="bg-flash_bg bg-cover sticky top-0 z-40 bg-cover py-3 px-1.5 text-white">

            <!-- Begin title section -->
            <div class="flex justify-between items-center">
                <div class="flex items-center text-lg font-black">
                    <span @click="$router.go(-1)"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" /></svg></span>
                    <span class="ml-4">Flash Deals</span>
                </div>
                <div class="">
                    <router-link to="/cart"><svg class="w-6 w-6 text-white" id="Layer_1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve"><path id="XMLID_1732_" d="M91.8,27.3L81.1,61c-0.8,2.4-2.9,4-5.4,4H34.4c-2.4,0-4.7-1.5-5.5-3.7L13.1,19H4c-2.2,0-4-1.8-4-4  s1.8-4,4-4h11.9c1.7,0,3.2,1.1,3.8,2.7L36,57h38l8.5-27H35.4c-2.2,0-4-1.8-4-4s1.8-4,4-4H88c1.3,0,2.5,0.7,3.2,1.7  C92,24.7,92.2,26.1,91.8,27.3z M36.4,70.3c-1.7,0-3.4,0.7-4.6,1.9c-1.2,1.2-1.9,2.9-1.9,4.6c0,1.7,0.7,3.4,1.9,4.6  c1.2,1.2,2.9,1.9,4.6,1.9s3.4-0.7,4.6-1.9c1.2-1.2,1.9-2.9,1.9-4.6c0-1.7-0.7-3.4-1.9-4.6C39.8,71,38.1,70.3,36.4,70.3z M72.3,70.3  c-1.7,0-3.4,0.7-4.6,1.9s-1.9,2.9-1.9,4.6c0,1.7,0.7,3.4,1.9,4.6c1.2,1.2,2.9,1.9,4.6,1.9c1.7,0,3.4-0.7,4.6-1.9  c1.2-1.2,1.9-2.9,1.9-4.6c0-1.7-0.7-3.4-1.9-4.6S74,70.3,72.3,70.3z"/></svg></router-link>
                </div>
            </div>
            <!-- End title section -->

            <!-- Begin category menu -->
            <div class="mb-2">
                <div class="flex font-bold">
                    <div class="flex overflow-x-auto">
                        <div class="text-center pr-2.5 py-2"><p class="text-sm truncate">All</p></div>
                        <div class="text-center px-2.5 py-2" v-for="( menu ) in menus.group" :key="menu.attributes.resource_id" ><p class="text-sm my-auto truncate">{{ menu.attributes.name }}</p></div>
                    </div>
                </div>
            </div>
            <!-- E nd category menu -->

        </div>
        <!-- End page header -->

        <!-- Begin main contents -->
        <main class="mb-14 bg-gray-100 px-1.5">

            <!-- Begin now / upcoming actions -->
            <div class="py-5">
                <div class="text-center">
                    <span class="mr-2"><button class="items-end rounded-full bg-gray-300 px-8 py-1.5 text-xs text-gray-700 font-semibold uppercase">Now</button></span>
                    <span class="ml-2"><button class="items-start rounded-full bg-gray-200 px-8 py-1.5 text-xs text-gray-700 font-semibold uppercase">Upcoming</button></span>
                </div>
            </div>
            <!-- End now / upcoming actions -->

            <!-- Begin items -->
            <div class="grid gap-2 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
                <div v-for="item in moreFlashDeals.items" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                    <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                        <img class="object-cover h-48 w-full" v-bind:src="item.attributes.image" :alt="item.attributes.image">
                    </router-link>
                    <div class="m-2">
                        <span class="text-gray-500 text-xs hover:text-red-500 leading-tight">
                            <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                <p class="leading-5" :title="item.attributes.name">{{ item.attributes.name.substring(0, 20) }}...</p>
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
            <!-- End items -->

            <!-- Begin preloader -->
            <div v-if="isLoading" class="mb-10">
                <img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/loader.gif" alt="Loading...">
            </div>
            <!-- End preloader -->

        </main>
        <!-- End main contents -->

    </div>
    <!-- End content for small screens -->

</template>

<script>
    import { computed, onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";
    import axios from "axios";

    export default
    {
        name: "MainContents",
        setup ()
        {
            const currentPage = ref(0)
            const totalPages = ref()
            const isInitialRequestLoading = ref(true)
            const isLoading = ref(false )

            const menus = reactive({ group: [], loaded: false })
            const moreFlashDeals = reactive({ items: [], loaded: false })

            const getMenus = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/groups' })
                    const data = await response.data
                    menus.group = data.data
                    menus.loaded = true
                }
                catch( err )
                {
                    menus.loaded = false
                }
            }
            const getFlashItems = async () =>
            {
                currentPage.value++
                try
                {
                    const response = await axios({ method: 'GET', url: `business/products?page=${currentPage.value}`, headers: {} })
                    const parsedResponse = await response.data
                    moreFlashDeals.items = [ ...moreFlashDeals.items, ...parsedResponse.data ]
                    totalPages.value = parsedResponse.meta.last_page
                    moreFlashDeals.loaded = true
                }
                catch( err )
                {
                    moreFlashDeals.loaded = false
                }
            }
            const handleScroll = async () =>
            {
                if (( window.scrollY + window.innerHeight ) >= document.body.offsetHeight )
                {
                    if ( hasFetchedAllData.value || isLoading.value ) { return }
                    isLoading.value = true
                    await getFlashItems()
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
                await getFlashItems()
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

            return { isLoading, menus, moreFlashDeals }
        }
    }
</script>

<style scoped>
</style>