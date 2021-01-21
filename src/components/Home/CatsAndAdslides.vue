<template>

    <!-- Begin contents -->
    <section>
        <div class="flex flex-col grid gap-5 grid-cols-10">

            <!-- Begin categories navbar -->
            <div class="col-span-2 rounded">
                <categories-menu></categories-menu>
            </div>
            <!-- End categories navbar -->

            <!-- Begin ads slides -->
            <div class="col-span-6 bg-white p-3 rounded">Ads slide banners</div>
            <!-- End ads slides -->

            <!-- Begin user actions -->
            <div class="col-span-2 bg-white p-3 rounded">User actions</div>
            <!-- End user actions -->

        </div>
    </section>
    <!-- End contents -->

</template>

<script>
    import CategoriesMenu from "../Shared/CategoriesMenu"
    export default
    {
        name: "CatsSlides",
        components: { CategoriesMenu }
    }
</script>

<style scoped>
</style>