<template>

    <!-- Begin contents -->
    <div v-if="stats.loaded === true" class="flex bg-white border-t 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
        <div class="container mx-auto px-1.5">
            <div class="flex justify-between">

                <!-- Begin left menu -->
                <nav class="py-3">
                    <ul class="flex items-center">
                        <li class="topNave mr-4 pr-4 border-r border-gray-200">
                            <router-link class="flex items-center" to="">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600 h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                                <span class="text-gray-600">{{ stats.data.attributes[0].doing_business_as }}</span>
                            </router-link>
                        </li>
                        <li class="topNave mr-4 pr-4 border-r border-gray-200">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600 h-4 w-4 -mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
                                <p class="text-gray-600"><span class="mr-2">{{ stats.data.stats[0].items }}</span>Products</p>
                            </div>
                        </li>
                        <li class="topNave mr-4 pr-4 border-r border-gray-200">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600 h-4 w-4 -mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                                <p class="text-gray-600"><span class="mr-2">{{ stats.data.stats[0].followers }}</span>Followers</p>
                            </div>
                        </li>
                        <li class="topNave mr-4">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600 h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                                <p class="text-gray-600"><span class="mr-2">{{ stats.data.ratings[0].overall_rating }}</span>Positive Feedback</p>
                            </div>
                        </li>
                    </ul>
                </nav>
                <!-- End left menu -->

                <!-- Begin right menu -->
                <nav class="py-3">
                    <ul class="flex items-center">
                        <li class="topNave">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600 h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                                <span class="text-gray-600">Juasoonline Premium Store</span>
                            </div>
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
    import { useRoute } from "vue-router";
    import { onBeforeMount, reactive } from "vue";
    import axios from "axios";

    export default
    {
        name: "NavBar",
        setup()
        {
            const route = useRoute()

            const stats = reactive({ data: [], loaded: false })

            const getStats = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'business/stores/' + route.params.slug + '/stats' })
                    const data = await response.data
                    stats.data = data.data
                    stats.loaded = true
                }
                catch( err )
                {
                    stats.loaded = false
                }
            }

            onBeforeMount(async () =>
            {
                await getStats()
            })

            return { stats }
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