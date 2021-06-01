<template>

    <!-- Begin contents -->
    <main class="2xl:container xl:container lg:container md:w-screen sm:w-screen xs:w-screen mx-auto my-4 px-1.5">

        <!-- Begin category and slide contents -->
        <cats-and-ad-slides></cats-and-ad-slides>
        <!-- End category and slide contents -->

        <!-- Begin Juasoonline tags -->
        <juaso-tags></juaso-tags>
        <!-- End Juasoonline tags -->

        <!-- Begin quick details -->
        <quick-deals></quick-deals>
        <!-- End quick details -->

        <!-- Begin items -->
        <section class="md:px-1.5 sm:px-1.5 xs:px-1.5 w-full mb-14">

            <!-- Begin title -->
            <h4 class="font-bold mt-6 pb-2 md:text-center sm:text-center xs:text-center">Latest items</h4>
            <!-- End title -->

            <!-- Begin items list -->
            <div class="grid 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-2 sm:gap-2 xs:gap-1 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
                <div v-for="item in product.items" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                    <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                        <img class="object-cover h-48 w-full" v-bind:src="item.attributes.image" :alt="item.include.images[0].attributes.image">
                    </router-link>
                    <div class="m-3">
                        <span class="text-gray-500 text-xs hover:text-red-500 leading-tight">
                            <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                <p class="leading-6" :title="item.attributes.name">{{ item.attributes.name.substring(0, 22) }}...</p>
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
            <!-- End items list -->

            <!-- Begin load more button -->
            <div class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden my-10 justify-center">
<!--                <button class="inline-block mr-1 px-7 py-2 text-xs font-medium leading-4 text-center text-white transition bg-red-500 rounded shadow ripple hover:bg-red-600 mx-auto">Load more</button>-->
            </div>
            <!-- End load more button -->

        </section>
        <!-- End items -->

    </main>
    <!-- End contents -->

</template>

<script>
    import CatsAndAdSlides from "@/components/Site/Home/CatsAndAdSlides";
    import JuasoTags from "@/components/Site/Shared/JuasoTags";
    import QuickDeals from "./QuickDeals";

    import { onBeforeMount, reactive } from 'vue';
    import axios from "axios";

    export default
    {
        name: "MainContents",
        components: { CatsAndAdSlides, JuasoTags, QuickDeals },
        setup ()
        {
            const product = reactive({ items: [] })

            onBeforeMount(() =>
            {
                axios({ method: 'GET', url: 'juaso/products?include=images', headers: {} })
                    .then( response => { product.items = response.data.data; } )
                    .catch( error => { error.response })
            })

            return { product }
        }
    }
</script>

<style scoped>
</style>