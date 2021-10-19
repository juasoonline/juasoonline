<template>

    <!-- Begin contents -->
    <main class="2xl:container xl:container lg:container 2xl:my-4 xl:my-4 lg:my-4 mx-auto px-1.5">
        <div class="2xl:flex xl:flex lg:flex 2xl:gap-5 xl:gap-5 lg:gap-5 my-4">

            <!-- Begin left contents -->
            <aside class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden w-1/5">
                <div class="sticky inset-x-0 top-20 left-0">

                    <div class="bg-white rounded-b">
                        <!-- Begin cat header -->
                        <div class="bg-juaso-primary rounded-t">
                            <router-link to="">
                                <div class="flex justify-start p-2.5 hover:bg-juaso-secondary rounded-t">
                                    <svg class="w-5 h-5 mr-1.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                                    <span class="text-sm font-bold text-white">Related Categories</span>
                                </div>
                            </router-link>
                        </div>
                        <!-- End cat header -->

                        <!-- Begin cat nav -->
                        <div class="p-3">
                            <div class="flex font-bold text-sm items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                {{ groups.group.name }}
                            </div>
                            <div class="ml-5 py-1 text-xs">
                                <ul v-for="category in groups.categories" :key="category.attributes.resource_id">
                                    <li class="py-1"><router-link to="">{{ category.attributes.name }}</router-link></li>
                                </ul>
                            </div>
                        </div>
                        <!-- End cat nav -->
                    </div>

                </div>
            </aside>
            <!-- End left contents -->

            <!-- Begin right contents -->
            <div class="2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-full sm:w-full xs:w-full">

                <!-- Begin breadcrumb -->
                <div class="text-xs text-gray-500 bg-white rounded p-4">
                    <router-link to="" class="hover:text-red-500">All Categories <i class="fal fa-chevron-right mx-2 text-xxxs"></i></router-link>
                    <router-link to="" class="hover:text-red-500">{{ groups.group.name }} <i class="fal fa-chevron-right mx-2 text-xxxs"></i></router-link>
                    <router-link to="" class="hover:text-red-500 font-extrabold">"Cellphones"</router-link> (552 Results)
                </div>
                <!-- End breadcrumb -->

                <!-- Begin sort and view type -->
                <div class="my-4">
                </div>
                <!-- End sort and view type -->

                <!-- Begin items list -->
                <div id="infinite-list">
                    <div v-for="(item, index) in groups.categories" :key="index">
                        <div v-for="subcategory in item.include.subcategories" :key="subcategory.attributes.resource_id" class="grid gap-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2">
                            <div v-for="(product, index) in subcategory.include.products" :key="index" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                                <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: product.attributes.resource_id }}">
                                    <img class="object-cover h-48 w-full" v-bind:src="product.attributes.image" :alt="product.attributes.image">
                                </router-link>
                                <div class="m-2">
                                    <span class="text-gray-500 text-xs hover:text-red-500 leading-tight">
                                        <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: product.attributes.resource_id } }">
                                            <p class="leading-5" :title="product.attributes.name">{{ product.attributes.name.substring(0, 25) }}...</p>
                                        </router-link>
                                    </span>
                                    <p v-if="product.pricing.priced === 'Product'" class="font-bold block text-xs my-0.5">
                                        <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: product.attributes.resource_id } }">
                                            {{ product.pricing.price_data[0].sales_price }}
                                            <del class="ml-2 text-xxs font-light text-gray-500 text-red-500"> {{ product.pricing.price_data[0].price }}</del>
                                        </router-link>
                                    </p>
                                    <p v-else class="font-bold block text-xs my-0.5">
                                        <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: product.attributes.resource_id } }">
                                            {{ product.pricing.price_data[0].price_range }}
                                        </router-link>
                                    </p>
                                    <div class="flex items-center justify-between">
                                        <p class="block text-xs my-0.5 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <span>{{ product.attributes.average_rating }}</span>
                                        </p>
                                        <router-link :to="{ name: 'Item', params: { item: product.attributes.resource_id }}" class="hover:text-red-500">
                                            <span class="text-xs font-light text-gray-500">{{ product.attributes.total_sold }} Sold</span>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>








<!--                <div id="infinite-list" class="grid gap-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2">-->
<!--                    <div v-for="item in product.items" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">-->
<!--                        <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">-->
<!--                            <img class="object-cover h-48 w-full" v-bind:src="item.attributes.image" :alt="item.attributes.image">-->
<!--                        </router-link>-->
<!--                        <div class="m-2">-->
<!--                            <span class="text-gray-500 text-xs hover:text-red-500 leading-tight">-->
<!--                                <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">-->
<!--                                    <p class="leading-5" :title="item.attributes.name">{{ item.attributes.name.substring(0, 25) }}...</p>-->
<!--                                </router-link>-->
<!--                            </span>-->
<!--                            <p v-if="item.pricing.priced === 'Product'" class="font-bold block text-xs my-0.5">-->
<!--                                <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">-->
<!--                                    {{ item.pricing.price_data[0].sales_price }}-->
<!--                                    <del class="ml-2 text-xxs font-light text-gray-500 text-red-500"> {{ item.pricing.price_data[0].price }}</del>-->
<!--                                </router-link>-->
<!--                            </p>-->
<!--                            <p v-else class="font-bold block text-xs my-0.5">-->
<!--                                <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">-->
<!--                                    {{ item.pricing.price_data[0].price_range }}-->
<!--                                </router-link>-->
<!--                            </p>-->
<!--                            <div class="flex items-center justify-between">-->
<!--                                <p class="block text-xs my-0.5 flex items-center">-->
<!--                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />-->
<!--                                    </svg>-->
<!--                                    <span>{{ item.attributes.average_rating }}</span>-->
<!--                                </p>-->
<!--                                <router-link :to="{ name: 'Item', params: { item: item.attributes.resource_id }}" class="hover:text-red-500">-->
<!--                                    <span class="text-xs font-light text-gray-500">{{ item.attributes.total_sold }} Sold</span>-->
<!--                                </router-link>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div v-if="isLoading">-->
<!--                    <img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/loader.gif">-->
<!--                </div>-->
                <!-- End items list -->

            </div>
            <!-- End right contents -->

        </div>
    </main>
    <!-- End contents -->

</template>

<script>
    import { onBeforeMount, reactive, ref } from "vue";

    import axios from "axios";
    import { useRoute } from 'vue-router'

    export default
    {
        name: "MainContents",
        setup ()
        {
            const route = useRoute()
            const isLoading = ref(false )
            const groups = reactive({ group: [], categories: [] })

            onBeforeMount(async () =>
            {
                // Get store stats
                axios({ method: 'GET', url: 'juaso/groups/' + route.params.category + '?include=categories.subcategories.products', headers: {} })
                    .then( response =>
                    {
                        groups.group = response.data.data.attributes;
                        groups.categories = response.data.data.include.categories;
                    })
            })

            return { isLoading, groups }
        }
    }
</script>

<style scoped>
</style>