<template>

    <!-- Begin contents -->
    <section id="bottom-navigation" class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
        <div id="tabs" class="flex justify-between">
            <router-link to="home" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                <svg class="w-5 h-5 m-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                <span class="tab tab-home block text-xxs">Home</span>
            </router-link>
            <router-link to="categories" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                <svg class="w-5 h-5 m-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                <span class="tab tab-kategori block text-xxs">Category</span>
            </router-link>
            <router-link to="wishlist" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                <svg class="w-5 h-5 m-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                <span class="tab tab-whishlist block text-xxs">Wishlist</span>
            </router-link>
            <router-link to="account" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                <svg class="w-5 h-5 m-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span class="tab tab-account block text-xxs">Account</span>
            </router-link>
        </div>
    </section>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "MobileBottomNavBar"
    }
</script>

<style scoped>

</style>