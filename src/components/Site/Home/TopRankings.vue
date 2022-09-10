<template>

    <!-- Begin contents -->
    <div class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden bg-white rounded p-5 mb-5">

        <!-- Begin header -->
        <div class="mb-3 pt-2">
            <router-link to="/campaigns/top-rankings" class="flex justify-between items-center">
                <div class="font-black 2xl:text-xl xl:text-xl md:text-xl text-sm text-gray-700 flex items-center hover:text-gray-600">
                    <span>Top Rankings</span>
                </div>
                <div class="text-xs hover:text-red-600">VIEW MORE</div>
            </router-link>
        </div>
        <!-- End header -->

        <!-- Begin items -->
        <div class="flex gap-3 mt-3">
            <div v-for="index in 3" :key="index" class="bg-gray-100 p-2 rounded">

                <!-- Begin header -->
                <div class="mb-3 text-lg font-bold">Some category name goes here</div>
                <!-- End header -->

                <!-- Begin category items -->
                <div class="rounded flex grid grid-cols-3 gap-1">
                    <div v-for="index in 3" :key="index" class="card overflow-hidden">

                        <!-- Begin image -->
                        <router-link class="" :to="{ name: 'Item', params: { item: 78236748275482 }}">
                            <img class="object-cover w-full rounded" src="https://juasoonline.nyc3.digitaloceanspaces.com/juaso/items/products/product13_1.jpg" alt="product">
                        </router-link>
                        <!-- End image -->

                        <!-- Begin price -->
                        <div class="text-center mt-3">
                            <p class="text-xxs font-bold text-center"><span>GHS 2000.00</span></p>
                        </div>
                        <!-- End price -->

                    </div>
                </div>
                <!-- End category items -->

            </div>
        </div>
        <!-- End items -->

    </div>
    <!-- End contents -->

</template>

<script>
    export default {
        name: "TopRankings"
    }
</script>

<style scoped>

</style>