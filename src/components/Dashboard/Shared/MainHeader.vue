<template>

    <!-- Begin contents for large screens -->
    <section class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden sticky top-0 z-40 bg-gray-50 border-b">
        <div class="container mx-auto flex items-center justify-between">

            <!-- Begin logo --->
            <div class="py-3">
                <router-link to="/" class="p-0 flex"><img :src="files.logo" alt="" class="h-10 py-1.5"></router-link>
            </div>
            <!-- End logo --->

            <!-- Begin user info -->
            <div class="text-xs dropMenu group">

                <!-- Begin user icon -->
                <button class="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <img class="h-8 w-8 rounded-full" :src="files.userIconMale" alt=""> <span class="ml-1 font-bold text-gray-500 text-xs">Hi! {{ authentication.state.user.name }}</span>
                </button>
                <!-- End user icon -->

                <!-- Begin user drop menu -->
                <div class="z-50 bg-white shadow-lg rounded right-48 w-52 mt-1 transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">

                    <!-- Begin header contents -->
                    <div class="m-3 flex">

                        <!-- Begin user icon -->
                        <div class="mr-4">
                            <div class="rounded-full">
                                <img :src="files.userIconMale" alt="" class="w-10">
                            </div>
                        </div>
                        <!-- End user icon -->

                        <!-- Begin user name/role -->
                        <div class="">
                            <h3 class="text-sm font-bold">Hi! {{ authentication.state.user.name }}</h3>
                            <p class="text-xs">{{ authentication.state.user.email }}</p>
                        </div>
                        <!-- End user name/role -->

                    </div>
                    <!-- End header contents -->

                    <!-- Begin nav list -->
                    <ul class="w-full dropMenu text-gray-600 border-t">
                        <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                            <router-link to="account" class="flex hover:text-white hover:border-gray-600">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                My Account
                            </router-link>
                        </li>
                        <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                            <router-link to="cart" class="flex hover:text-white hover:border-gray-600">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                Cart
                            </router-link>
                        </li>
                        <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                            <router-link to="wishlist" class="flex hover:text-white hover:border-gray-600">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                Wishlist
                            </router-link>
                        </li>
                        <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                            <router-link to="wishlist" class="flex hover:text-white hover:border-gray-600">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                Orders
                            </router-link>
                        </li>

                        <li class="px-3 py-1.5 hover:bg-juaso-secondary border-t rounded-b text-red-600 hover:text-white">
                            <a @click="signOut" class="flex w-full inline-block py-2 text-xs font-medium cursor-pointer">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                Log Out
                            </a>
                        </li>
                    </ul>
                    <!-- End nav list -->

                </div>
                <!-- End user drop menu -->

            </div>
            <!-- End user info -->

        </div>
    </section>
    <!-- End contents for large screens -->

    <!-- Begin contents for mobile screens -->
    <section class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block sticky top-0 z-40 bg-gray-50">
        <div class="shadow-md px-2 py-3 mx-auto">

            <!-- Begin logo --->
            <div class=""><router-link to="/" class="p-0 flex"><img :src="files.logo" alt="" class="w-20"></router-link></div>
            <!-- End logo --->

        </div>
    </section>
    <!-- End contents for mobile screens -->

</template>

<script>
    import { inject, reactive } from "vue";

    export default
    {
        setup()
        {
            const authentication = inject( 'authentication' );
            const files = reactive ({ userIconMale: 'https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/user-icon-male.png', logo: 'https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/logo.png' })

            const signOut = () => { authentication.logoutUser().then(() => { document.location.href = "" } )}
            return { files, authentication, signOut }
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