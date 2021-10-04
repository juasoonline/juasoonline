<template>

    <!-- Begin contents -->
    <div class="sticky top-0 z-40 flex bg-gray-50 border-b">
        <div class="container mx-auto hidden lg:block">
            <div class="py-3">

                <!-- Begin logo --->
                <router-link to="/" class="p-0 flex">
                    <img :src="mainLogo" alt="" class="h-10 py-1.5">
                </router-link>
                <!-- End logo --->

            </div>
        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    export default
    {
        data()
        {
            return { mainLogo: '../assets/images/logo.png', }
        }
    }
</script>

<style scoped>
</style>