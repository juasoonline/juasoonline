<template>

    <!-- Begin contents -->
    <div class="mt-3 bg-white rounded p-2">
        <carousel :settings="settings" :breakpoints="breakpoints">
            <slide v-for="banner in AdBanners" :key="banner.resource_id">
                <div class="card bg-white overflow-hidden border pb-1.5 border-gray-100">
                    <router-link to="/item/975858275"><img v-bind:src="banner.image" :alt="banner.name"></router-link>
                    <p class="font-bold block text-xs"><router-link class="text-xxs bg-red-500 px-1 text-white rounded" to="/item/975858275">GHS {{ banner.sales_price }}</router-link></p>
                </div>
            </slide>

            <template #addons>
                <navigation></navigation>
            </template>
        </carousel>
    </div>
    <!-- End contents -->

</template>

<script>
    import  'vue3-carousel/dist/carousel.css'
    import { Carousel, Navigation, Slide } from "vue3-carousel";

    export default
    {
        name: "FlashDeals",
        components: { Carousel, Slide, Navigation },
        data()
        {
            return {
                AdBanners:
                [
                    { resource_id: 10000000, image: "./assets/images/products/1.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "230",  },
                    { resource_id: 20000000, image: "./assets/images/products/2.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 30000000, image: "./assets/images/products/3.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 40000000, image: "./assets/images/products/4.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 50000000, image: "./assets/images/products/5.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 60000000, image: "./assets/images/products/6.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 70000000, image: "./assets/images/products/7.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 80000000, image: "./assets/images/products/8.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 90000000, image: "./assets/images/products/9.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 26000000, image: "./assets/images/products/21.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 27000000, image: "./assets/images/products/22.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 28000000, image: "./assets/images/products/23.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 29000000, image: "./assets/images/products/24.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 30000000, image: "./assets/images/products/25.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 31000000, image: "./assets/images/products/26.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 32000000, image: "./assets/images/products/27.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 33000000, image: "./assets/images/products/28.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                ],
                settings: { itemsToShow: 1, snapAlign: "center" },
                breakpoints: { 1024: { itemsToShow: 8, snapAlign: "start" } }
            }
        }
    }
</script>

<style scoped>

</style>