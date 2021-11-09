<template>

    <!-- Begin contents -->
    <section class="md:px-1.5 sm:px-1.5 xs:px-1.5 flex w-full">

        <!-- Begin categories nav bar -->
        <div class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden w-1/5 bg-white rounded">
            <categories-menu></categories-menu>
        </div>
        <!-- End categories nav bar -->

        <!-- Begin ads slides -->
        <div class="2xl:w-3/5 xl:w-3/5 lg:w-4/5 md:w-full sm:w-full xs:w-full rounded mx-3">

            <!-- Begin slider banners -->
            <Suspense>
                <template #default>
                    <ad-sliders class=""></ad-sliders>
                </template>
                <template #fallback>
                    <div class="mx-auto text-center">
                        <img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/loader.gif">
                    </div>
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
        <div class="2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden w-1/5 rounded">

            <!-- Begin user actions -->
            <div class="flex justify-center mb-2 items-center bg-white rounded py-6">
                <div class="bg-white rounded">

                    <!-- Begin logged in user contents -->
                    <div v-if="authentication.isAuthenticated()" class="justify-center text-center">

                        <!-- Begin user icon -->
                        <div class="self-center rounded-full">
                            <img src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/user-icon-male.png" alt="" class="m-auto w-16">
                        </div>
                        <!-- End user icon -->

                        <!-- Begin user name/role -->
                        <div class="mt-2">
                            <router-link to="/overview" class="">
                                <h3 class="text-sm font-bold text-gray-800">Hi! {{ authentication.state.user.name }}</h3>
                                <p class="text-sm text-gray-800">{{ authentication.state.user.email }}</p>
                            </router-link>
                        </div>
                        <!-- End user name/role -->

                        <!-- Begin other actions -->
                        <div class="flex grid grid-cols-3 gap-4 mt-5 text-sm">
                            <div class="">
                                <router-link to="/overview">
                                    <div class="bg-bg-1 bg-cover rounded-full h-12 w-12 pt-3 m-auto mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="m-auto text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    </div>
                                    <p>Account</p>
                                </router-link>
                            </div>
                            <div class="">
                                <router-link to="/orders">
                                    <div class="bg-bg-2 bg-cover rounded-full h-12 w-12 pt-3 m-auto mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="m-auto text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                    </div>
                                    <p>Orders</p>
                                </router-link>
                            </div>
                            <div class="">
                                <router-link to="/messages">
                                    <div class="bg-bg-3 bg-cover rounded-full h-12 w-12 pt-3 m-auto mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="m-auto text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                                    </div>
                                    <p>Messages</p>
                                </router-link>
                            </div>
                        </div>
                        <!-- End other actions -->

                    </div>
                    <!-- End logged in user contents -->

                    <!-- Begin guest user contents -->
                    <div v-else class="">
                        <div class="justify-center flex flex-col">
                            <router-link to="/login" class="self-center rounded-full shadow-lg text-gray-500 hover:shadow">
                                <svg class="w-16 bg-juaso-primary rounded-full text-white p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </router-link>
                            <router-link to="/login" class="self-center font-bold text-sm my-4 text-juaso-primary hover:text-juaso-secondary">Welcome to Juasoonline</router-link>
                            <div class="justify-center m-auto">
                                <router-link to="/register" class="inline-block mr-1 px-7 py-2 text-xs font-medium leading-4 text-center text-white transition bg-juaso-primary rounded shadow ripple hover:bg-juaso-secondary">Join</router-link>
                                <button @click="toggleSignInModal()" class="inline-block ml-1 px-7 py-2 text-xs font-medium leading-4 text-center text-white transition bg-juaso-secondary rounded shadow ripple hover:bg-juaso-primary">Login</button>
                            </div>
                        </div>
                    </div>
                    <!-- End guest user contents -->

                </div>
            </div>
            <!-- End user actions -->

            <!-- Begin new user coupon -->
            <div class="bg-white pb-5 rounded mt-4">

                <!-- Begin logged in user contents -->
                <div v-if="authentication.isAuthenticated()" class="">

                </div>
                <!-- End logged in user contents -->

                <!-- Begin guest user contents -->
                <div v-else class="">

                    <!-- Begin header -->
                    <div class="bg-coupon4-bg bg-cover rounded-t text-white p-3">
                        <div class="flex font-black items-center mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="bg-white rounded-full text-red-600 p-0.5 mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                            <span class="text-sm">Don't waste this discount!</span>
                        </div>
                        <p class="2xl:text-xs text-xxs">New user coupon can be used on any item</p>
                    </div>
                    <!-- End header -->

                    <!-- Begin coupon -->
                    <div class="bg-coupon2-bg bg-contain bg-no-repeat px-3 py-2 my-10 2xl:mx-10 mx-4">
                        <h4 class="text-white text-sm font-bold">GHS 10.00</h4>
                        <p class="text-white text-xxs">Orders over GHS 50.00</p>
                    </div>
                    <!-- End coupon -->

                    <!-- Begin action button -->
                    <div class="text-center 2xl:my-8 my-1">
                        <router-link to="/register" class="bg-coupon-bg bg-contain px-12 py-1 rounded-md font-bold text-white text-xs">GET AND USE NOW</router-link>
                    </div>
                    <!-- Begin action button -->

                </div>
                <!-- End guest user contents -->

            </div>
            <!-- End new user coupon -->

        </div>
        <!-- End user actions -->

    </section>
    <!-- End contents -->

    <!-- Begin sign in form modal -->
    <div class="">
        <div v-if="modal.showSignInModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex animated fadeIn faster">

            <!-- Begin modal -->
            <div class="relative w-auto my-6 mx-auto max-w-sm">
                <div class="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    <!-- Begin modal header -->
                    <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <div>
                            <router-link to="/">
                                <img src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/logo.png" class="2xl:w-32 xl:w-24 lg:w-18 md:w-24 sm:w-24 xs:w-24 mx-auto w-12 h-9.5">
                            </router-link>
                        </div>
                        <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleSignInModal()">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <!-- End modal header -->

                    <!-- Begin modal body -->
                    <div class="relative px-5 flex-auto">
                        <form @submit.prevent="signIn" class="">
                            <div class="mt-4 text-sm">

                                <!-- Begin title -->
                                <div class="max-w-lg text-center">
                                    <h3 class="font-bold text-lg text-gray-500 uppercase mb-3">Sign In</h3>
                                    <p> Please provide your email and password to log into your Juasoonline account: </p>
                                </div>
                                <!-- End title -->

                                <!-- Begin email -->
                                <div class="mt-2">
                                    <label class="text-gray-500 text-sm">Email Address</label>
                                    <div class="flex mt-3">
                                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                            <svg class="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <input v-model="loginData.email" type="email" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="example@example.com">
                                    </div>
                                </div>
                                <!-- End email -->

                                <!-- Begin password -->
                                <div class="mt-6">
                                    <div class="flex justify-between"><label class="text-gray-500 text-sm">Password</label></div>
                                    <div class="flex my-3">
                                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                        </div>
                                        <input v-model="loginData.password" type="password" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="password">
                                    </div>
                                    <router-link class="text-sm hover:text-juaso-secondary" to="/forgot-password">Forgot your password?</router-link>
                                </div>
                                <!-- End password -->

                                <!-- Begin sign in button  -->
                                <div class="rounded-b mt-3">
                                    <div class="flex items-center justify-end sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button v-if="loginData.isLoading === false" type="submit" class="w-full inline-flex justify-center rounded shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">Sign In</button>
                                        <button v-else disabled class="w-full inline-flex justify-center rounded shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">Logging In...</button>
                                    </div>
                                </div>
                                <!-- End sign in button -->

                            </div>
                        </form>
                    </div>
                    <!-- End modal body -->

                    <!-- Begin register link -->
                    <div class="my-3 mb-7 text-center text-sm">
                        Don't have an account yet? <router-link to="/register" class="text-juaso-primary hover:text-juaso-secondary">Register Here</router-link>
                    </div>
                    <!-- End register link -->

                </div>
            </div>
            <!-- End modal -->

        </div>
        <div v-if="modal.showSignInModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
    <!-- End sign in form modal -->

</template>

<script>
    import { inject, reactive } from "vue";

    import CategoriesMenu from "../Shared/CategoriesMenu"
    import AdSliders from "@/components/Site/Home/AdSliders";
    import TopRanking from "@/components/Site/Home/TopRanking";
    import { Notyf } from "notyf";

    export default
    {
        name: "CatsSlides",
        components: { CategoriesMenu, AdSliders, TopRanking },
        setup()
        {
            const authentication = inject( 'authentication' );
            const notification = new Notyf();

            const modal = reactive({ showSignInModal: false })
            const loginData = reactive({ email: "", password: "", isLoading: false })

            const toggleSignInModal = () =>
            {
                modal.showSignInModal = !modal.showSignInModal;
            }
            const signIn = () =>
            {
                loginData.isLoading = true
                authentication.loginUser( loginData )
                    .then(() =>
                    {
                        toggleSignInModal()
                    })
                    .catch(() =>
                    {
                        loginData.isLoading = false;
                        notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Email or password is incorrect</p>', duration: 8000, ripple: false, dismissible: true })
                    })
            }
            const signOut = () =>
            {
                authentication.logoutUser().then(() => { document.location.href = "" } )
            }

            return { authentication, modal, loginData, toggleSignInModal, signIn, signOut }
        },

        data()
        {
            return {
                category_icons:
                {
                    women_fashion: "https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/icons/category/women_fashion.png",
                    men_fashion: "https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/icons/category/men_fashion.png",
                    phones_more: "https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/icons/category/phones_more.png",
                    consumer_electronics: "https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/icons/category/consumer_electronics.png",
                    jewelry_watches: "https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/icons/category/jewelry_watches.png",
                    home_pets: "https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/icons/category/home_pets.png",
                    bags_shoes: "https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/icons/category/bags_shoes.png",
                    toys_kids_babies: "https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/icons/category/toys_kids_babies.png",
                    outdoor_fun_sports: "https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/icons/category/outdoor_fun_sports.png",
                    beauty_health_hair: "https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/icons/category/beauty_health_hair.png"
                }
            }
        }
    }
</script>

<style scoped>
</style>