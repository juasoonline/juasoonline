<template>

    <!-- Begin contents -->
    <main class="container mx-auto my-4">

        <!-- Begin item contents -->
        <section class="bg-white rounded">
            <div class="flex grid grid-cols-12">

                <!-- Begin item images -->
                <div class="col-span-4 p-4">
                    <div class="justify-center items-center border border-gray-100 rounded mb-2">
                        <img :src="items[1].image" alt="" class="rounded">
                    </div>
                    <div class="flex justify-center items-center rounded border border-gray-100">
                        <a v-for="image in items" :key="image.resource_id" href="#" class=""><img :src="image.image" alt="" class="rounded"></a>
                    </div>
                </div>
                <!-- End item images -->

                <!-- Begin item info -->
                <div class="col-span-6 p-4 text-gray-600">

                    <!-- Begin item name -->
                    <div class="text-xl font-bold pb-3">
                        <h2 class="text-2xl">Marshall Kilburn Portable Wireless Speaker</h2>
                        <div class="text-xs font-light mt-1">
                            <span class="mr-3 hover:text-red-500"><router-link to="/store/1234567890" class="inline-flex py-0.5 px-5 font-bold items-center border rounded text-xxxs text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">All Product KABFARMS</router-link></span>
                            <span class="mr-3 font-bold border-r pr-3">Brand: <a href="#" class="hover:text-red-500">Kodak</a></span>
                            <span class="mr-3 hover:text-red-500"><a href="#">200 Reviews</a></span>
                            <span class="mr-3 hover:text-red-500"><a href="#">(120 Orders)</a></span>
                        </div>
                    </div>
                    <!-- End item name -->

                    <!-- Begin item price -->
                    <div class="flex text-center border-b border-t py-4 border-gray-100">
                        <span class="font-bold text-xl">GHS 23,000</span>
                        <span class="text-gray-600 mx-3 text-xs py-1.5"><del>GHS 23,000</del></span>
                        <span class=""><p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-15%</p></span>
                    </div>
                    <!-- End item price -->

                    <!-- Begin buying options -->
                    <div class="h-80"></div>
                    <!-- End buying options -->

                    <!-- Begin action button -->
                    <div class="flex inline-block mt-5">
                        <button type="button" class="inline-flex items-center px-16 py-2 border border-transparent rounded shadow-sm text-sm 2xl:font-bold text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Buy Now
                        </button>
                        <button type="button" class="inline-flex items-center px-16 py-2 border border-transparent rounded shadow-sm text-sm 2xl:font-bold text-white bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-3 ">
                            Add to Cart
                        </button>
                        <button type="button" class="inline-flex items-center px-5 py-2 border border rounded text-sm font-medium text-gray-500 bg-white-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            12.10K
                        </button>
                    </div>
                    <!-- End action button -->

                </div>
                <!-- End item info -->

                <!-- Begin recommended items -->
                <div class="col-span-2 p-4 justify-center">

                    <!-- Begin buyer guarantees -->
                    <div class="">

                        <!-- Begin 24/7 help -->
                        <div class="flex mb-3 bg-gray-200 rounded p-2">
                            <svg class="w-16 h-16 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            <span class="text-gray-500">
                                <h3 class="text-sm font-bold text-gray-600">24/7 Help Center</h3>
                                <p class="text-xs">Round-the-clock assistance for a smooth shopping experience.</p>
                            </span>
                        </div>
                        <!-- End 24/7 help -->

                        <!-- Begin safe payment -->
                        <div class="flex mb-3 bg-gray-200 rounded p-2">
                            <svg class="w-16 h-16 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                            <span class="text-gray-500">
                                <h3 class="text-sm font-bold text-gray-600">Convenient payment</h3>
                                <p class="text-xs">Pay with the popular and secure payment methods or on delivery</p>
                            </span>
                        </div>
                        <!-- End safe payment -->

                        <!-- Begin shop with confidence -->
                        <div class="flex mb-3 bg-gray-200 rounded p-2">
                            <svg class="w-16 h-16 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <span class="text-gray-500">
                                <h3 class="text-sm font-bold text-gray-600">Shop with Confidence</h3>
                                <p class="text-xs">Our Buyer Protection covers your purchase from click to delivery.</p>
                            </span>
                        </div>
                        <!-- End shop with confidence -->

                        <!-- Begin products counts -->
                        <div class="flex mb-3 bg-gray-200 rounded p-2">
                            <svg class="w-16 h-16 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                            <span class="text-gray-500">
                                <h3 class="text-sm font-bold text-gray-600">Over 1 million items</h3>
                                <p class="text-xs">With over 1 million items, there's always something on sale!</p>
                            </span>
                        </div>
                        <!-- End products counts -->

                    </div>
                    <!-- End buyer guarantees -->

                    <div class="">
                    </div>
                </div>
                <!-- End recommended items -->

            </div>
        </section>
        <!-- End item contents -->

        <!-- Begin item review and specifications -->
        <section class="flex grid grid-cols-6 gap-5 my-4">

            <!-- Begin left contents -->
            <div class="bg-white rounded col-span-1">

            </div>
            <!-- End left contents -->

            <!-- Begin right contents -->
            <div class="bg-white rounded col-span-5">

                <!-- Begin tab headers -->
                <!-- End tab headers -->

            </div>
            <!-- End right contents -->

        </section>
        <!-- End item review and specifications -->

    </main>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "MainContents",
        data()
        {
            return {
                items:
                [
                    { resource_id: 10000000, image: "./assets/images/products/details/1.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "230",  },
                    { resource_id: 20000000, image: "./assets/images/products/details/2.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 30000000, image: "./assets/images/products/details/3.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 40000000, image: "./assets/images/products/details/4.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 50000000, image: "./assets/images/products/details/5.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 60000000, image: "./assets/images/products/details/6.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                ]
            }
        }
    }
</script>

<style scoped>
</style>