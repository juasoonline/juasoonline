<template>

    <!-- Begin content for large screens -->
    <div class="bg-white shadow-sm rounded mb-5 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
        <router-link to="/campaign/juasoonline-launch-promo">
            <div class="flex justify-between items-center grid grid-cols-2 gap-5 px-4 py-8">

                <!-- Begin promo header -->
                <div class="text-center">
                    <div class="text-gray-400 font-black text-4xl">Juasoonline Launch Sales</div>
                    <div class="text-gray-400 font-black text-sm py-2">Grab the best brands for a less price</div>
                    <div class="text-white bg-black font-bold mx-40 rounded-xl py-1 text-sm bg-opacity-25"><p class="">Limited Time: 15 Days from now</p></div>
                </div>
                <!-- End promo header -->

                <!-- Begin category items -->
                <div class="rounded flex grid grid-cols-4 gap-3">
                    <div v-for="index in 4" :key="index" class="card overflow-hidden text-white">

                        <!-- Begin image -->
                        <div class="">
                            <img class="object-cover w-full rounded" src="https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product5_1.jpg" alt="">
                        </div>
                        <!-- End image -->

                        <!-- Begin price -->
                        <div class="text-center mt-3">
                            <p class="text-xs font-black text-center">
                                <span>GHS 2000.00</span>
                            </p>
                        </div>
                        <!-- End price -->

                    </div>
                </div>
                <!-- End category items -->

            </div>
        </router-link>
    </div>
    <!-- End content for large screens -->

    <!-- Begin content for small screens -->
    <div class="bg-juaso-primary rounded mb-3 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block mx-1.5">
        <router-link to="/campaign/juasoonline-lunch-promo">
            <div class="p-4">

                <!-- Begin promo header -->
                <div class="text-white text-center mb-5">
                    <div class="px-10 font-black 2xl:text-xl xl:text-lg">Juasoonline Lunch Promo</div>
                    <div class="font-black text-sm">Grab the best brands for a less price</div>
                    <div class="bg-black rounded-lg mt-4 py-1 text-sm bg-opacity-25">
                        <p class="">Limited Time: 15 Days from now</p>
                    </div>
                </div>
                <!-- End promo header -->

                <!-- Begin category items -->
                <div class="rounded flex grid grid-cols-3 gap-3">
                    <div v-for="index in 6" :key="index" class="card overflow-hidden text-white">

                        <!-- Begin image -->
                        <div class="">
                            <img class="object-cover w-full rounded" src="https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product5_1.jpg" alt="product">
                        </div>
                        <!-- End image -->

                        <!-- Begin price -->
                        <div class="text-center mt-3">
                            <p class="text-xs font-black text-center"><span>GHS 2000.00</span></p>
                        </div>
                        <!-- End price -->

                    </div>
                </div>
                <!-- End category items -->

            </div>
        </router-link>
    </div>
    <!-- End content for small screens -->

</template>

<script>
    export default
    {
        name: "SpecialPromotion"
    }
</script>

<style scoped>
</style>