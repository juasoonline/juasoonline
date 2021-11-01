<template>

    <!-- Begin contents -->
    <main class="2xl:container xl:container lg:container 2xl:my-4 xl:my-4 lg:my-4 mx-auto px-1.5">
        <div class="2xl:flex xl:flex lg:flex my-4">

            <!-- Begin left contents -->
            <aside class="mr-5 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden 2xl:w-2/12 xl:w-1/5 lg:w-1/5">
                <div class="sticky inset-x-0 top-20 left-0">
                    <div class="bg-white rounded-b shadow-lg">

                        <!-- Begin cat header -->
                        <div class="bg-juaso-primary rounded-t">
                            <router-link to="">
                                <div class="flex justify-start p-2.5 hover:bg-juaso-secondary rounded-t">
                                    <svg class="w-5 h-5 mr-1.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                                    <span class="text-sm font-bold text-white">Related Categories</span>
                                </div>
                            </router-link>
                        </div>
                        <!-- End cat header -->

                        <!-- Begin cat nav -->
                        <div class="p-3 h-96 overflow-y-scroll">
                            <div v-if="menus.loaded === true">
                                <div class="flex font-bold text-sm items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    {{ menus.group.name }}
                                </div>
                                <div class="ml-5 py-1 text-xs">
                                <ul>
                                    <li v-for="( category ) in menus.categories" :key="category.attributes.resource_id" class="py-1">
                                        <router-link :to="{ name: 'Category', params: { category: category.attributes.resource_id, slug: category.attributes.slug }}" class="flex font-bold text-xs items-center hover:text-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 -ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                            {{ category.attributes.name }}
                                        </router-link>
                                        <ul class="ml-3">
                                            <li v-for="( subcategory ) in category.include.subcategories" :key="subcategory.attributes.resource_id" class="my-1 ml-1 hover:text-red-600">
                                                <router-link :to="{ name: 'Subcategory', params: { category: subcategory.attributes.resource_id, slug: subcategory.attributes.slug }}">
                                                    {{ subcategory.attributes.name }}
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            </div>
                            <div v-else>
                                <bullet-list-loader viewBox="0 0 250 100" primaryColor="#f3f3f3" secondaryColor="#cccccc"></bullet-list-loader>
                            </div>
                        </div>
                        <!-- End cat nav -->

                    </div>
                </div>
            </aside>
            <!-- End left contents -->

            <!-- Begin right contents -->
            <div class="2xl:w-10/12 xl:w-4/5 lg:w-4/5 md:w-full sm:w-full xs:w-full">

                <!-- Begin breadcrumb -->
                <div class="text-xs text-gray-500">
                    <router-link to="/categories" class="hover:text-red-500">All Categories <i class="fal fa-chevron-right mx-2 text-xxxs"></i></router-link>
                    <span class="hover:text-red-500 font-extrabold">"{{ menus.group.name }}"</span>
                </div>
                <!-- End breadcrumb -->

                <!-- Begin sort and view type -->
                <div class="mt-5 mb-4">
                </div>
                <!-- End sort and view type -->

                <!-- Begin items list -->
                <!-- End items list -->

            </div>
            <!-- End right contents -->

        </div>
    </main>
    <!-- End contents -->

</template>

<script>
    import { computed, onBeforeMount, onMounted, onUnmounted, reactive, ref} from "vue";
    import axios from "axios";
    import { useRoute } from 'vue-router'
    import { BulletListLoader } from 'vue-content-loader'

    export default
    {
        name: "MainContents",
        components: { BulletListLoader },
        setup ()
        {
            const route = useRoute()
            const menus = reactive({ group: [], categories: [], loaded: false })
            const brands = reactive({ brands: [], loaded: false })
            const product = reactive({ items: [], loaded: false })
            const currentPage = ref(0)
            const totalPages = ref()
            const isInitialRequestLoading = ref(true)
            const isLoading = ref(false )

            const getMenus = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/groups/' + route.params.category + '?include=categories.subcategories' })
                    const data = await response.data
                    menus.group = data.data.attributes
                    menus.categories = data.data.include.categories
                    menus.loaded = true
                }
                catch( err )
                {
                    menus.loaded = false
                }
            }
            const getBrands = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/categories/' + route.params.category + '/products/brands' })
                    const data = await response.data
                    brands.brands = data.data
                    brands.loaded = true
                }
                catch( err )
                {
                    brands.loaded = false
                }
            }
            const getItems = async () =>
            {
                currentPage.value++
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/categories/' + route.params.category + '/products' })
                    const parsedResponse = await response.data
                    product.items = [ ...product.items, ...parsedResponse.data ]
                    totalPages.value = parsedResponse.meta.last_page
                    product.loaded = true
                }
                catch( err )
                {
                    product.loaded = false
                }
            }
            const handleScroll = async () =>
            {
                if (( window.scrollY + window.innerHeight ) >= document.body.offsetHeight )
                {
                    if ( hasFetchedAllData.value || isLoading.value ) { return }
                    isLoading.value = true
                    await getItems()
                    isLoading.value = false
                }
            }
            const hasFetchedAllData = computed(() =>
            {
                return currentPage.value === totalPages.value && !isLoading.value
            })

            onBeforeMount(async () =>
            {
                await getMenus()
                await getBrands()
                await getItems()
                isInitialRequestLoading.value = false
            })
            onMounted(() =>
            {
                window.addEventListener('scroll', handleScroll)
            })
            onUnmounted(() =>
            {
                window.removeEventListener('scroll', handleScroll)
            })

            return { menus, brands, product, isInitialRequestLoading, isLoading }
        }
    }
</script>

<style scoped>
</style>