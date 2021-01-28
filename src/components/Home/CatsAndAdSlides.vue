<template>

    <!-- Begin contents -->
    <section class="flex flex-col grid gap-5 grid-cols-10">

        <!-- Begin categories navbar -->
        <div class="col-span-2 rounded">
            <categories-menu></categories-menu>
        </div>
        <!-- End categories navbar -->

        <!-- Begin ads slides -->
        <div class="col-span-6">

            <!-- Begin slider banners -->
            <ad-sliders></ad-sliders>
            <!-- End slider banners -->

            <!-- Begin ads -->
            <flash-deals></flash-deals>
            <!-- Begin ads -->

        </div>
        <!-- End ads slides -->

        <!-- Begin user actions -->
        <div class="col-span-2">

            <!-- Begin user actions -->
            <div class="flex justify-center mb-2 items-center bg-white rounded py-6">
                <div class="bg-white rounded">
                    <div class="justify-center flex flex-col">
                        <router-link to="/login" class="self-center rounded-full shadow-lg text-gray-500 hover:shadow"><svg class="w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></router-link>
                        <router-link to="/login" class="self-center font-bold text-sm my-4  text-blue-darker hover:text-red-500">Welcome to Juasoonline</router-link>
                        <div class="justify-center m-auto">
                            <router-link to="/register" class="inline-block mr-1 px-7 py-2 text-xs font-medium leading-4 text-center text-white transition bg-red-500 rounded shadow ripple hover:bg-red-600">Join</router-link>
                            <router-link to="/login" class="inline-block ml-1 px-7 py-2 text-xs font-medium leading-4 text-center text-white transition bg-gray-500 rounded shadow ripple hover:bg-gray-600">Login</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End user actions -->

            <!-- Begin ads flash -->
            <div v-for="adBanner in adBanners" :key="adBanner.resource_id" class="flex justify-center items-center mt-3 rounded">
                <router-link to="/store/1234567890"><img :src="adBanner.image" :alt="adBanner.name" class="rounded"></router-link>
            </div>
            <!-- End ads flash -->

        </div>
        <!-- End user actions -->

    </section>
    <!-- End contents -->

</template>

<script>
    import CategoriesMenu from "../Shared/CategoriesMenu"
    import AdSliders from "@/components/Home/AdSliders";
    import FlashDeals from "@/components/Home/FlashDeals";

    export default
    {
        name: "CatsSlides",
        components: { CategoriesMenu, AdSliders, FlashDeals },
        data()
        {
            return {
              adBanners:
              [
                  { resource_id: 10000000, image: "./assets/images/adBanners/banner1.jpg", name: "Ad banner name 1"  },
                  { resource_id: 20000000, image: "./assets/images/adBanners/banner2.jpg", name: "Ad banner name 2",  },
              ]
            }
        }
    }
</script>

<style scoped>
</style>