<template>

    <!-- Begin contents -->
    <div class="bg-gray-50 border-b">
        <div class="max-w-screen-xl container mx-auto ">
            <nav class="relative select-none bg-grey lg:flex lg:items-stretch w-full">
                <div class="flex flex-no-shrink items-stretch text-xs h-12">
                    <router-link to="/account" class="flex-no-grow flex-no-shrink relative hover:text-juaso-primary py-2 leading-normal text-gray-500 no-underline flex items-center hover:bg-grey-dark">Account</router-link>
                    <router-link to="/cart" class="flex-no-grow flex-no-shrink relative hover:text-juaso-primary py-2 px-4 leading-normal text-gray-500 no-underline flex items-center hover:bg-grey-dark">Cart</router-link>
                    <router-link to="/orders" class="flex-no-grow flex-no-shrink relative hover:text-juaso-primary py-2 px-4 leading-normal text-gray-500 no-underline flex items-center hover:bg-grey-dark">Orders</router-link>
                    <router-link to="/wishlist" class="flex-no-grow flex-no-shrink relative hover:text-juaso-primary py-2 px-4 leading-normal text-gray-500 no-underline flex items-center hover:bg-grey-dark">Wish List</router-link>
                    <router-link to="/messages" class="flex-no-grow flex-no-shrink relative hover:text-juaso-primary py-2 px-4 leading-normal text-gray-500 no-underline flex items-center hover:bg-grey-dark">Message Center</router-link>
                    <router-link to="" class="flex-no-grow flex-no-shrink relative hover:text-juaso-primary py-2 px-4 leading-normal text-gray-500 no-underline flex items-center hover:bg-grey-dark">My Favourite Stores</router-link>
                </div>
            </nav>
        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "NavBar",
    }
</script>

<style scoped>
</style>