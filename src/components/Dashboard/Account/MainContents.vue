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
                        <li><a href="#" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white border-l-2 border-juaso-primary">Edit Member Profile</a></li>
                        <li><a href="#" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Change Email</a></li>
                        <li><a href="#" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Change Password</a></li>
                        <li><a href="#" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Edit Addresses</a></li>
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
                        <div class="flex">
                            <div class="text-gray-600">
                                <h4 class="font-bold">Micheal Kabutey</h4>
                                <p class="text-xxxs font-bold mt-0.5">User ID: 284582768385</p>
                            </div>
                            <div class="flex text-center mt-1.5">
                                <svg class="w-3.5 h-3.5 mr-1 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <p class="font-light text-xxs">Dzorwulu, Accra</p>
                            </div>
                        </div>
                        <!-- End user info -->

                        <!-- Begin contact info -->
                        <div class="border-t mt-6 py-5">
                            <h4 class="text-gray-400 text-xxxs mb-3">CONTACT INFORMATION</h4>

                            <table class="table-auto text-xxs">
                                <tbody>
                                    <tr class="">
                                        <td class="w-60 py-2">Phone</td>
                                        <td class="w-60 py-2 text-juaso-primary">+233 244 647 602</td>
                                    </tr>
                                    <tr>
                                        <td class="w-60 py-2">Permanent Address</td>
                                        <td class="w-60 py-2 text-gray-600">45th Avenue, Lakeside Estate <br> Community 4</td>
                                    </tr>
                                    <tr>
                                        <td class="w-60 py-2">Delivery Address</td>
                                        <td class="w-60 py-2 text-gray-600">45th Avenue, Lakeside Estate <br> Community 4</td>
                                    </tr>
                                    <tr>
                                        <td class="w-60 py-2">Email</td>
                                        <td class="w-60 py-2 text-juaso-primary">billyston@gmail.com</td>
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
    </main>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "MainContents"
    }
</script>

<style scoped>
</style>