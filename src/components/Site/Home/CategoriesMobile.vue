<template>

    <!-- Begin contents -->
    <div class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block mx-1.5 mb-3">
        <div class="mt-5 text-center bg-white rounded p-3">

            <!-- Begin categories for medium screens -->
            <div class="md:block sm:hidden xs:hidden">
                <div class="flex grid gap-3 grid-cols-5 mb-2">
                    <div v-for="( group ) in groups.data.slice( 0, 10 )" :key="group" class="mb-2.5">
                        <router-link :to="{ name: 'Group', params: { category: group.attributes.resource_id, slug: group.attributes.slug }}" class="text-center">
                            <img class="w-11 h-11 mx-auto mb-1.5" :src="group.attributes.image_icon" />
                            <p class="text-xs truncate text-gray-600">{{ group.attributes.name }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- End categories for medium screens -->

            <!-- Begin categories for medium screens -->
            <div class="md:hidden sm:block xs:block">
                <div class="flex grid gap-3 grid-cols-4 mb-2">
                    <div v-for="( group ) in groups.data.slice( 0, 8 )" :key="group" class="mb-2.5">
                        <router-link :to="{ name: 'Group', params: { category: group.attributes.resource_id, slug: group.attributes.slug }}" class="text-center">
                            <img class="w-11 h-11 mx-auto mb-1.5" :src="group.attributes.image_icon" />
                            <p class="text-xs truncate text-gray-600">{{ group.attributes.name }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- End categories for medium screens -->

            <!-- Begin call to action button -->
            <div class="flex items-center text-center mx-auto w-full">
                <router-link to="/categories" class="bg-juaso-primary text-white text-sm px-3 py-3 rounded w-full">View all categories</router-link>
            </div>
            <!-- End call to action button -->

        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    import {onBeforeMount, reactive, ref} from "vue";
    import axios from "axios";

    export default
    {
        name: "CategoriesMobile",
        setup()
        {
            const groups = reactive({ data: [] })
            const error = ref(null )

            const getGroups = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/groups' });
                    groups.data = await response.data.data
                }
                catch (e)
                {
                    error.value = e
                }
            }

            onBeforeMount(async () =>
            {
                await getGroups()
            })

            return { groups, error }
        }
    }
</script>

<style scoped>
</style>