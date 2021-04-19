<template>

    <!-- Begin contents -->
    <div class="sticky top-0 z-40 bg-gray-50 border-b">
        <div class="container mx-auto flex items-center justify-between">

            <!-- Begin logo --->
            <div class="py-3">
                <router-link to="/" class="p-0 flex"><img :src="files.logo" alt="" class="h-10 py-1.5"></router-link>
            </div>
            <!-- End logo --->

            <!-- Begin user info -->
            <div class="text-xs dropMenu group">

                <!-- Begin user icon -->
                <button class="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <img class="h-8 w-8 rounded-full" :src="files.userIconMale" alt=""> <span class="ml-1 font-bold text-gray-500 text-xs">Hi! {{ authentication.state.user.attributes.first_name }}</span>
                </button>
                <!-- End user icon -->

                <!-- Begin user drop menu -->
                <div class="z-50 bg-white shadow-lg rounded right-48 w-52 mt-1 transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">

                    <!-- Begin header contents -->
                    <div class="m-3 flex">

                        <!-- Begin user icon -->
                        <div class="mr-4">
                            <div class="rounded-full">
                                <img :src="files.userIconMale" alt="" class="w-10">
                            </div>
                        </div>
                        <!-- End user icon -->

                        <!-- Begin user name/role -->
                        <div class="">
                            <h3 class="text-sm font-bold">Hi! {{ authentication.state.user.attributes.first_name }}</h3>
                            <p class="text-xs">{{ authentication.state.user.attributes.email }}</p>
                        </div>
                        <!-- End user name/role -->

                    </div>
                    <!-- End header contents -->

                    <!-- Begin nav list -->
                    <ul class="w-full dropMenu text-gray-600 border-t">
                        <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                          <router-link to="" class="flex hover:text-white hover:border-gray-600">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            My Account
                          </router-link>
                        </li>
                        <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                          <router-link to="" class="flex hover:text-white hover:border-gray-600">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Settings
                          </router-link>
                        </li>
                        <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                          <router-link to="" class="flex hover:text-white hover:border-gray-600">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            Supports
                          </router-link>
                        </li>

                        <li class="px-3 py-1.5 hover:bg-juaso-secondary border-t rounded-b text-red-600 hover:text-white">
                            <a @click="signOut" class="flex w-full inline-block py-2 text-xs font-medium cursor-pointer">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                Log Out
                            </a>
                        </li>
                    </ul>
                    <!-- End nav list -->

                </div>
                <!-- End user drop menu -->

            </div>
            <!-- End user info -->

        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    import { inject, reactive } from "vue";
    import router from "@/router";

    export default
    {
        setup()
        {
            const authentication = inject( 'authentication' );
            const files = reactive ({ userIconMale: '../assets/images/user-icon-male.png', logo: '../assets/images/logo.png' })

            const signOut = () =>
            {
                authentication.logoutUser().then(() => { router.replace('/'); })
            }

            return { files, authentication, signOut }
        }
    }
</script>

<style scoped>
    .dropMenu.li>ul                 { transform: translatex(100%) scale(0) }
    .dropMenu.li:hover>ul           { transform: translatex(101%) scale(1) }
    .dropMenu.li > button svg       { transform: rotate(-90deg) }
    .dropMenu.li:hover > button svg { transform: rotate(-270deg) }

    .group:hover .group-hover\:scale-100 { transform: scale(1) }
    .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
    .scale-0 { transform: scale(0) }
</style>