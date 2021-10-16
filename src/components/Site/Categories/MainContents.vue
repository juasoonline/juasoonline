<template>

    <!-- Begin contents -->
    <main class="2xl:container xl:container lg:container md:w-screen sm:w-screen xs:w-screen mx-auto my-4 px-1.5">

        <!-- Begin menu -->
        <div class="bg-white sticky inset-x-0 top-20 left-0 shadow-lg md:overflow-x-scroll sm:overflow-x-scroll xs:overflow-x-scroll w-full">
            <div class="flex 2xl:grid 2xl:grid-cols-7 xl:grid xl:grid-cols-7 lg:grid lg:grid-cols-7">
                <div v-for="group in data.categories" :key="group.attributes.resource_id" :href="'#' + group.attributes.resource_id" class="p-5 border hover:border-red-400 hover:border-2 items-center">
                    <a class="text-center"><p class="text-xs font-bold">{{ group.attributes.name }}</p></a>
                </div>
                <div class="text-center p-5 border">
                    <p class="text-xs font-bold">More...</p>
                </div>
            </div>
        </div>
        <!-- End menu -->

        <!-- Begin categories -->
        <div class="bg-white w-full mt-4">
            <div class="p-5">
                <div v-for="group in data.categories" :key="group.attributes">
                    <h2 v-bind:id="group.attributes.resource_id" class="text-red-500 text-xl">{{ group.attributes.name }}</h2>
                    <div class="megadrop grid gap-6 2xl:grid-cols-7 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 border-b py-5 mb-5">
                        <div class="" v-for="category in group.include.categories" :key="category.attributes.resource_id">
                            <router-link :to="{ name: 'Category', params: { category: category.attributes.resource_id, slug: category.attributes.slug }}">
                                <div class="pb-1 mb-1">
                                    <h3 class="text-gray-500 text-md font-bold hover:text-juaso-primary">{{ category.attributes.name }}</h3>
                                </div>
                            </router-link>
                            <ul class="">
                                <li v-for="subcategory in category.include.subcategories" :key="subcategory.attributes.resource_id" class="text-gray-500 font-light text-sm hover:text-juaso-primary py-0.5">
                                    <router-link :to="{ name: 'Category', params: { category: subcategory.attributes.resource_id, slug: subcategory.attributes.slug }}">{{ subcategory.attributes.name }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End categories -->

    </main>
    <!-- End contents -->

</template>

<script>
    import { onBeforeMount, reactive } from "vue";
    import axios from "axios";

    export default
    {
        name: "MainContents",

        setup()
        {
            const data = reactive({ categories: [] });

            onBeforeMount(() =>
            {
                axios({ method: 'GET', url: 'juaso/groups?include=categories.subcategories' })
                    .then( response => { data.categories = response.data.data })
            })

            return { data }
        }
    }
</script>

<style scoped>

</style>