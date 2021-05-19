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

                <!-- Begin main contents -->
                <div class="mt-5">
                    Main contents
                </div>
                <!-- End main contents -->

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

            return { notification, loader, profile, addAddress }
        }
    }
</script>

<style scoped>
</style>