<template>

    <!-- Begin contents for large screens -->
    <section class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden bg-gray-50 border-b">
        <div class="container mx-auto">
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
    </section>
    <!-- End contents for large screens -->

    <!-- Begin contents for mobile screens -->
    <section class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block bg-gray-200">
        <div class="mx-2">

            <!-- Begin user welcome -->
            <div class="pt-7 pb-12">
                <h2 class="font-bold text-sm">Welcome! {{ authentication.state.user.attributes.first_name }}</h2>
            </div>
            <!-- Begin user welcome -->

        </div>
    </section>
    <!-- End contents for mobile screens -->

</template>

<script>
    import { inject } from "vue";

    export default
    {
        name: "NavBar",
        setup()
        {
            const authentication = inject( 'authentication' );
            return { authentication }
        }
    }
</script>

<style scoped>
</style>