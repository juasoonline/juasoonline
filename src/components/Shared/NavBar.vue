<template>

    <!-- Begin contents -->
    <div class="flex bg-juaso-primary border-b">
        <div class="container mx-auto hidden lg:block">
            <div class="flex flex-row justify-between pt-3 pb-1">

                <!-- Begin left menu -->
                <nav>
                    <div class="container">
                        <div class="justify-items-end">
                            <ul class="">
                                <li class="topNave mr-3">
                                    <router-link to="/help" class="navLink">
                                        <svg class="w-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Help</span>
                                    </router-link>
                                </li>
                                <li class="topNave">
                                    <router-link to="/buyer-protection" class="navLink border-l">
                                        <svg class="w-4 mx-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                        </svg>
                                        <span>Buyer Protection</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- End left menu -->

                <!-- Begin right menu -->
                <nav>
                    <div class="container">
                        <div class="justify-items-end">
                            <ul class="text-gray-600 group inline-block">
                                <li class="topNave mr-3">
                                    <router-link to="/" class="navLink">
                                        <svg class="w-4 mx-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                        <span>Sell on Juasoonline</span>
                                    </router-link>
                                </li>
                                <li class="topNave mr-3">
                                    <router-link to="/" class="navLink border-l">
                                        <svg class="w-4 mx-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>                               </svg>
                                        <span>Download App</span>
                                    </router-link>
                                </li>
                                <li class="topNave mr-3">
                                    <router-link to="/wishlist" class="navLink border-l">
                                        <svg class="w-4 mx-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                        <span>Wishlist</span>
                                    </router-link>
                                </li>
                            </ul>
                            <div class="topNave dropMenu group inline-block">
                                <router-link to="#" class="navLink border-l">
                                    <svg class="w-4 mx-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span class="mr-2">Account</span>
                                    <span>
                                        <svg class="fill-current mt-0.5 h-3 w-3 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </span>
                                </router-link>
                                <div class="z-50 bg-white shadow-md rounded-b right-48 w-52 mt-3 border-r border-l border-b transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">
                                    <div class="text-juaso-primary font-bold pt-5 px-2.5 text-center">Welcome to Juasoonline</div>
                                    <div class="m-auto flex pt-5 px-2.5 pb-3 border-b justify-center">
                                        <router-link to="/register" class="justify-start inline-block mr-1 px-7 py-1 text-xs font-medium leading-4 text-center text-white transition bg-juaso-primary rounded shadow ripple hover:bg-juaso-secondary">Join</router-link>
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
                            </div>
                        </div>
                    </div>
                </nav>
                <!-- End end menu -->

            </div>
        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "NavBar"
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