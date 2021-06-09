<template>

    <!-- Begin contents -->
    <section class="md:px-1.5 sm:px-1.5 xs:px-1.5 flex flex-col grid gap-2 grid-cols-12 w-full">

        <!-- Begin categories navbar -->
        <div class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden 2xl:col-span-2 xl:col-span-2 lg:col-span-3 h-full bg-white rounded">
            <categories-menu></categories-menu>
        </div>
        <!-- End categories navbar -->

        <!-- Begin ads slides -->
        <div class="2xl:col-span-8 xl:col-span-8 lg:col-span-9 md:col-span-12 sm:col-span-12 xs:col-span-12 h-full rounded">

            <!-- Begin slider banners -->
            <Suspense>
                <template #default>
                    <ad-sliders class=""></ad-sliders>
                </template>
                <template #fallback>
                    <div class="text-center align-middle">Loading...</div>
                </template>
            </Suspense>
            <!-- End slider banners -->

            <!-- Begin ads -->
            <top-ranking class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden"></top-ranking>
            <!-- Begin ads -->

            <!-- Begin category menu for mobile -->
            <div class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block">
                <div class="my-4 text-center bg-white rounded px-1.5 py-3">

                    <!-- Begin categories -->
                    <div class="text-center grid gap-1 grid-cols-5 mb-2">
                        <div class="mb-2.5">
                            <router-link to="">
                                <img class="w-8 h-8 mx-auto mb-1" :src="category_icons.women_fashion" />
                                <p class="text-xxs text-gray-600">Women's Fashion</p>
                            </router-link>
                        </div>
                        <div class="mb-2.5">
                            <router-link to="">
                                <img class="w-8 h-8 mx-auto mb-1" :src="category_icons.men_fashion" />
                                <p class="text-xxs text-gray-600">Men's Fashion</p>
                            </router-link>
                        </div>
                        <div class="mb-2.5">
                            <router-link to="">
                                <img class="w-8 h-8 mx-auto mb-1" :src="category_icons.phones_more" />
                                <p class="text-xxs text-gray-600">Phones & More</p>
                            </router-link>
                        </div>
                        <div class="mb-2.5">
                            <router-link to="">
                                <img class="w-8 h-8 mx-auto mb-1" :src="category_icons.consumer_electronics" />
                                <p class="text-xxs text-gray-600">Consumer Electronics</p>
                            </router-link>
                        </div>
                        <div class="mb-2.5">
                            <router-link to="">
                                <img class="w-8 h-8 mx-auto mb-1" :src="category_icons.bags_shoes" />
                                <p class="text-xxs text-gray-600">Bags & Shoes</p>
                            </router-link>
                        </div>
                        <div class="mb-2.5">
                            <router-link to="">
                                <img class="w-8 h-8 mx-auto mb-1" :src="category_icons.home_pets" />
                                <p class="text-xxs text-gray-600">Home, Pet & Appliances</p>
                            </router-link>
                        </div>
                        <div class="mb-2.5">
                            <router-link to="">
                                <img class="w-8 h-8 mx-auto mb-1" :src="category_icons.jewelry_watches" />
                                <p class="text-xxs text-gray-600">Jewelry & Watches</p>
                            </router-link>
                        </div>
                        <div class="mb-2.5">
                            <router-link to="">
                                <img class="w-8 h-8 mx-auto mb-1" :src="category_icons.toys_kids_babies" />
                                <p class="text-xxs text-gray-600">Toys, Kids & Babies</p>
                            </router-link>
                        </div>
                        <div class="mb-2.5">
                            <router-link to="">
                                <img class="w-8 h-8 mx-auto mb-1" :src="category_icons.outdoor_fun_sports" />
                                <p class="text-xxs text-gray-600">Outdoor Fun & Sports</p>
                            </router-link>
                        </div>
                        <div class="mb-2.5">
                            <router-link to="">
                                <img class="w-8 h-8 mx-auto mb-1" :src="category_icons.beauty_health_hair" />
                                <p class="text-xxs text-gray-600">Beauty, Health, Hair</p>
                            </router-link>
                        </div>
                    </div>
                    <!-- End categories -->

                    <!-- Begin call to action button -->
                    <div class="flex items-center text-center mx-auto w-full">
                        <router-link to="categories" class="bg-juaso-primary text-white text-xxs px-3 py-2 rounded w-full">
                            View all categories
                        </router-link>
                    </div>
                    <!-- End call to action button -->

                </div>
            </div>
            <!-- End category menu for mobile -->

        </div>
        <!-- End ads slides -->

        <!-- Begin user actions -->
        <div class="2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden 2xl:col-span-2 xl:col-span-2 lg:col-span-2 h-full bg-white rounded">

            <!-- Begin user actions -->
            <div class="flex justify-center mb-2 items-center bg-white rounded py-6">
                <div class="bg-white rounded">
                    <div class="justify-center flex flex-col">
                        <router-link to="/login" class="self-center rounded-full shadow-lg text-gray-500 hover:shadow">
                            <svg class="w-16 bg-juaso-primary rounded-full text-white p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </router-link>
                        <router-link to="/login" class="self-center font-bold text-sm my-4  text-juaso-primary hover:text-juaso-secondary">Welcome to Juasoonline</router-link>
                        <div class="justify-center m-auto">
                            <router-link to="/register" class="inline-block mr-1 px-7 py-2 text-xs font-medium leading-4 text-center text-white transition bg-juaso-primary rounded shadow ripple hover:bg-juaso-secondary">Join</router-link>
                            <router-link to="/login" class="inline-block ml-1 px-7 py-2 text-xs font-medium leading-4 text-center text-white transition bg-juaso-secondary rounded shadow ripple hover:bg-juaso-primary">Login</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End user actions -->

            <!-- Begin ads flash -->
            <div v-for="banner in banners" :key="banner.resource_id" class="flex justify-center items-center mt-3 rounded">
<!--                <router-link to="/store/1234567890"><img v-bind:src="banner.image" :alt="banner.name" class="rounded"></router-link>-->
            </div>
            <!-- End ads flash -->

        </div>
        <!-- End user actions -->

    </section>
    <!-- End contents -->

</template>

<script>
    import CategoriesMenu from "../Shared/CategoriesMenu"
    import AdSliders from "@/components/Site/Home/AdSliders";
    import TopRanking from "@/components/Site/Home/TopRanking";

    export default
    {
        name: "CatsSlides",
        components: { CategoriesMenu, AdSliders, TopRanking },
        data()
        {
            return {
                banners:
                [
                    { resource_id: 10000000, image: "https://assets.juasoonline.com/juasoonline/assets/images/ads/right/banner1.jpg", name: "Ad banner name 1"  },
                    { resource_id: 20000000, image: "https://assets.juasoonline.com/juasoonline/assets/images/ads/right/banner2.jpg", name: "Ad banner name 2"  },
                ],
                category_icons:
                {
                    women_fashion: "https://assets.juasoonline.com/juasoonline/assets/images/icons/category/women_fashion.png",
                    men_fashion: "https://assets.juasoonline.com/juasoonline/assets/images/icons/category/men_fashion.png",
                    phones_more: "https://assets.juasoonline.com/juasoonline/assets/images/icons/category/phones_more.png",
                    consumer_electronics: "https://assets.juasoonline.com/juasoonline/assets/images/icons/category/consumer_electronics.png",
                    jewelry_watches: "https://assets.juasoonline.com/juasoonline/assets/images/icons/category/jewelry_watches.png",
                    home_pets: "https://assets.juasoonline.com/juasoonline/assets/images/icons/category/home_pets.png",
                    bags_shoes: "https://assets.juasoonline.com/juasoonline/assets/images/icons/category/bags_shoes.png",
                    toys_kids_babies: "https://assets.juasoonline.com/juasoonline/assets/images/icons/category/toys_kids_babies.png",
                    outdoor_fun_sports: "https://assets.juasoonline.com/juasoonline/assets/images/icons/category/outdoor_fun_sports.png",
                    beauty_health_hair: "https://assets.juasoonline.com/juasoonline/assets/images/icons/category/beauty_health_hair.png"
                }
            }
        }
    }
</script>

<style scoped>
</style>