<template>

    <!-- Begin contents -->
    <div class="sticky top-0 z-40 bg-white border-t shadow-lg">
        <div class="container mx-auto px-1.5">
            <div class="text-sm text-gray-600 flex justify-between">
                <div class="flex">
                    <div class="text-center px-10 py-4 border-l border-r border-gray-200 hover:bg-gray-100 cursor-pointer">
                        <router-link to="" class="truncate">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                        </router-link>
                    </div>
                    <div class="flex overflow-x-auto">
                        <div class="dropdown px-10 py-4 border-r border-gray-200 hover:bg-gray-100 cursor-pointer">
                            <router-link to="" class="inline-flex items-center">
                                <p class="my-auto truncate mr-2">Products</p>
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                            </router-link>
                            <div class="dropdown-menu bg-white w-auto absolute hidden text-gray-700 z-0 mt-4 -ml-10 shadow-md">
                                <div class="megadrop rounded-r border shadow-sm grid gap-2 grid-cols-5">
                                    <div class="col p-5" v-for="category in categories.data" :key="category.attributes.resource_id">

                                        <!-- Begin category -->
                                        <router-link :to="{ name: 'Category', params: { category: category.attributes.resource_id, slug: category.attributes.slug }}">
                                            <div class="border-b pb-1 mb-1">
                                                <h3 class="text-gray-500 text-sm font-bold hover:text-juaso-primary">{{ category.attributes.name }}</h3>
                                            </div>
                                        </router-link>
                                        <!-- End category -->

                                        <!-- Begin subcategory -->
                                        <ul class="">
                                            <li v-for="subcategory in category.subcategories" :key="subcategory.attributes.resource_id" class="text-gray-500 text-sm hover:text-juaso-primary py-0.5">

                                                <!-- Begin subcategory menu link -->
                                                <router-link :to="{ name: 'Subcategory', params: { category: subcategory.attributes.resource_id, slug: subcategory.attributes.slug }}">
                                                    {{ subcategory.attributes.name }}
                                                </router-link>
                                                <!-- End subcategory menu link -->

                                            </li>
                                        </ul>
                                        <!-- End subcategory -->

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="text-center px-10 py-4 border-r border-gray-200 hover:bg-gray-100 cursor-pointer">
                        <router-link to="" class="truncate">
                            <span>New Arrivals</span>
                        </router-link>
                    </div>
                    <div class="text-center px-10 py-4 border-r border-gray-200 hover:bg-gray-100 cursor-pointer">
                        <router-link to="" class="truncate">
                            <span>Flash Sales</span>
                        </router-link>
                    </div>
                </div>
                <div class="text-center px-10 py-4 border-l border-r border-gray-200 hover:bg-gray-100 cursor-pointer">
                    <router-link to="" class="flex items-center truncate">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" /></svg>
                        <span>Follow</span>
                    </router-link>
                </div>
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
        name: "MainMenu",
        setup()
        {
            const route = useRoute()

            const categories = reactive({ data: [], loaded: false })

            const getCategories = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'business/stores/' + route.params.slug + '/categories' })
                    const data = await response.data
                    categories.data = data.data
                    categories.loaded = true
                }
                catch( err )
                {
                    categories.loaded = false
                }
            }

            onBeforeMount(async () =>
            {
                await getCategories()
            })

            return { categories }
        }
    }
</script>

<style scoped>
    .dropdown:hover .dropdown-menu { display: block; }

    .menu { position: relative; }
    .menu > li > .megadrop { visibility: hidden; position: absolute; list-style: none; top: 0px; left: 100%; width: 700px; min-height: 100%; text-align: left; margin-top:30px; padding: 15px; z-index: 99; overflow: hidden; background-color: #ffffff; }
    .menu > li:hover .megadrop { opacity: 1; visibility: visible; margin-top: -8px; }
    .menu ul li:hover:after { color: #227087; }
    .menu .col { float: left; color: white; }
    .menu .col ul { padding: 0; margin: 0; }
    .menu .col ul li { list-style: none; }
    .menu .col ul li a { display: block; }
    .menu > li > ul li ul, .menu li >ul li, .menu > li > .megadrop, .menu > li > ul, .menu > li { transition: all 0.2s ease-in-out; -moz-transition: all 0.2s ease-in-out; -webkit-transition: all 0.2s ease-in-out; -ms-transition: all 0.2s ease-in-out; -o-transition: all 0.2s ease-in-outs; }
</style>