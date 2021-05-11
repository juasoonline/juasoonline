<template>

    <!-- Begin contents -->
    <div class="2xl:p-4 xl:p-4 lg:p-4 md:px-1.5 sm:px-1.5 xs:px-1.5 bg-white rounded">

        <!-- Begin header -->
        <div class="flex justify-between items-center mb-3">
            <div class="font-bold">Quick Deals</div>
            <div class="text-xs"><router-link to="">View More</router-link></div>
        </div>
        <!-- End header -->

        <!-- Begin item list -->
        <div class="text-justify">
            <swiper :slides-per-view="9" :space-between="5" :autoplay="{ autoplay: true }">
                <swiper-slide v-for="item in items.data" :key="item.resource_id">
                    <div class="card bg-white overflow-hidden text-center mx-0.5">
                        <router-link to="/item/975858275">
                            <img v-bind:src="item.image" :alt="item.name" class="rounded border mb-4">
                        </router-link>
                        <div class="font-bold block text-xs flex justify-between">
                            <router-link class="text-xs text-gray-600" to="/item/975858275">GHS {{ item.sales_price }}</router-link>
                            <p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-15%</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!-- End item list -->

    </div>
    <!-- End contents -->

</template>

<script>
    import SwiperCore, { Autoplay, Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import 'swiper/swiper.scss';
    import { reactive } from "vue";

    SwiperCore.use( [ Autoplay, Navigation ] );

    export default
    {
        name: "QuickDeals",
        components: { Swiper, SwiperSlide },

        setup()
        {
            const items = reactive({ data: [ { resource_id: 10000000, image: "../assets/images/products/1.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "230",  },{ resource_id: 20000000, image: "../assets/images/products/2.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 30000000, image: "../assets/images/products/3.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 40000000, image: "../assets/images/products/4.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 50000000, image: "../assets/images/products/5.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 60000000, image: "../assets/images/products/6.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 70000000, image: "../assets/images/products/7.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 80000000, image: "../assets/images/products/8.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 90000000, image: "../assets/images/products/9.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 26000000, image: "../assets/images/products/21.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  }, ] })

            return { items }
        }
    }
</script>

<style scoped>

</style>