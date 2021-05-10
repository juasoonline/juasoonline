<template>

    <!-- Begin contents -->
    <main class="max-w-screen-xl container mx-auto my-4 h-screen">
        <div class="flex grid grid-cols-12 gap-4">

            <!-- Begin left contents -->
            <div class="col-span-2">

                <!-- Begin nav bar -->
                <div class="bg-white border">
                    <div class="p-2 text-xs font-bold bg-gray-100">Account Settings</div>
                    <ul class="list-reset">
                        <li><router-link to="edit-profile" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white border-l-2 border-juaso-primary">Edit Member Profile</router-link></li>
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

                        <!-- Begin title -->
                        <div class="text-lg text-gray-600 border-b pb-2">Edit Profile</div>
                        <!-- End title -->

                        <!-- Begin form -->
                        <div class="mt-6 text-sm">
                            <div class="">

                                <!-- Begin first name -->
                                <div class="mt-3">
                                    <label class="text-gray-500 text-xs" for="first_name">First Name</label>
                                    <div class="flex mt-1">
                                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b bg-gray-100">
                                            <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                        </div>
                                        <input type="text" id="first_name" v-model="profile.attributes.first_name" class="border px-3 py-1.5 w-full focus:outline-none" placeholder="Enter first name">
                                    </div>
                                </div>
                                <!-- End first name -->

                                <!-- Begin middle name -->
                                <div class="mt-3">
                                    <label class="text-gray-500 text-xs" for="first_name">Middle Name</label>
                                    <div class="flex mt-1">
                                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b bg-gray-100">
                                            <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                        </div>
                                        <input type="text" id="middle_name" v-model="profile.attributes.middle_name" class="border px-3 py-1.5 w-full focus:outline-none" placeholder="Enter Middle name">
                                    </div>
                                </div>
                                <!-- End middle name -->

                                <!-- Begin last name -->
                                <div class="mt-3">
                                    <label class="text-gray-500 text-xs" for="first_name">Last Name</label>
                                    <div class="flex mt-1">
                                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b bg-gray-100">
                                            <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                        </div>
                                        <input type="text" id="last_name" v-model="profile.attributes.last_name" class="border px-3 py-1.5 w-full focus:outline-none" placeholder="Last Middle name">
                                    </div>
                                </div>
                                <!-- End last name -->

                                <!-- Begin gender -->
                                <div class="mt-3">
                                    <label class="text-gray-500 text-xs" for="gender">Select Gender</label>
                                    <div class="flex mt-1">
                                      <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                                      </div>
                                      <select id="gender" class="appearance-none border px-3 py-1.5 w-full focus:outline-none">
                                        <option class="text-gray-100">Select region</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                      </select>
                                    </div>
                                </div>
                                <!-- End gender -->

                                <!-- Begin date of birth -->
                                <div class="mt-3">
                                    <label class="text-gray-500 text-xs" for="date_of_birth">Date of Birth</label>
                                    <div class="flex mt-1">
                                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b bg-gray-100">
                                            <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                        </div>
                                        <input type="text" id="date_of_birth" v-model="profile.attributes.date_of_birth" class="border px-3 py-1.5 w-full focus:outline-none" placeholder="Enter Middle name">
                                    </div>
                                </div>
                                <!-- End date of birth -->

                            </div>
                        </div>
                        <!-- End form -->

                    </div>
                    <!-- End profile info -->

                </div>
            </div>
            <!-- End right contents -->

        </div>
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