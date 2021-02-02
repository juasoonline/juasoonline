<template>

    <!-- Begin contents -->
    <main class="container mx-auto my-4">

        <!-- Begin category and slide contents -->
        <cats-and-ad-slides></cats-and-ad-slides>
        <!-- End category and slide contents -->

        <!-- Begin Juasoonline tags -->
        <juaso-tags></juaso-tags>
        <!-- End Juasoonline tags -->

        <!-- Begin items -->
        <section class="w-full my-2">
            <h4 class="font-bold mt-12 pb-2">Latest items</h4>

            <!-- Begin items list -->
            <div class="grid grid-cols-7 gap-4">
                <div v-for="item in items" :key="item.resource_id" class="card bg-white rounded overflow-hidden shadow-md mt-2 hover:shadow-2xl">
                    <router-link class="w-full object-cover" to="/item/975858275"><img v-bind:src="item.image" :alt="item.name"></router-link>
                    <div class="m-5">
                        <span class="text-gray-500 text-xs hover:text-red-500"><router-link class="w-full object-cover" to="/item/975858275">{{ item.name }}...</router-link></span>
                        <p class="font-bold block text-xs my-0.5"><router-link class="w-full object-cover hover:text-red-500" to="/item/975858275">GHS {{ item.sales_price }} <del class="ml-2 text-xs font-light text-gray-500 text-red-500">GHS {{ item.product_price }}</del></router-link></p>
                        <span class="block text-gray-500 text-xxs">{{ item.total_sold }} Sold</span>
                    </div>
                </div>
            </div>
            <!-- End items list -->

            <!-- Begin load more button -->
            <div class="my-10 flex justify-center"><button class="inline-block mr-1 px-7 py-2 text-xs font-medium leading-4 text-center text-white transition bg-red-500 rounded shadow ripple hover:bg-red-600">Load more</button></div>
            <!-- End load more button -->

        </section>
        <!-- End items -->

    </main>
    <!-- End contents -->

</template>

<script>
    import CatsAndAdSlides from "@/components/Home/CatsAndAdSlides";
    import JuasoTags from "@/components/Shared/JuasoTags";

    export default
    {
        name: "MainContents",
        components: { CatsAndAdSlides, JuasoTags },
        data()
        {
            return {
                items:
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
                    { resource_id: 12000000, image: "./assets/images/products/10.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 13000000, image: "./assets/images/products/11.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 14000000, image: "./assets/images/products/12.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 15000000, image: "./assets/images/products/13.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 17000000, image: "./assets/images/products/14.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 18000000, image: "./assets/images/products/15.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 19000000, image: "./assets/images/products/16.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 22000000, image: "./assets/images/products/17.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 23000000, image: "./assets/images/products/18.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 24000000, image: "./assets/images/products/19.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 25000000, image: "./assets/images/products/20.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 26000000, image: "./assets/images/products/21.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 27000000, image: "./assets/images/products/22.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 28000000, image: "./assets/images/products/23.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 29000000, image: "./assets/images/products/24.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 30000000, image: "./assets/images/products/25.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 31000000, image: "./assets/images/products/26.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 32000000, image: "./assets/images/products/27.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 33000000, image: "./assets/images/products/28.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                ]
            }
        }
    }
</script>

<style scoped>

</style>