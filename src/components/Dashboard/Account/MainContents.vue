<template>

    <!-- Begin contents -->
    <main class="my-4">

        <!-- Begin contents for large screens -->
        <section class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
            <div class="container mx-auto h-screen">
                <div class="flex grid grid-cols-12 gap-4">

                    <!-- Begin left contents -->
                    <div class="col-span-2">

                        <!-- Begin nav bar -->
                        <div class="bg-white border">
                            <div class="p-2 text-xs font-bold bg-gray-100">Account Settings</div>
                            <ul class="list-reset">
                                <li><router-link to="edit-profile" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Edit Member Profile</router-link></li>
                                <li><router-link to="change-email" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Change Email</router-link></li>
                                <li><router-link to="change-password" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Change Password</router-link></li>
                                <li><router-link to="edit-address" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Edit Addresses</router-link></li>
                            </ul>
                        </div>
                        <!-- End nav bar -->

                    </div>
                    <!-- End left contents -->

                    <!-- Begin right contents -->
                    <div class="col-span-10 border bg-white">
                        <div class="p-4 flex grid grid-cols-12 gap-10">

                            <!-- Begin profile image -->
                            <div class="col-span-2">

                                <!-- Begin profile pic -->
                                <div class="border p-1">
                                    <img src="https://scontent.facc6-1.fna.fbcdn.net/v/t1.18169-9/13659007_10154327395795996_6331869464865846575_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeF4HREV98ZHmwH3ckSdAQ_RwFYaqqOzebXAVhqqo7N5tUukbvtOBfCKoOSMbj6wfNc&_nc_ohc=f6CuriyusvYAX9AineU&_nc_ht=scontent.facc6-1.fna&oh=d89e0a6136fd12d9d3c8ac521462b318&oe=60BA1D02">
                                </div>
                                <!-- End profile pic -->

                            </div>
                            <!-- End profile image -->

                            <!-- Begin profile info -->
                            <div class="col-span-10">

                                <!-- Begin user info -->
                                <div class="flex justify-between">
                                    <div class="text-gray-600">
                                        <h3 class="font-bold text-lg">{{ profile.attributes.first_name }} {{ profile.attributes.last_name }}</h3>
                                        <p class="text-xxs font-bold mt-0.5">User ID: {{ profile.attributes.resource_id }}</p>
                                    </div>
                                    <div class="flex">
                                        <router-link to="edit-profile" class="font-light text-xxs text-juaso-primary hover:text-juaso-secondary">Edit Profile</router-link>
                                    </div>
                                </div>
                                <!-- End user info -->

                                <!-- Begin contact info -->
                                <div class="border-t mt-6 py-5">
                                    <h4 class="text-gray-400 text-xxxs mb-3">CONTACT INFORMATION</h4>

                                    <table class="table-auto text-xxs">
                                        <tbody>
                                            <tr>
                                                <td class="w-60 py-2 align-top">Phone</td>
                                                <td class="w-60 py-2 text-juaso-primary">{{ profile.attributes.mobile_phone }}</td>
                                            </tr>
                                            <tr>
                                                <td class="w-60 py-2 align-top">Permanent Address</td>
                                                <td class="w-60 py-2 text-gray-600">
                                                    {{ profile.permanent_address.postal_code }}<br>
                                                    {{ profile.permanent_address.street_name }} <br> {{ profile.delivery_address.city }}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="w-60 py-2 align-top">Delivery Address</td>
                                                <td class="w-60 py-2 text-gray-600">
                                                    {{ profile.delivery_address.postal_code }}<br>
                                                    {{ profile.delivery_address.street_name }} <br>
                                                    {{ profile.delivery_address.city }}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="w-60 py-2 align-top">Email</td>
                                                <td class="w-60 py-2 text-juaso-primary">{{ profile.attributes.email }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- End contact info -->

                                <!-- Begin contact info -->
                                <div class="border-t mt-6 py-5">
                                    <h4 class="text-gray-400 text-xxxs mb-3">BASIC INFORMATION</h4>

                                    <table class="table-auto text-xxs">
                                        <tbody>
                                            <tr class="">
                                                <td class="w-60 py-2">Gender</td>
                                                <td class="w-60 py-2 text-gray-600">Male</td>
                                            </tr>
                                            <tr>
                                                <td class="w-60 py-2">Date of birth</td>
                                                <td class="w-60 py-2 text-gray-600">12/03/2021</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- End contact info -->

                            </div>
                            <!-- End profile info -->

                        </div>
                    </div>
                    <!-- End right contents -->

                </div>
            </div>
        </section>
        <!-- End contents for large screens -->

        <!-- Begin contents for mobile screens -->
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
        <!-- End contents for mobile screens -->

    </main>
    <!-- End contents -->

</template>

<script>
    import { inject, onBeforeMount, reactive } from 'vue';
    import axios from "axios";
    import { Notyf } from "notyf";

    export default
    {
        name: "MainContents",
        setup()
        {
            const notification = new Notyf();
            const loader = reactive({ color: '#FFFFFF', size: '10px', loading: true, isLoading: false })
            const authentication = inject( 'authentication' )

            const profile = reactive({ attributes: [], permanent_address: [], delivery_address: [] })

            const addAddress = () =>
            {
                loader.isLoading = true
                axios({ method: 'POST', url: 'customer/' + authentication.state.user.include.store.attributes.resource_id + '/addresses', headers: { 'Authorization': 'Bearer ' + authentication.state.token }, data: {} })
                    .then( response =>
                    {
                        if ( response.data.status === 'Success' || response.data.code === 201 )
                        {
                            loader.isLoading = false
                        }
                    })
                    .catch()
            }

            onBeforeMount(() =>
            {
                axios({ method: 'GET', url: 'customers/' + authentication.state.user.attributes.resource_id + '?include=addresses', headers: { 'Authorization': 'Bearer ' + authentication.state.token } })
                    .then( response =>
                    {
                        profile.attributes = response.data.data.attributes
                        profile.permanent_address = response.data.data.include.addresses[0].attributes
                        profile.delivery_address = response.data.data.include.addresses[1].attributes
                    })
                    .catch( error => { error.response })
            })

            const signOut = () => { authentication.logoutUser().then(() => { document.location.href = "" } )}
            return { notification, loader, profile, addAddress, signOut }
        }
    }
</script>

<style scoped>
</style>