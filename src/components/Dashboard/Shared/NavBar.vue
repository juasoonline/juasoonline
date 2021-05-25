<template>

    <!-- Begin contents -->
    <div class="flex bg-juaso-primary border-b 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
        <div class="container mx-auto">
            <div class="flex justify-between">

                <!-- Begin left menu -->
                <nav class="py-3">
                    <ul class="flex items-center">
                        <li class="topNave mr-4">
                            <router-link class="navLink" to="/help">
                                <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span class="">Help</span>
                            </router-link>
                        </li>
                        <li class="topNave mr-4">
                            <router-link class="navLink" to="/buyer-protection">
                                <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
                                <span class="">Buyer Protection</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <!-- End left menu -->

                <!-- Begin right menu -->
                <nav class="py-3">
                    <ul class="flex items-center">
                        <li class="topNave mr-3">
                            <router-link class="navLink" to="/">
                                <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                <span class="">Sell on Juasoonline</span>
                            </router-link>
                        </li>
                        <li class="topNave">
                            <router-link class="navLink" to="/">
                                <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                <span class="">Download App</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <!-- End right menu -->

            </div>
        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    import { inject, reactive } from 'vue'
    // import router from "@/router";

    export default
    {
        name: "NavBar",
        setup()
        {
            const authentication = inject( 'authentication' );
            const files = reactive ({ userIconMale: '../assets/images/user-icon-male.png', logo: '../assets/images/logo.png' })

            const signOut = () => { authentication.logoutUser().then(() => { document.location.href = "" } )}
            return { authentication, signOut, files }
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