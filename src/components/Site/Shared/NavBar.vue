<template>

    <!-- Begin contents -->
    <div class="flex bg-juaso-primary border-b 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
        <div class="container mx-auto px-1.5">
            <div class="flex justify-between">

                <!-- Begin left menu -->
                <nav class="py-3">
                    <ul class="flex items-center">
                        <li class="topNave mr-4">
                            <router-link class="navLink" to="/help">
                                <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span class="">Help</span>
                            </router-link>
                        </li>
                        <li class="topNave mr-4">
                            <router-link class="navLink" to="/buyer-protection">
                                <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
                                <span class="">Buyer Protection</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <!-- End left menu -->

                <!-- Begin right menu -->
                <nav class="py-3">
                    <ul class="flex items-center">

                        <li class="topNave mr-3">
                            <router-link class="navLink" to="/">
                                <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                <span class="">Sell on Juasoonline</span>
                            </router-link>
                        </li>
                        <li class="topNave mr-3">
                            <router-link class="navLink" to="/">
                                <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                <span class="">Download App</span>
                            </router-link>
                        </li>
                        <li class="topNave mr-3">
                            <router-link class="navLink" to="/wishlist">
                                <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                <span class="">Wishlist</span>
                            </router-link>
                        </li>

                        <!-- Begin user link -->
                        <li class="topNave dropMenu group inline-block">

                            <!-- Begin account link -->
                            <a class="navLink cursor-pointer">
                                <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                <span class="">Account</span>
                            </a>
                            <!-- End account link -->

                            <!-- Begin login user routes -->
                            <div v-if="authentication.isAuthenticated()" class="z-50 bg-white shadow-md rounded-b mt-3 w-52 transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">

                                <!-- Begin header contents -->
                                <div class="m-3 flex">

                                    <!-- Begin user icon -->
                                    <div class="mr-4">
                                        <div class="rounded-full">
                                            <img src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/user-icon-male.png" alt="" class="w-10">
                                        </div>
                                    </div>
                                    <!-- End user icon -->

                                    <!-- Begin user name/role -->
                                    <div class="">
                                        <router-link to="/overview">
                                            <h3 class="text-sm font-bold text-gray-800">Hi! {{ authentication.state.user.name }}</h3>
                                            <p class="text-xs text-gray-800">{{ authentication.state.user.email }}</p>
                                        </router-link>
                                    </div>
                                    <!-- End user name/role -->

                                </div>
                                <!-- End header contents -->

                                <!-- Begin nav list -->
                                <ul class="w-full dropMenu text-gray-600 border-t">
                                    <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                                        <router-link to="profile" class="flex hover:text-white hover:border-gray-600">
                                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                            <span>My Account</span>
                                        </router-link>
                                    </li>
                                    <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                                        <router-link to="cart" class="flex hover:text-white hover:border-gray-600">
                                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                            <span>Cart</span>
                                        </router-link>
                                    </li>
                                    <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                                        <router-link to="wishlist" class="flex hover:text-white hover:border-gray-600">
                                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                            <span>Wishlist</span>
                                        </router-link>
                                    </li>
                                    <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                                        <router-link to="wishlist" class="flex hover:text-white hover:border-gray-600">
                                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                            <span>Orders</span>
                                        </router-link>
                                    </li>

                                    <li class="px-3 py-1.5 hover:bg-juaso-secondary border-t rounded-b text-red-600 hover:text-white">
                                        <a @click="signOut" class="flex w-full inline-block py-2 text-xs font-medium cursor-pointer">
                                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                            <span>Log Out</span>
                                        </a>
                                  </li>
                                </ul>
                                <!-- End nav list -->

                            </div>
                            <!-- End login user routes -->

                            <!-- Begin guest user routes -->
                            <div v-else class="z-50 bg-white shadow-md rounded-b mt-3 w-52 transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top border-r border-l border-b">
                                <div class="text-juaso-primary font-bold pt-5 px-2.5 text-center">Welcome to Juasoonline</div>
                                <div class="m-auto flex pt-5 px-2.5 pb-3 border-b justify-center">
                                    <router-link to="/register" class="justify-start inline-block mr-1 px-7 py-1 text-xs font-medium leading-4 text-center text-white transition bg-juaso-primary rounded shadow ripple hover:bg-juaso-secondary">Register</router-link>
                                    <router-link to="/login" class="justify-end inline-block ml-1 px-7 py-1 text-xs font-medium leading-4 text-center text-white transition bg-juaso-secondary rounded shadow ripple hover:bg-juaso-primary">Login</router-link>
                                </div>
                                <ul class="w-full dropMenu text-gray-600">
                                    <li class="px-3 py-1.5 hover:bg-juaso-secondary"><router-link to="/orders" class="flex hover:text-white hover:border-gray-600">My Orders</router-link></li>
                                    <li class="px-3 py-1.5 hover:bg-juaso-secondary"><router-link to="/messages" class="flex hover:text-white hover:border-gray-600">Message Center</router-link></li>
                                    <li class="px-3 py-1.5 hover:bg-juaso-secondary"><router-link to="/wishlist" class="flex hover:text-white hover:border-gray-600">Wish List</router-link></li>
                                    <li class="px-3 py-1.5 hover:bg-juaso-secondary"><router-link to="/stores" class="flex hover:text-white hover:border-gray-600">My Favorite Stores</router-link></li>
                                    <li class="px-3 py-1.5 hover:bg-juaso-secondary"><router-link to="/coupons" class="flex hover:text-white hover:border-gray-600">My Coupons</router-link></li>
                                </ul>
                            </div>
                            <!-- End guest user routes -->

                        </li>
                        <!-- End user link -->

                    </ul>
                </nav>
                <!-- End right menu -->

            </div>
        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    import { inject } from 'vue'

    export default
    {
        name: "NavBar",
        setup()
        {
            const authentication = inject( 'authentication' );

            const signOut = () => { authentication.logoutUser().then(() => { document.location.href = "" } )}
            return { authentication, signOut }
        }
    }
</script>

<style scoped>
    .dropMenu.li>ul                 { transform: translatex(100%) scale(0) }
    .dropMenu.li:hover>ul           { transform: translatex(101%) scale(1) }
    .dropMenu.li > button svg       { transform: rotate(-90deg) }
    .dropMenu.li:hover > button svg { transform: rotate(-270deg) }

    .group:hover .group-hover\:scale-100 { transform: scale(1) }
    .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
    .scale-0 { transform: scale(0) }
</style>