<template>

    <!-- Begin contents -->
    <section id="bottom-navigation" class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block block fixed inset-x-0 bottom-0 z-40 bg-white shadow">
        <div id="tabs" class="flex justify-between">
            <router-link to="/" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 border-r">
                <svg class="w-5 h-5 m-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
                <span class="text-xs">Home</span>
            </router-link>
            <router-link to="/categories" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 border-r">
                <svg class="w-5 h-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span class="text-xs">Categories</span>
            </router-link>
            <router-link to="/wishlist" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 border-r">
                <svg class="w-5 h-5 m-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                <span class="text-xs">Wishlist</span>
            </router-link>
            <router-link to="/profile" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                <svg class="w-5 h-5 m-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span class="text-xs">Account</span>
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