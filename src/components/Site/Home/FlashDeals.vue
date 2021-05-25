<template>

    <!-- Begin contents -->
    <div class="mt-2 bg-white rounded p-2">

        <!-- Begin header -->
        <div class="2xl:mb-2 xl:mb-2 lg:mb-2.5 flex justify-between items-center text-gray-600">
            <h3 class="font-bold">Top Rankings</h3>
            <p class="text-xxs"><router-link to="#">View more</router-link></p>
        </div>
        <!-- End header -->

        <!-- Begin ranks for 2xl and lg screens -->
        <swiper :slides-per-view="12" :space-between="5" :autoplay="{ autoplay: true }" class="rounded 2xl:block xl:hidden lg:hidden">
            <swiper-slide v-for="banner in AdBanners" :key="banner.resource_id" class="rounded">
                <div class="card bg-white overflow-hidden border pb-1.5 border-gray-100 text-center rounded">
                    <router-link to="/item/975858275"><img v-bind:src="banner.image" :alt="banner.name" class="rounded"></router-link>
                    <p class="font-bold block text-xs"><router-link class="text-xxs px-1 text-juaso-primary rounded" to="/item/975858275">GHS {{ banner.sales_price }}</router-link></p>
                </div>
            </swiper-slide>
        </swiper>
        <!-- End ranks for 2xl and lg screens -->

        <!-- Begin ranks for md screens -->
        <swiper :slides-per-view="8" :space-between="5" :autoplay="{ autoplay: true }" class="rounded 2xl:hidden xl:block lg:hidden">
            <swiper-slide v-for="banner in AdBanners" :key="banner.resource_id" class="rounded">
                <div class="card bg-white overflow-hidden border pb-1.5 border-gray-100 text-center rounded">
                    <router-link to="/item/975858275"><img v-bind:src="banner.image" :alt="banner.name" class="rounded"></router-link>
                    <p class="font-bold block text-xs"><router-link class="text-xxs px-1 text-juaso-primary rounded" to="/item/975858275">GHS {{ banner.sales_price }}</router-link></p>
                </div>
            </swiper-slide>
        </swiper>
        <!-- End ranks for md screens -->

        <!-- Begin ranks for md screens -->
        <swiper :slides-per-view="6" :space-between="5" :autoplay="{ autoplay: true }" class="rounded 2xl:hidden xl:hidden lg:block">
            <swiper-slide v-for="banner in AdBanners" :key="banner.resource_id" class="rounded">
                <div class="card bg-white overflow-hidden border pb-1.5 border-gray-100 text-center rounded">
                    <router-link to="/item/975858275"><img v-bind:src="banner.image" :alt="banner.name" class="rounded"></router-link>
                    <p class="font-bold block text-xs"><router-link class="text-xxs px-1 text-juaso-primary rounded" to="/item/975858275">GHS {{ banner.sales_price }}</router-link></p>
                </div>
            </swiper-slide>
        </swiper>
        <!-- End ranks for md screens -->

    </div>
    <!-- End contents -->

</template>

<script>
    import SwiperCore, { Autoplay, Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import 'swiper/swiper.scss';

    SwiperCore.use( [ Autoplay, Navigation ] );

    export default
    {
        name: "FlashDeals",
        components: { Swiper, SwiperSlide },
        data()
        {
            return {
                AdBanners:
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
                    { resource_id: 26000000, image: "../assets/images/products/21.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 27000000, image: "../assets/images/products/22.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 28000000, image: "../assets/images/products/23.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 29000000, image: "../assets/images/products/24.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 30000000, image: "../assets/images/products/25.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 31000000, image: "../assets/images/products/26.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 32000000, image: "../assets/images/products/27.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 33000000, image: "../assets/images/products/28.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                ],
            }
        }
    }
</script>

<style scoped>

</style>