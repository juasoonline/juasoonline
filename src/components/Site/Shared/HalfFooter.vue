<template>

    <!-- Begin lower footer contents -->
    <footer class="bg-juaso-primary 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">

        <!-- Begin company and site info -->
        <div class="w-2/3 px-1.5 py-10 m-auto text-gray-800 flex flex-wrap flex-col grid gap-6 grid-cols-2">

            <!-- Begin policies contents -->
            <div class="text-gray-100">
                <h1 class="font-bold mb-2">Company / Users Policies</h1>
                <p class="text-sm text-gray-300">
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/user-agreement">User Agreement,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/privacy-policy">Privacy Policy,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/terms-and-conditions">Terms and Conditions,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/disputes-and-reports">Disputes and Reports,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/orders-returns">Orders and Returns,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/shipping">Shipping,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/payment-policies">Payment Policies,</router-link>
                </p>
            </div>
            <!-- End policies contents -->

            <!-- Begin about us -->
            <div class="text-gray-300">
                <h1 class="font-bold mb-2">About Juasoonline</h1>
                <p class="text-sm text-gray-300">Juasoonline offers its millions of registered users a comprehensive selection of the latest consumer electronics, entertainment, fashion, Jewel / Watches and many more products. Juasoonline is consistently ranked... <router-link to="/about-juasoonline" class="hover:text-gray-400 font-bold">Read more</router-link></p>
            </div>
            <!-- End about us -->

            <!-- Begin category -->
            <div class="text-gray-300">
                <h1 class="font-bold mb-2">Category</h1>
                <p class="text-sm text-gray-300">
                    <router-link v-for="group in groups.categories" :key="group.attributes.resource_id" :to="{ name: 'Category', params: { category: group.attributes.resource_id, slug: group.attributes.slug }}" class="hover:text-juaso-secondary mr-1.5">{{ group.attributes.name }},</router-link>
                </p>
            </div>
            <!-- End category -->

            <!-- Begin quick links -->
            <div class="text-gray-300">
                <h1 class="font-bold mb-2">Quick Links</h1>
                <p class="text-sm text-gray-300">
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/about-juasoonline">About Us,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/mission-and-vision">Mission and Vision,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/contacts">Contact Us</router-link>
                </p>
            </div>
            <!-- End quick links -->

        </div>
        <!-- End company and site info -->

        <!-- Begin copyright -->
        <div class="w-2/3 px-1.5 m-auto">
            <div class="border-t border-gray-500"></div>
            <div class="flex m-auto sm:border-t border-gray-400 text-gray-400 text-sm flex-col">
                <div class="my-5">© Copyright. All Rights Reserved.</div>
            </div>
        </div>
        <!-- End copyright -->

    </footer>
    <!-- End lower footer contents -->

</template>

<script>
    import { reactive, ref, onBeforeMount } from "vue";
    import axios from "axios";

    export default
    {
        name: "HalfFooter",
        setup()
        {
            const groups = reactive({ categories: [] });
            const error = ref(null )

            onBeforeMount(() =>
            {
                axios({ method: 'GET', url: 'juaso/categories', headers: {} })
                    .then( response => { groups.categories = response.data.data })
                    .catch( error => { error.response })
            })

            return { groups, error }
        }
    }
</script>

<style scoped>
</style>