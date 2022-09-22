<template>

    <!-- Begin contents -->
    <div class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden bg-white rounded p-5 mb-5">

        <!-- Begin header -->
        <div class="mb-3 py-2">
            <router-link to="/campaigns/top-rankings" class="flex justify-between items-center">
                <div class="font-black 2xl:text-xl xl:text-xl md:text-xl text-sm text-gray-700 flex items-center hover:text-gray-600">
                    <h3 class="">Featured Categories</h3>
                </div>
            </router-link>
        </div>
        <!-- End header -->

        <!-- Begin items -->
        <div class="flex gap-3 mt-3">
            <div v-for="( item, index ) in items.data" :key="index" class="bg-gray-100 p-2 rounded">

                <!-- Begin header -->
                <div class="mb-3 text-lg font-bold">{{ item.attributes.name }}</div>
                <!-- End header -->

                <!-- Begin category items -->
                <div class="rounded flex grid grid-cols-3 gap-1">
                    <router-link v-for="index in 3" :key="index" to="" class="card overflow-hidden">

                        <!-- Begin image -->
                        <div class="" :to="{ name: 'Item', params: { item: 78236748275482 }}">
                            <img class="object-cover w-full rounded" src="https://kyeiandamankwaa.com/juasoonline/resources/api/products/images/products/product15_1.jpg" alt="product">
                        </div>
                        <!-- End image -->

                        <!-- Begin price -->
                        <div class="text-center mt-3">
                            <p class="text-xxs font-bold text-center"><span>GHS 2000.00</span></p>
                        </div>
                        <!-- End price -->

                    </router-link>
                </div>
                <!-- End category items -->

            </div>
        </div>
        <!-- End items -->

    </div>
    <!-- End contents -->

</template>

<script>
    import { onBeforeMount, reactive, ref } from "vue";
    import axios from "axios";

    export default 
    {
        name: "TopRankings",

        setup()
        {
            const items = reactive({ data: [] })
            const error = ref( null )

            onBeforeMount( async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/campaigns/featured-categories?include=products' });
                    items.data = await response.data.data
                }
                catch (e)
                {
                    error.value = e
                }
            })

            return {
                items, error
            }
        }
    }
</script>

<style scoped>
</style>