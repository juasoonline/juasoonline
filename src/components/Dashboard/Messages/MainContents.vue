<template>

    <!-- Begin breadcrumb (Show for large screens / Hide for small screens) -->
    <section class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
        <div class="container mx-auto px-1.5">
            <nav class="relative select-none bg-grey lg:flex lg:items-stretch w-full">
                <div class="flex flex-no-shrink items-stretch text-xs h-12 items-center">
                    <router-link to="/" class="flex-no-grow flex-no-shrink relative hover:text-juaso-primary py-2 leading-normal text-gray-500 no-underline flex items-center hover:bg-grey-dark">
                        Home <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                    </router-link>
                    <router-link to="/profile" class="flex-no-grow flex-no-shrink relative hover:text-juaso-primary py-2 leading-normal text-gray-500 no-underline flex items-center hover:bg-grey-dark">
                        Message Center
                    </router-link>
                </div>
            </nav>
        </div>
    </section>
    <!-- End breadcrumb -->

    <!-- Begin main contents -->
    <main class="mb-4">

        <!-- Begin contents (Show for large screens / Hide for small screens) -->
        <section class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
            <div class="container mx-auto px-1.5">
                <div class="flex grid grid-cols-12 gap-4">

                    <!-- Begin left contents -->
                    <side-bar></side-bar>
                    <!-- End left contents -->

                    <!-- Begin right contents -->
                    <div class="2xl:col-span-10 xl:col-span-9 lg:col-span-9 border bg-white">
                        <div class="p-4 flex grid grid-cols-12 gap-10">



                        </div>
                    </div>
                    <!-- End right contents -->

                </div>
            </div>
        </section>
        <!-- End contents -->

        <!-- Begin contents (Show for small screens / Hide for big screens) -->
        <section class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block">
            <div class="px-2 mx-auto">

                <!-- Begin user actions -->
                <div class="bg-white rounded -mt-10 flex justify-between py-2">
                    <div class="mx-auto text-xxs py-2">
                        <router-link to="wishlist">
                            <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                            <p class="mx-auto mt-1">Wishlist</p>
                        </router-link>
                    </div>
                    <div class="mx-auto text-xxs py-2">
                        <router-link to="cart">
                            <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <p class="mx-auto mt-1">Cart</p>
                        </router-link>
                    </div>
                </div>
                <!-- End user actions -->

                <!-- Begin navigation contents -->
                <div class="mt-3">

                    <!-- Begin shop menu -->
                    <div class="bg-white rounded">
                        <div class="border-b">
                            <router-link to="orders" class="flex text-sm items-center p-3 cursor-pointer">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                                <span>My Orders</span>
                            </router-link>
                        </div>
                        <div class="border-b">
                            <router-link to="orders" class="flex text-sm items-center p-3 cursor-pointer">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                <span>My Favourite Store</span>
                            </router-link>
                        </div>
                        <div class="border-b">
                            <router-link to="orders" class="flex text-sm items-center p-3 cursor-pointer">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                <span>Message Center</span>
                            </router-link>
                        </div>
                        <div class="">
                            <router-link to="orders" class="flex text-sm items-center p-3 cursor-pointer">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Setting</span>
                            </router-link>
                        </div>
                    </div>
                    <!-- End shop menu -->

                    <!-- Begin user menu -->
                    <div class="bg-white rounded mt-3">
                        <div class="border-b">
                            <div to="orders" class="flex text-sm items-center p-3 cursor-pointer">
                                <span class="font-bold text-sm">My Account</span>
                            </div>
                        </div>
                        <div class="border-b">
                            <router-link to="" class="flex text-sm items-center p-3 cursor-pointer">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                <span>Edit Account</span>
                            </router-link>
                        </div>
                        <div class="border-b">
                            <router-link to="" class="flex text-sm items-center p-3 cursor-pointer">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                <span>Change Password</span>
                            </router-link>
                        </div>
                        <div class="border-b">
                            <router-link to="" class="flex text-sm items-center p-3 cursor-pointer">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>Change Email</span>
                            </router-link>
                        </div>
                        <div class="">
                            <router-link to="" class="flex text-sm items-center p-3 cursor-pointer">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Change Address</span>
                            </router-link>
                        </div>
                    </div>
                    <!-- End user menu -->

                    <!-- Begin sign-out action -->
                    <div class="mt-3 mb-14">
                        <div class="rounded">
                            <a @click="signOut" class="flex text-sm items-center p-3 cursor-pointer bg-red-600 justify-center rounded text-white">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                <span>Sign Out</span>
                            </a>
                        </div>
                    </div>
                    <!-- End sign-out action -->

                </div>
                <!-- End navigation contents -->

            </div>
        </section>
        <!-- End contents -->

    </main>
    <!-- End main contents -->

</template>

<script>
    import SideBar from "../Shared/SideBar";

    export default
    {
        name: "MainContents",
        components: { SideBar },
    }
</script>

<style scoped>

</style>