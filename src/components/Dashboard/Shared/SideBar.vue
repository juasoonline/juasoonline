<template>

    <!-- Begin  contents -->
    <div class="2xl:col-span-2 xl:col-span-3 lg:col-span-3">
        <div class="sticky inset-x-0 top-20 left-0">

            <!-- Begin nav bar -->
            <div class="bg-white border">
                <div class="p-2 text-xs font-bold bg-gray-100">My Account</div>
                <ul class="list-reset">
                    <li><router-link to="/overview" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Overview</router-link></li>
                    <li><router-link to="/profile" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Profile</router-link></li>
                    <li><router-link to="/orders" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Orders</router-link></li>
                    <li><router-link to="/cart" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Cart</router-link></li>
                    <li><router-link to="/wishlist" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Wish list</router-link></li>
                    <li><router-link to="/mystores" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">My Favourite Stores</router-link></li>
                    <li><router-link to="/messages" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Message center</router-link></li>
                    <li><router-link to="/coupons" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Coupons</router-link></li>
                    <hr>
                    <li><router-link to="" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Help center</router-link></li>
                    <li><router-link to="" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Suggestion</router-link></li>
                    <li><router-link to="" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Manage reports</router-link></li>
                </ul>
            </div>
            <!-- End nav bar -->

        </div>
    </div>
    <!-- End  contents -->

</template>

<script>
    export default
    {
        name: "SideBar"
    }
</script>

<style scoped>

</style>