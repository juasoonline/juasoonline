<template>

    <!-- Begin contents -->
    <div class="2xl:mt-2 xl:mt-3 lg:mt-3.5 bg-white rounded p-2">

        <!-- Begin header -->
        <div class="2xl:mb-2 xl:mb-2 lg:mb-2.5 flex justify-between items-center text-gray-600">
            <router-link to="/campaigns/top-rankings" class="flex justify-between items-center">
                <div class="font-black 2xl:text-xl xl:text-xl md:text-xl text-lg text-gray-700 flex items-center hover:text-gray-600">
                    <h3 class="">Top Rankings</h3>
                </div>
                <div class="text-xs hover:text-red-600">VIEW MORE</div>
            </router-link>
        </div>
        <!-- End header -->

        <!-- Begin ranks for 2xl and lg screens -->
        <swiper :slides-per-view="8" :space-between="5" :autoplay="{ autoplay: true }" class="rounded 2xl:block xl:hidden lg:hidden">
            <swiper-slide v-for="banner in AdBanners" :key="banner.resource_id" class="rounded">
                <div class="card bg-white overflow-hidden pb-1.5 text-center rounded">
                    <router-link to="/item/975858275">
                        <img v-bind:src="banner.image" :alt="banner.name" class="object-cover text-center mx-auto rounded">
                    </router-link>
                    <p class="font-bold mt-3 block text-xs">
                        <router-link class="text-xxs px-1 text-juaso-primary rounded" to="/item/975858275">GHS {{ banner.sales_price }}</router-link>
                    </p>
                </div>
            </swiper-slide>
        </swiper>
        <!-- End ranks for 2xl and lg screens -->

        <!-- Begin ranks for md screens -->
        <swiper :slides-per-view="6" :space-between="5" :autoplay="{ autoplay: true }" class="rounded 2xl:hidden xl:block lg:hidden">
            <swiper-slide v-for="banner in AdBanners" :key="banner.resource_id" class="rounded">
                <div class="card bg-white overflow-hidden pb-1.5 text-center rounded">
                    <router-link to="/item/975858275">
                        <img v-bind:src="banner.image" :alt="banner.name" class="object-cover text-center mx-auto rounded">
                    </router-link>
                    <p class="font-bold mt-3 block text-xs">
                        <router-link class="text-xxs px-1 text-juaso-primary rounded" to="/item/975858275">GHS {{ banner.sales_price }}</router-link>
                    </p>
                </div>
            </swiper-slide>
        </swiper>
        <!-- End ranks for md screens -->

        <!-- Begin ranks for md screens -->
        <swiper :slides-per-view="7" :space-between="5" :autoplay="{ autoplay: true }" class="rounded 2xl:hidden xl:hidden lg:block lg:my-2.5">
            <swiper-slide v-for="banner in AdBanners" :key="banner.resource_id" class="rounded">
                <div class="card bg-white overflow-hidden pb-1.5 text-center rounded">
                    <router-link to="/item/975858275">
                        <img v-bind:src="banner.image" :alt="banner.name" class="object-cover text-center mx-auto rounded">
                    </router-link>
                    <p class="font-bold mt-3 block text-xs">
                        <router-link class="text-xxs px-1 text-juaso-primary rounded" to="/item/975858275">GHS {{ banner.sales_price }}</router-link>
                    </p>
                </div>
            </swiper-slide>
        </swiper>
        <!-- End ranks for md screens -->

    </div>
    <!-- End contents -->

</template>

<script>
    import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

    import 'swiper/swiper.scss';

    SwiperCore.use( [ Autoplay, Navigation ] );

    export default
    {
        name: "TopRanking",
        components: { Swiper, SwiperSlide },
        data()
        {
            return {
                AdBanners:
                [
                    { resource_id: 20000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product12_1.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 30000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product12_2.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 40000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product12_3.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 50000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product12_4.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 60000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product12_5.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 10000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product15_1.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "230",  },
                    { resource_id: 70000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product7_1.webp", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 80000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product9_1.webp", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 90000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product11_1.webp", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 26000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product8_1.webp", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 27000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product4_1.webp", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 28000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product3_5.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 29000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product12_1.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 30000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product12_2.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 31000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product12_3.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 32000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product12_4.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 33000000, image: "https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product12_5.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                ],
            }
        }
    }
</script>

<style scoped>
</style>