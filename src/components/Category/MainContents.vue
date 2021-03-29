<template>

    <!-- Begin contents -->
    <main class="container mx-auto my-4">
        <div class="flex flex-col grid gap-5 grid-cols-6">

            <!-- Begin left contents -->
            <aside class="bg-white rounded overflow-auto h-screen sticky top-0">

                <!-- Begin cat header -->
                <div class="bg-juaso-primary rounded-t">
                    <router-link to="/category/1234567890">
                        <div class="flex justify-start p-2.5 hover:bg-juaso-secondary rounded-t">
                            <svg class="w-5 h-5 mr-1.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                            <span class="text-sm font-bold text-white">Related Categories</span>
                        </div>
                    </router-link>
                </div>
                <!-- End cat header -->

                <!-- Begin cat nav -->
                <div>

                </div>
                <!-- End cat nav -->

            </aside>
            <!-- End left contents -->

            <!-- Begin right contents -->
            <div class="col-span-5">

                <!-- Begin breadcrumb -->
                <div class="text-xs text-gray-500 bg-white rounded p-4">
                    <router-link to="/category/1234567890" class="hover:text-red-500">
                        All Categories <i class="fal fa-chevron-right mx-2 text-xxxs"></i>
                    </router-link>
                    <router-link to="/category/1234567890" class="hover:text-red-500">
                        Cellphones & Telecommunications <i class="fal fa-chevron-right mx-2 text-xxxs"></i>
                    </router-link>
                    <router-link to="/category/1234567890" class="hover:text-red-500 font-extrabold">"Cellphones"</router-link> (552 Results)
                </div>
                <!-- End breadcrumb -->

                <!-- Begin sort and view type -->
                <div class="my-4">
                </div>
                <!-- End sort and view type -->

                <!-- Begin items list -->
                <div class="grid grid-cols-6 gap-4">
                    <div v-for="item in items" :key="item.resource_id" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                        <router-link class="w-full object-cover" to="/item/975858275"><img v-bind:src="item.image" :alt="item.name"></router-link>
                        <div class="m-5">
                            <span class="text-gray-500 text-xs hover:text-red-500"><router-link class="w-full object-cover" to="/item/975858275">{{ item.name }}...</router-link></span>
                            <p class="font-bold block text-xs my-0.5"><router-link class="w-full object-cover hover:text-red-500" to="/item/975858275">GHS {{ item.sales_price }} <del class="ml-2 text-xs font-light text-gray-500 text-red-500">GHS {{ item.product_price }}</del></router-link></p>
                            <span class="block text-gray-500 text-xxs">{{ item.total_sold }} Sold</span>
                        </div>
                    </div>
                </div>
                <!-- End items list -->

                <!-- Begin pagination -->
                <div class="text-xs text-gray-500 bg-white rounded p-4 my-5">
                    <div class="flex items-center justify-between">

                        <!-- Begin nav buttons -->
                        <div class="flex-1 flex justify-between sm:hidden">
                            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">Previous</a>
                            <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">Next</a>
                        </div>
                        <!-- End nav buttons -->

                        <!-- Begin pagination navs -->
                        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div><p class="text-sm text-gray-700">Showing <span class="font-medium"> 1 </span>to <span class="font-medium"> 10 </span>of <span class="font-medium"> 97 </span> results</p></div>
                            <div>
                                <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <span class="sr-only">Previous</span>
                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">1</a>
                                    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">2</a>
                                    <a href="#" class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
                                    <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
                                    <a href="#" class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">8</a>
                                    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">9</a>
                                    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">10</a>
                                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                      <span class="sr-only">Next</span>
                                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                      </svg>
                                  </a>
                                </nav>
                            </div>
                        </div>
                        <!-- End pagination navs -->

                    </div>
                </div>
                <!-- End pagination -->

            </div>
            <!-- End right contents -->

        </div>
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
                    { resource_id: 10000000, image: "../assets/images/products/1.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "230",  },
                    { resource_id: 20000000, image: "../assets/images/products/2.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 30000000, image: "../assets/images/products/3.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 40000000, image: "../assets/images/products/4.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 50000000, image: "../assets/images/products/5.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 60000000, image: "../assets/images/products/6.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 70000000, image: "../assets/images/products/7.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 80000000, image: "../assets/images/products/8.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 90000000, image: "../assets/images/products/9.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 12000000, image: "../assets/images/products/10.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 13000000, image: "../assets/images/products/11.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 14000000, image: "../assets/images/products/12.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 15000000, image: "../assets/images/products/13.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 17000000, image: "../assets/images/products/14.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 18000000, image: "../assets/images/products/15.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 19000000, image: "../assets/images/products/16.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 22000000, image: "../assets/images/products/17.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 23000000, image: "../assets/images/products/18.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 24000000, image: "../assets/images/products/19.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 25000000, image: "../assets/images/products/20.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 26000000, image: "../assets/images/products/21.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 27000000, image: "../assets/images/products/22.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 28000000, image: "../assets/images/products/23.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 29000000, image: "../assets/images/products/24.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 30000000, image: "../assets/images/products/25.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 31000000, image: "../assets/images/products/26.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 32000000, image: "../assets/images/products/27.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 33000000, image: "../assets/images/products/28.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                ]
            }
        }
    }
</script>

<style scoped>

</style>