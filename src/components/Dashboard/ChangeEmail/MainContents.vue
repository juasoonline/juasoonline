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
                        <li><router-link to="edit-profile" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Edit Member Profile</router-link></li>
                        <li><router-link to="change-email" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white border-l-2 border-juaso-primary">Change Email</router-link></li>
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
                        <div class="text-lg text-gray-600">Change Email</div>
                        <!-- End title -->

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