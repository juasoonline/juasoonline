<template>

    <!-- Begin page title -->
    <div class="bg-white border-t">
        <div class="container mx-auto py-6 px-1.5">
            <div class="font-black text-3xl items-center flex">
                <span class="mr-10 text-gray-600 uppercase">Top Rankings</span>
                <span class="text-xl font-light">Juasoonline Official Ranking</span>
            </div>
        </div>
    </div>
    <!-- End page title -->

    <!-- Begin flash menu -->
    <div class="sticky top-0 z-40 bg-juaso-extra shadow-md">
        <div class="container mx-auto px-1.5">
            <div class="text-white flex">
                <div class="text-center px-10 py-7 border-l border-r hover:bg-juaso-secondary cursor-pointer">
                    <p class="text-sm font-bold truncate">More To Love</p>
                </div>
                <div class="flex overflow-x-auto">
                    <div v-for="( menu ) in menus.group" :key="menu.attributes.resource_id" class="text-center px-10 py-7 border-r hover:bg-juaso-secondary cursor-pointer">
                        <p class="text-sm font-bold my-auto truncate">{{ menu.attributes.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End flash menu -->

    <!-- Begin main contents -->
    <main class="container mx-auto my-4 px-1.5">


    </main>
    <!-- End main contents -->

</template>

<script>
    import { onBeforeMount, reactive, ref } from "vue";
    import axios from "axios";

    export default
    {
        name: "MainContents",
        setup ()
        {
            const isLoading = ref(false )

            const menus = reactive({ group: [], loaded: false })
            const product = reactive({ items: [], loaded: false })

            const getMenus = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/groups' })
                    const data = await response.data
                    menus.group = data.data
                    menus.loaded = true
                }
                catch( err )
                {
                    menus.loaded = false
                }
            }

            onBeforeMount(async () =>
            {
                await getMenus()
            })

            return { isLoading, menus, product }
        }
    }
</script>

<style scoped>
</style>