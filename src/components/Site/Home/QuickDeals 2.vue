<template>

    <!-- Begin contents -->
    <div class="2xl:p-4 xl:p-4 lg:p-4 md:px-1.5 sm:px-1.5 xs:px-1.5 md:mx-1.5 sm:mx-1.5 xs:mx-1.5 bg-white rounded">

        <!-- Begin header -->
        <div class="flex justify-between items-center mb-3">
            <div class="font-bold">Quick Deals</div>
            <div class="text-xs"><router-link to="">View More</router-link></div>
        </div>
        <!-- End header -->

        <!-- Begin item list -->
        <div class="text-justify">
            <vueper-slides autoplay :visible-slides="3">
                <vueper-slide v-for="item in items.data" :key="item.resource_id" :image="item.image" />
            </vueper-slides>
        </div>
        <!-- End item list -->

    </div>
    <!-- End contents -->

</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    // import 'vueperslides/dist/vueperslides.css'

    import { reactive } from "vue";

    export default
    {
        name: "QuickDeals",
        components: { VueperSlides, VueperSlide },

        setup()
        {
            const items = reactive({ data: [ { resource_id: 10000000, image: "../assets/images/products/1.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "230",  },{ resource_id: 20000000, image: "../assets/images/products/2.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 30000000, image: "../assets/images/products/3.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 40000000, image: "../assets/images/products/4.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 50000000, image: "../assets/images/products/5.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 60000000, image: "../assets/images/products/6.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 70000000, image: "../assets/images/products/7.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 80000000, image: "../assets/images/products/8.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 90000000, image: "../assets/images/products/9.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },{ resource_id: 26000000, image: "../assets/images/products/21.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  }, ] })
            return { items }
        }
    }
</script>

<style scoped>

</style>